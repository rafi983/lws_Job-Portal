const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User, Company } = require('../models');
require('dotenv').config(); // Ensure env vars are loaded

// Generate JWT
const generateToken = (id, role) => {
    const secret = process.env.JWT_SECRET || 'dev_secret_key_123';
    if (!secret) {
        console.error('JWT_SECRET is missing!');
        throw new Error('JWT_SECRET is missing');
    }
    return jwt.sign({ id, role }, secret, {
        expiresIn: '30d',
    });
};

// @desc    Register new user or company
// @route   POST /api/auth/register
// @access  Public
const register = async (req, res) => {

    const { name, email, password, role, ...otherData } = req.body;

    try {
        if (!name || !email || !password || !role) {
            return res.status(400).json({ success: false, message: 'Please add all required fields' });
        }

        // Check if user/company exists
        const userExists = await User.findOne({ where: { email } });
        const companyExists = await Company.findOne({ where: { email } });

        if (userExists || companyExists) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        let data;
        let token;

        if (role === 'USER') {
            // Filter out fields that might not exist in the User model or cause issues
            // eslint-disable-next-line no-unused-vars
            const { confirmPassword, ...userData } = otherData;

            const user = await User.create({
                name,
                email,
                password: hashedPassword,
                role: 'USER',
                ...userData
            });
            data = {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            };
            token = generateToken(user.id, 'USER');
        } else if (role === 'COMPANY') {
            // Filter out fields that might not exist in the Company model or cause issues
            // eslint-disable-next-line no-unused-vars
            const { confirmPassword, website, companySize, foundedYear, ...companyData } = otherData;

            // Map frontend fields to backend model fields if necessary
            // website -> websiteUrl
            // companySize -> employeeCount

            const mappedData = {
                ...companyData,
                websiteUrl: website,
                employeeCount: companySize
            };

            // Handle foundedYear: convert to integer or set to null if empty
            if (foundedYear) {
                mappedData.foundedYear = parseInt(foundedYear, 10);
            } else {
                // Explicitly remove foundedYear if it's empty string to avoid validation errors if any
                delete mappedData.foundedYear;
            }

            // Ensure empty strings for optional fields are treated as null or allowed if model allows
            // For SQLite/Sequelize, empty string might be fine for STRING types, but let's be safe
            if (mappedData.websiteUrl === '') mappedData.websiteUrl = null;
            if (mappedData.employeeCount === '') mappedData.employeeCount = null;
            if (mappedData.industry === '') mappedData.industry = null;
            if (mappedData.location === '') mappedData.location = null;
            if (mappedData.description === '') mappedData.description = null;

            // Generate slug
            let slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
            let slugExists = await Company.findOne({ where: { slug } });
            let counter = 1;
            while (slugExists) {
                const newSlug = `${slug}-${counter}`;
                slugExists = await Company.findOne({ where: { slug: newSlug } });
                if (!slugExists) {
                    slug = newSlug;
                } else {
                    counter++;
                }
            }

            const company = await Company.create({
                name,
                slug,
                email,
                password: hashedPassword,
                role: 'COMPANY',
                ...mappedData
            });
            data = {
                id: company.id,
                name: company.name,
                email: company.email,
                role: company.role,
                slug: company.slug
            };
            token = generateToken(company.id, 'COMPANY');
        } else {
            return res.status(400).json({ success: false, message: 'Invalid role' });
        }

        res.status(201).json({
            success: true,
            data: data,
            token: token
        });

    } catch (error) {
        console.error('Registration Error:', error);
        res.status(500).json({ success: false, message: error.message || 'Server Error', stack: error.stack });
    }
};

// @desc    Authenticate a user/company
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res) => {
    const { email, password, role } = req.body;

    try {
        if (!email || !password || !role) {
            return res.status(400).json({ success: false, message: 'Please add all fields' });
        }

        let entity;
        if (role === 'USER') {
            entity = await User.findOne({ where: { email } });
        } else if (role === 'COMPANY') {
            entity = await Company.findOne({ where: { email } });
        } else {
            return res.status(400).json({ success: false, message: 'Invalid role' });
        }

        if (entity && (await bcrypt.compare(password, entity.password))) {
            res.json({
                success: true,
                data: {
                    id: entity.id,
                    name: entity.name,
                    email: entity.email,
                    role: entity.role
                },
                token: generateToken(entity.id, role)
            });
        } else {
            res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
};

// @desc    Get current user/company profile
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
    try {
        if (req.userRole === 'USER') {
            const user = await User.findByPk(req.user.id, {
                attributes: { exclude: ['password'] }
            });
            res.status(200).json({ success: true, data: user });
        } else if (req.userRole === 'COMPANY') {
            const company = await Company.findByPk(req.company.id, {
                attributes: { exclude: ['password'] }
            });
            res.status(200).json({ success: true, data: company });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

module.exports = {
    register,
    login,
    getMe
};
