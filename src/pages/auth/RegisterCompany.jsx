import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, User, Mail, Globe, Briefcase, Users, Calendar, MapPin, Shield, Lock, Eye, EyeOff, Zap, ChartLine } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const RegisterCompany = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    industry: '',
    companySize: '',
    foundedYear: '',
    location: '',
    description: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const { register } = useAuth();

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    console.log('RegisterCompany: Submitting form data:', formData);

    const result = await register(formData, 'COMPANY');
    console.log('RegisterCompany: Registration result:', result);

    if (!result.success) {
      setError(result.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Building2 className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-3">
            Register Your Company
          </h1>
          <p className="text-lg text-muted-foreground">
            Start hiring top talent for your organization
          </p>
        </div>

        {/* Account Type Toggle */}
        <div className="w-full text-center">
          <div className="card p-2 mb-8 inline-flex mx-auto w-full max-w-md">
            <div className="grid grid-cols-2 gap-2 w-full">
              <Link to="/register" className="btn btn-ghost text-center">
                <User className="h-4 w-4 mr-2" />
                Job Seeker
              </Link>
              <button className="btn btn-primary text-center">
                <Building2 className="h-4 w-4 mr-2" />
                Employer
              </button>
            </div>
          </div>
        </div>

        {/* Register Card */}
        <div className="card p-8 md:p-10">
          {error && (
            <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md mb-4">
              {error}
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Company Information Section */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 pb-2 border-b border-border">
                <Building2 className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">Company Information</h2>
              </div>

              {/* Company Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium leading-none">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input pl-10 w-full"
                    placeholder="e.g., TechCorp Solutions"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input pl-10 w-full"
                    placeholder="john.doe@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Company Website & Industry Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="website" className="text-sm font-medium leading-none">
                    Company Website <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="url"
                      id="website"
                      name="website"
                      className="input pl-10 w-full"
                      placeholder="https://example.com"
                      value={formData.website}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="industry" className="text-sm font-medium leading-none">
                    Industry <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <select
                      id="industry"
                      name="industry"
                      className="input pl-10 w-full"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select industry</option>
                      <option value="technology">Technology</option>
                      <option value="finance">Finance & Banking</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                      <option value="retail">Retail & E-commerce</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="consulting">Consulting</option>
                      <option value="marketing">Marketing & Advertising</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Company Size & Founded Year Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="companySize" className="text-sm font-medium leading-none">
                    Company Size
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <select
                      id="companySize"
                      name="companySize"
                      className="input pl-10 w-full"
                      value={formData.companySize}
                      onChange={handleChange}
                    >
                      <option value="">Select company size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="501-1000">501-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="foundedYear" className="text-sm font-medium leading-none">
                    Founded Year
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="number"
                      id="foundedYear"
                      name="foundedYear"
                      className="input pl-10 w-full"
                      placeholder="e.g., 2010"
                      min="1800"
                      max="2025"
                      value={formData.foundedYear}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Company Location */}
              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium leading-none">
                  Headquarters Location <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="input pl-10 w-full"
                    placeholder="City, Country"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Company Description */}
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium leading-none">
                  Company Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="textarea min-h-[120px] w-full"
                  placeholder="Tell us about your company, mission, and what makes it a great place to work..."
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
                <p className="text-xs text-muted-foreground">
                  Minimum 100 characters. This will be displayed on your company profile.
                </p>
              </div>
            </div>

            {/* Account Security Section */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 pb-2 border-b border-border">
                <Shield className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">Account Security</h2>
              </div>

              {/* Password Fields Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium leading-none">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      className="input pl-10 pr-10 w-full"
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      onClick={togglePassword}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="text-sm font-medium leading-none">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      className="input pl-10 pr-10 w-full"
                      placeholder="Re-enter your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmPassword}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground -mt-2">
                Password must be at least 8 characters with letters and numbers
              </p>
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-ring"
                  required
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  I agree to the{' '}
                  <a href="#" className="text-primary hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="verified"
                  className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-ring"
                  required
                />
                <label htmlFor="verified" className="text-sm text-muted-foreground">
                  I confirm that I am an authorized representative of this company and have the right to register on its behalf
                </label>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="updates"
                  className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-ring"
                />
                <label htmlFor="updates" className="text-sm text-muted-foreground">
                  Send me product updates, hiring tips, and promotional offers via email
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-full text-base h-11 mt-2">
              <Building2 className="h-4 w-4 mr-2" />
              Register Company
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-card px-4 text-muted-foreground font-medium">
                Or continue with
              </span>
            </div>
          </div>

          {/* Sign In Link */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline font-medium">
              Sign in
            </Link>
          </div>
        </div>

        {/* Benefits for Employers */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-1">Access Top Talent</h3>
              <p className="text-xs text-muted-foreground">
                Connect with thousands of qualified candidates actively looking for opportunities
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-1">Easy Job Posting</h3>
              <p className="text-xs text-muted-foreground">
                Post jobs in minutes with our intuitive interface and smart templates
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <ChartLine className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-1">Smart Analytics</h3>
              <p className="text-xs text-muted-foreground">
                Track applications and optimize your hiring with detailed insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCompany;
