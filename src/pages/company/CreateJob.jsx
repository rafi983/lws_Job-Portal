import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, X, Plus, Send } from 'lucide-react';

const CreateJob = () => {
  const [skills, setSkills] = useState(['JavaScript', 'React', 'Node.js', 'MongoDB', 'AWS']);
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
          <Link to="/company/dashboard" className="hover:text-primary">
            Dashboard
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Create Job</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Post a New Job</h1>
            <p className="text-muted-foreground">
              Fill in the details to create a new job posting
            </p>
          </div>
          <Link to="/company/dashboard" className="btn btn-outline">
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Link>
        </div>
      </div>

      {/* Create Job Form */}
      <form className="space-y-6">
        {/* Basic Information */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">Basic Information</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="jobTitle" className="label block mb-2">
                Job Title *
              </label>
              <input
                type="text"
                id="jobTitle"
                className="input"
                placeholder="e.g. Senior Full Stack Developer"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="jobType" className="label block mb-2">
                  Job Type *
                </label>
                <select id="jobType" className="input" required>
                  <option value="">Select job type</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="freelance">Freelance</option>
                  <option value="internship">Internship</option>
                </select>
              </div>

              <div>
                <label htmlFor="workMode" className="label block mb-2">
                  Work Mode *
                </label>
                <select id="workMode" className="input" required>
                  <option value="">Select work mode</option>
                  <option value="on-site">On-site</option>
                  <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="label block mb-2">
                  Category *
                </label>
                <select id="category" className="input" required>
                  <option value="">Select category</option>
                  <option value="engineering">Engineering</option>
                  <option value="design">Design</option>
                  <option value="product">Product</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                  <option value="hr">Human Resources</option>
                  <option value="finance">Finance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="label block mb-2">
                  Experience Level *
                </label>
                <select id="experience" className="input" required>
                  <option value="">Select experience level</option>
                  <option value="entry">Entry Level (0-2 years)</option>
                  <option value="mid">Mid Level (2-5 years)</option>
                  <option value="senior">Senior Level (5-10 years)</option>
                  <option value="lead">Lead (10+ years)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Salary */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">Location & Compensation</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="city" className="label block mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  id="city"
                  className="input"
                  placeholder="e.g. San Francisco"
                  required
                />
              </div>

              <div>
                <label htmlFor="salaryMin" className="label block mb-2">
                  Minimum Salary ($)
                </label>
                <input
                  type="number"
                  id="salaryMin"
                  className="input"
                  placeholder="e.g. 100000"
                />
              </div>

              <div>
                <label htmlFor="salaryMax" className="label block mb-2">
                  Maximum Salary ($)
                </label>
                <input
                  type="number"
                  id="salaryMax"
                  className="input"
                  placeholder="e.g. 150000"
                />
              </div>

              <div>
                <label htmlFor="salaryPeriod" className="label block mb-2">
                  Salary Period
                </label>
                <select id="salaryPeriod" className="input">
                  <option value="yearly">Yearly</option>
                  <option value="monthly">Monthly</option>
                  <option value="hourly">Hourly</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">Job Description</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="description" className="label block mb-2">
                Job Description *
              </label>
              <textarea
                id="description"
                className="textarea"
                rows="8"
                placeholder="Describe the role, responsibilities, and what makes this opportunity exciting..."
                required
              ></textarea>
              <p className="text-xs text-muted-foreground mt-2">
                Provide a detailed description of the role and responsibilities
              </p>
            </div>

            <div>
              <label htmlFor="requirements" className="label block mb-2">
                Requirements & Qualifications
              </label>
              <textarea
                id="requirements"
                className="textarea"
                rows="6"
                placeholder="List the required skills, qualifications, and experience..."
              ></textarea>
            </div>

            <div>
              <label htmlFor="benefits" className="label block mb-2">
                Benefits & Perks
              </label>
              <textarea
                id="benefits"
                className="textarea"
                rows="5"
                placeholder="Describe the benefits, perks, and what makes your company a great place to work..."
              ></textarea>
            </div>
          </div>
        </div>

        {/* Skills & Requirements */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">Required Skills</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="skillInput" className="label block mb-2">
                Add Skills *
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
                Add technical and soft skills required for this position
              </p>
            </div>

            <div>
              <label className="label block mb-3">Added Skills</label>
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
        </div>

        {/* Application Details */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">Application Settings</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="vacancies" className="label block mb-2">
                  Number of Vacancies
                </label>
                <input
                  type="number"
                  id="vacancies"
                  className="input"
                  placeholder="e.g. 2"
                  defaultValue="1"
                  min="1"
                />
              </div>

              <div>
                <label htmlFor="deadline" className="label block mb-2">
                  Application Deadline *
                </label>
                <input
                  type="date"
                  id="deadline"
                  className="input"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="card p-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1"></div>
            <Link to="/company/dashboard" className="btn btn-outline">
              Cancel
            </Link>
            <button type="submit" className="btn btn-primary">
              <Send className="h-4 w-4 mr-2" />
              Publish Job
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateJob;

