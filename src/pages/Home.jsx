import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ChevronDown, Building2, MapPin, Clock, X, Upload, FileText, Trash2, Send, Loader2, Briefcase, DollarSign } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    type: '',
    location: '',
    category: ''
  });
  const [sort, setSort] = useState('newest');
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalPages: 1
  });
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Apply Dialog State
  const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [coverMessage, setCoverMessage] = useState('');
  const [applying, setApplying] = useState(false);

  const fetchJobs = useCallback(async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams();
      if (filters.search) queryParams.append('search', filters.search);
      if (filters.type) queryParams.append('type', filters.type);
      if (filters.location) queryParams.append('location', filters.location);
      if (filters.category) queryParams.append('category', filters.category);
      queryParams.append('sort', sort);
      queryParams.append('page', pagination.page);
      queryParams.append('limit', pagination.limit);

      console.log('Fetching jobs with params:', queryParams.toString());
      const response = await fetch(`http://localhost:5000/api/jobs?${queryParams.toString()}`);
      const data = await response.json();
      console.log('Jobs API response:', data);

      if (data.success) {
        // Ensure data.data is an array before setting it
        setJobs(Array.isArray(data.data) ? data.data : []);
        setPagination(prev => ({
          ...prev,
          totalPages: data.totalPages || 1
        }));
      } else {
        // Handle case where success is false but maybe no error thrown
        setJobs([]);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setJobs([]); // Clear jobs on error
    } finally {
      setLoading(false);
    }
  }, [filters, sort, pagination.page, pagination.limit]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const handleSearchChange = (e) => {
    setFilters(prev => ({ ...prev, search: e.target.value }));
    setPagination(prev => ({ ...prev, page: 1 }));
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setPagination(prev => ({ ...prev, page: 1 }));
    setActiveDropdown(null);
  };

  const handleSortChange = (newSort) => {
    setSort(newSort);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  const openApplyDialog = (job) => {
    if (!user) {
      navigate('/login');
      return;
    }
    setSelectedJob(job);
    setIsApplyDialogOpen(true);
  };

  const closeApplyDialog = () => {
    setIsApplyDialogOpen(false);
    setSelectedJob(null);
    setResumeFile(null);
    setCoverMessage('');
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setResumeFile(file);
    } else {
      alert('Please upload a PDF or Word document.');
    }
  };

  const removeFile = () => setResumeFile(null);

  const submitApplication = async () => {
    if (!coverMessage) {
      alert('Please provide a cover letter.');
      return;
    }

    setApplying(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/applications/jobs/${selectedJob.id}/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          coverLetter: coverMessage
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert('Application submitted successfully!');
        closeApplyDialog();
      } else {
        alert(data.message || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('An error occurred while submitting application');
    } finally {
      setApplying(false);
    }
  };

  const parseSkills = (skills) => {
    if (!skills) return [];
    if (Array.isArray(skills)) return skills;
    try {
      const parsed = JSON.parse(skills);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return typeof skills === 'string' ? skills.split(',').map(s => s.trim()) : [];
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Find Your Dream Job
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover thousands of job opportunities from top companies. Your next career move starts here.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="mb-8">
        <div className="card p-6">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 ring ring-transparent focus-within:ring-primary rounded-md place-content-center transition-all">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search jobs by title, skill..."
                    className="input pl-10 w-full outline-none border-none"
                    value={filters.search}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
              <button className="btn btn-primary flex gap-2" onClick={fetchJobs}>
                <Search className="h-4 w-4 mr-2" />
                Search Jobs
              </button>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border">
              <span className="text-sm font-medium text-muted-foreground mr-2">Filters:</span>

              {/* Job Type Filter */}
              <div className="relative">
                <button
                  className={`btn btn-outline text-xs h-8 px-3 flex items-center ${filters.type ? 'bg-accent text-accent-foreground' : ''}`}
                  onClick={() => toggleDropdown('type')}
                >
                  {filters.type || 'Job Type'}
                  <ChevronDown className="ml-2 h-3 w-3" />
                </button>
                {activeDropdown === 'type' && (
                  <div className="absolute top-full left-0 mt-2 w-48 card p-2 shadow-lg z-10">
                    <div className="space-y-1">
                      {['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'].map(type => (
                        <label key={type} className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                          <input
                            type="checkbox"
                            className="rounded border-input"
                            checked={filters.type === type}
                            onChange={() => handleFilterChange('type', filters.type === type ? '' : type)}
                          />
                          <span className="text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Category Filter */}
              <div className="relative">
                <button
                  className={`btn btn-outline text-xs h-8 px-3 flex items-center ${filters.category ? 'bg-accent text-accent-foreground' : ''}`}
                  onClick={() => toggleDropdown('category')}
                >
                  {filters.category || 'Category'}
                  <ChevronDown className="ml-2 h-3 w-3" />
                </button>
                {activeDropdown === 'category' && (
                  <div className="absolute top-full left-0 mt-2 w-48 card p-2 shadow-lg z-10">
                    <div className="space-y-1">
                      {['Engineering', 'Design', 'Product', 'Marketing', 'Sales', 'HR', 'Finance'].map(cat => (
                        <label key={cat} className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                          <input
                            type="checkbox"
                            className="rounded border-input"
                            checked={filters.category === cat}
                            onChange={() => handleFilterChange('category', filters.category === cat ? '' : cat)}
                          />
                          <span className="text-sm">{cat}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sort */}
              <div className="relative ml-auto">
                <button
                  className="btn btn-ghost text-xs h-8 px-3 flex items-center"
                  onClick={() => toggleDropdown('sort')}
                >
                  Sort by: {sort === 'newest' ? 'Newest' : 'Oldest'}
                  <ChevronDown className="ml-2 h-3 w-3" />
                </button>
                {activeDropdown === 'sort' && (
                  <div className="absolute top-full right-0 mt-2 w-48 card p-2 shadow-lg z-10">
                    <div className="space-y-1">
                      <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent" onClick={() => handleSortChange('newest')}>Newest</button>
                      <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent" onClick={() => handleSortChange('oldest')}>Oldest</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="space-y-4">
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-12 card">
            <p className="text-muted-foreground">No jobs found matching your criteria.</p>
          </div>
        ) : (
          jobs.map(job => (
            <div key={job.id} className="card p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
                    {job.company.logoUrl ? (
                      <img src={job.company.logoUrl} alt={job.company.name} className="h-full w-full object-cover" />
                    ) : (
                      <Building2 className="h-8 w-8 text-primary" />
                    )}
                  </div>
                </div>

                {/* Job Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        <Link to={`/jobs/${job.slug || job.id}`} className="hover:text-primary">
                          {job.title}
                        </Link>
                      </h3>
                      <Link to={`/companies/${job.company.slug}`} className="text-sm text-muted-foreground hover:text-primary">
                        {job.company.name}
                      </Link>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="btn btn-primary"
                        onClick={() => openApplyDialog(job)}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {job.type}
                    </span>
                    {(job.salaryMin || job.salaryMax) && (
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        {job.salaryMin && job.salaryMax
                          ? `$${job.salaryMin} - $${job.salaryMax}`
                          : `$${job.salaryMin || job.salaryMax}`}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {new Date(job.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {parseSkills(job.skills).slice(0, 5).map((skill, index) => (
                      <span key={index} className="badge badge-secondary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </section>

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={`btn w-10 h-10 p-0 ${pagination.page === page ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setPagination(prev => ({ ...prev, page }))}
            >
              {page}
            </button>
          ))}
        </div>
      )}

      {/* Apply Modal */}
      {isApplyDialogOpen && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="card w-full max-w-lg p-6 shadow-xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Apply for {selectedJob.title}</h2>
              <button onClick={closeApplyDialog} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Resume Upload */}
              <div>
                <label className="label block mb-2">Resume / CV</label>
                {!resumeFile ? (
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:bg-accent/50 transition-colors">
                    <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm font-medium mb-1">Upload your resume</p>
                    <p className="text-xs text-muted-foreground mb-4">PDF, DOC, DOCX (Max 5MB)</p>
                    <label className="btn btn-outline btn-sm cursor-pointer">
                      Browse Files
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                      />
                    </label>
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-3 border border-border rounded-lg bg-accent/50">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <div className="text-sm">
                        <p className="font-medium truncate max-w-[200px]">{resumeFile.name}</p>
                        <p className="text-xs text-muted-foreground">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    </div>
                    <button onClick={removeFile} className="text-muted-foreground hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                )}
                <p className="text-xs text-muted-foreground mt-2">
                  * Note: For this demo, your profile resume will be used if no file is uploaded here.
                </p>
              </div>

              {/* Cover Letter */}
              <div>
                <label htmlFor="coverLetter" className="label block mb-2">Cover Letter</label>
                <textarea
                  id="coverLetter"
                  className="textarea"
                  rows="5"
                  placeholder="Why are you a good fit for this role?"
                  value={coverMessage}
                  onChange={(e) => setCoverMessage(e.target.value)}
                ></textarea>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3">
                <button onClick={closeApplyDialog} className="btn btn-outline">
                  Cancel
                </button>
                <button
                  onClick={submitApplication}
                  className="btn btn-primary"
                  disabled={applying}
                >
                  {applying ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Application
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

