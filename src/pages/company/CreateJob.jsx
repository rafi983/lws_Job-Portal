import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, X, Plus, Send, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const CreateJob = () => {
  // eslint-disable-next-line no-unused-vars
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    type: 'Full-time',
    workMode: 'On-site',
    location: '',
    salaryMin: '',
    salaryMax: '',
    salaryPeriod: 'Yearly',
    description: '',
    requirements: '',
    benefits: '',
    deadline: '',
    vacancies: 1,
    category: 'Engineering',
    experienceLevel: 'Mid'
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const jobData = {
        ...formData,
        skills: JSON.stringify(skills)
      };

      const response = await fetch('http://localhost:5000/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(jobData)
      });

      const data = await response.json();

      if (response.ok) {
        alert('Job posted successfully!');
        // Redirect to manage jobs page instead of non-existent /company/jobs
        navigate('/company/manage-jobs');
      } else {
        alert(data.message || 'Failed to post job');
      }
    } catch (error) {
      console.error('Error posting job:', error);
      alert('An error occurred while posting job');
    } finally {
      setLoading(false);
    }
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
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Basic Information */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">Basic Information</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="title" className="label block mb-2">
                Job Title *
              </label>
              <input
                type="text"
                id="title"
                className="input"
                placeholder="e.g. Senior Frontend Developer"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="type" className="label block mb-2">
                  Employment Type *
                </label>
                <select
                  id="type"
                  className="input"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div>
                <label htmlFor="workMode" className="label block mb-2">
                  Work Mode *
                </label>
                <select
                  id="workMode"
                  className="input"
                  value={formData.workMode}
                  onChange={handleInputChange}
                  required
                >
                  <option value="On-site">On-site</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <div>
                <label htmlFor="category" className="label block mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  className="input"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Engineering">Engineering</option>
                  <option value="Design">Design</option>
                  <option value="Product">Product</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                  <option value="HR">HR</option>
                  <option value="Finance">Finance</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="experienceLevel" className="label block mb-2">
                  Experience Level *
                </label>
                <select
                  id="experienceLevel"
                  className="input"
                  value={formData.experienceLevel}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Entry">Entry Level</option>
                  <option value="Mid">Mid Level</option>
                  <option value="Senior">Senior Level</option>
                  <option value="Expert">Expert Level</option>
                  <option value="Lead">Lead</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="location" className="label block mb-2">
                Location *
              </label>
              <input
                type="text"
                id="location"
                className="input"
                placeholder="e.g. San Francisco, CA or Remote"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Salary & Vacancies */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">Salary & Vacancies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="salaryMin" className="label block mb-2">
                Min Salary
              </label>
              <input
                type="number"
                id="salaryMin"
                className="input"
                placeholder="e.g. 50000"
                value={formData.salaryMin}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="salaryMax" className="label block mb-2">
                Max Salary
              </label>
              <input
                type="number"
                id="salaryMax"
                className="input"
                placeholder="e.g. 80000"
                value={formData.salaryMax}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="salaryPeriod" className="label block mb-2">
                Period
              </label>
              <select
                id="salaryPeriod"
                className="input"
                value={formData.salaryPeriod}
                onChange={handleInputChange}
              >
                <option value="Hourly">Hourly</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div>
              <label htmlFor="vacancies" className="label block mb-2">
                Vacancies
              </label>
              <input
                type="number"
                id="vacancies"
                className="input"
                min="1"
                value={formData.vacancies}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="deadline" className="label block mb-2">
                Application Deadline
              </label>
              <input
                type="date"
                id="deadline"
                className="input"
                value={formData.deadline}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Description & Requirements */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">Job Details</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="description" className="label block mb-2">
                Job Description *
              </label>
              <textarea
                id="description"
                className="textarea"
                rows="6"
                placeholder="Describe the role and responsibilities..."
                value={formData.description}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="requirements" className="label block mb-2">
                Requirements
              </label>
              <textarea
                id="requirements"
                className="textarea"
                rows="6"
                placeholder="List the requirements for this role..."
                value={formData.requirements}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div>
              <label htmlFor="benefits" className="label block mb-2">
                Benefits
              </label>
              <textarea
                id="benefits"
                className="textarea"
                rows="4"
                placeholder="List the benefits offered..."
                value={formData.benefits}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-6">Required Skills</h2>
          <div className="mb-4">
            <div className="flex gap-2">
              <input
                type="text"
                className="input flex-1"
                placeholder="Type a skill and press Add"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddSkill();
                  }
                }}
              />
              <button type="button" className="btn btn-primary" onClick={handleAddSkill}>
                <Plus className="h-4 w-4 mr-2" />
                Add
              </button>
            </div>
          </div>
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

        {/* Form Actions */}
        <div className="flex justify-end gap-4">
          <Link to="/company/dashboard" className="btn btn-outline">
            Cancel
          </Link>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Posting...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Post Job
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateJob;
