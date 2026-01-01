import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, User, Camera, Upload, Trash2, Plus, X, Save, Linkedin, Github, Globe } from 'lucide-react';

const EditUserProfile = () => {
  const [skills, setSkills] = useState([
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'AWS'
  ]);
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Link to="/job-seeker/dashboard" className="hover:text-primary">
            Dashboard
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/job-seeker/profile" className="hover:text-primary">
            My Profile
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Edit Profile</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Edit Profile</h1>
            <p className="text-muted-foreground">
              Update your personal information and preferences
            </p>
          </div>
          <Link to="/job-seeker/profile" className="btn btn-outline">
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Link>
        </div>
      </div>

      {/* Edit Form */}
      <form className="space-y-6">
        {/* Profile Photo Section */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">Profile Photo</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative flex-shrink-0">
              <div className="h-32 w-32 rounded-full bg-secondary flex items-center justify-center">
                <User className="h-16 w-16 text-primary" />
              </div>
              <div className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center border-4 border-white cursor-pointer hover:bg-primary/90 transition-colors">
                <Camera className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-2">Upload Profile Picture</h3>
              <p className="text-sm text-muted-foreground mb-4">
                JPG, PNG or GIF. Max size of 5MB.
              </p>
              <div className="flex gap-2">
                <label className="btn btn-primary cursor-pointer">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Photo
                  <input type="file" className="hidden" accept="image/*" />
                </label>
                <button type="button" className="btn btn-outline">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="label block mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                className="input"
                placeholder="Enter last name"
                defaultValue="Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="label block mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                className="input"
                placeholder="Enter email"
                defaultValue="john.doe@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="label block mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                className="input"
                placeholder="Enter phone number"
                defaultValue="+1 (415) 555-0123"
                required
              />
            </div>
            <div>
              <label htmlFor="title" className="label block mb-2">
                Professional Title
              </label>
              <input
                type="text"
                id="title"
                className="input"
                placeholder="e.g. Full Stack Developer"
                defaultValue="Full Stack Developer"
              />
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="city" className="label block mb-2">
                City *
              </label>
              <input
                type="text"
                id="city"
                className="input"
                placeholder="Enter city"
                defaultValue="San Francisco"
                required
              />
            </div>
            <div>
              <label htmlFor="state" className="label block mb-2">
                State/Province *
              </label>
              <input
                type="text"
                id="state"
                className="input"
                placeholder="Enter state"
                defaultValue="California"
                required
              />
            </div>
            <div>
              <label htmlFor="country" className="label block mb-2">
                Country *
              </label>
              <input
                type="text"
                id="country"
                className="input"
                placeholder="Enter country"
                defaultValue="United States"
                required
              />
            </div>
            <div>
              <label htmlFor="zipcode" className="label block mb-2">
                Zip Code
              </label>
              <input
                type="text"
                id="zipcode"
                className="input"
                placeholder="Enter zip code"
                defaultValue="94102"
              />
            </div>
          </div>
        </div>

        {/* About */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">About</h2>
          <div>
            <label htmlFor="bio" className="label block mb-2">
              Professional Summary
            </label>
            <textarea
              id="bio"
              className="textarea"
              rows="5"
              placeholder="Write a brief summary about yourself, your experience, and what you're looking for..."
              defaultValue="Experienced Full Stack Developer with 5+ years of expertise in building scalable web applications. Passionate about creating clean, efficient code and delivering exceptional user experiences. Strong background in React, Node.js, and cloud technologies."
            ></textarea>
          </div>
        </div>

        {/* Skills */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">Skills</h2>
          <div className="mb-4">
            <label htmlFor="skillInput" className="label block mb-2">
              Add Skills
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                id="skillInput"
                className="input flex-1"
                placeholder="Type a skill and press Add"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />
              <button type="button" className="btn btn-primary" onClick={handleAddSkill}>
                <Plus className="h-4 w-4 mr-2" />
                Add
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Add skills relevant to your profession. Press Enter or click Add to add each skill.
            </p>
          </div>
          <div>
            <label className="label block mb-3">Current Skills</label>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="badge badge-secondary inline-flex items-center gap-1">
                  {skill}
                  <button type="button" className="hover:text-red-600" onClick={() => handleRemoveSkill(skill)}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Work Experience</h2>
            <button type="button" className="btn btn-outline">
              <Plus className="h-4 w-4 mr-2" />
              Add Experience
            </button>
          </div>

          <div className="space-y-6">
            {/* Experience Entry 1 */}
            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-medium">Senior Full Stack Developer</h3>
                <button type="button" className="btn-ghost p-1 text-red-600 hover:bg-red-50">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label block mb-2">Company</label>
                  <input type="text" className="input" defaultValue="TechCorp Solutions" />
                </div>
                <div>
                  <label className="label block mb-2">Employment Type</label>
                  <input type="text" className="input" defaultValue="Full-time" />
                </div>
                <div>
                  <label className="label block mb-2">Start Date</label>
                  <input type="month" className="input" defaultValue="2022-01" />
                </div>
                <div>
                  <label className="label block mb-2">End Date</label>
                  <input type="month" className="input" placeholder="Present" />
                </div>
              </div>
            </div>

            {/* Experience Entry 2 */}
            <div className="p-4 border border-border rounded-lg">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-medium">Full Stack Developer</h3>
                <button type="button" className="btn-ghost p-1 text-red-600 hover:bg-red-50">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label block mb-2">Company</label>
                  <input type="text" className="input" defaultValue="WebTech Industries" />
                </div>
                <div>
                  <label className="label block mb-2">Employment Type</label>
                  <select className="input" defaultValue="full-time">
                    <option value="">Select type</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="freelance">Freelance</option>
                    <option value="internship">Internship</option>
                    <option value="temporary">Temporary</option>
                  </select>
                </div>
                <div>
                  <label className="label block mb-2">Start Date</label>
                  <input type="month" className="input" defaultValue="2020-06" />
                </div>
                <div>
                  <label className="label block mb-2">End Date</label>
                  <input type="month" className="input" defaultValue="2021-12" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Education</h2>
            <button type="button" className="btn btn-outline">
              <Plus className="h-4 w-4 mr-2" />
              Add Education
            </button>
          </div>

          <div className="p-4 border border-border rounded-lg">
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-medium">Bachelor of Science in Computer Science</h3>
              <button type="button" className="btn-ghost p-1 text-red-600 hover:bg-red-50">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label block mb-2">Institution</label>
                <input type="text" className="input" defaultValue="Stanford University" />
              </div>
              <div>
                <label className="label block mb-2">Degree</label>
                <input type="text" className="input" defaultValue="Bachelor of Science" />
              </div>
              <div>
                <label className="label block mb-2">Start Year</label>
                <input type="number" className="input" defaultValue="2016" />
              </div>
              <div>
                <label className="label block mb-2">End Year</label>
                <input type="number" className="input" defaultValue="2020" />
              </div>
            </div>
          </div>
        </div>

        {/* Resume Upload */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">Resume/CV</h2>
          <div className="space-y-4">
            {/* Current Resume */}
            <div className="p-4 bg-secondary rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">John_Doe_Resume.pdf</p>
                  <p className="text-xs text-muted-foreground">Updated Nov 28, 2025 • 245 KB</p>
                </div>
                <button type="button" className="btn-ghost p-2 text-red-600 hover:bg-red-50">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Upload New Resume */}
            <div>
              <label className="btn btn-outline w-full cursor-pointer">
                <Upload className="h-4 w-4 mr-2" />
                Upload New Resume
                <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
              </label>
              <p className="text-xs text-muted-foreground mt-2">
                Supported formats: PDF, DOC, DOCX. Max size: 5MB
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">Social Profiles</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="linkedin" className="label block mb-2">
                <Linkedin className="h-4 w-4 inline mr-1" />
                LinkedIn
              </label>
              <input
                type="url"
                id="linkedin"
                className="input"
                placeholder="https://linkedin.com/in/username"
                defaultValue="https://linkedin.com/in/johndoe"
              />
            </div>
            <div>
              <label htmlFor="github" className="label block mb-2">
                <Github className="h-4 w-4 inline mr-1" />
                GitHub
              </label>
              <input
                type="url"
                id="github"
                className="input"
                placeholder="https://github.com/username"
                defaultValue="https://github.com/johndoe"
              />
            </div>
            <div>
              <label htmlFor="portfolio" className="label block mb-2">
                <Globe className="h-4 w-4 inline mr-1" />
                Portfolio Website
              </label>
              <input
                type="url"
                id="portfolio"
                className="input"
                placeholder="https://yourwebsite.com"
                defaultValue="https://johndoe.dev"
              />
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="card p-6">
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <Link to="/job-seeker/profile" className="btn btn-outline">
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Link>
            <button type="submit" className="btn btn-primary">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUserProfile;

