import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, Building2, MapPin, Clock, Users, Monitor, Cpu, Code, X, Upload, FileText, Trash2, Send } from 'lucide-react';

const Home = () => {
  const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [coverMessage, setCoverMessage] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  const openApplyDialog = () => setIsApplyDialogOpen(true);
  const closeApplyDialog = () => setIsApplyDialogOpen(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setResumeFile(file);
    }
  };

  const removeFile = () => setResumeFile(null);

  const submitApplication = () => {
    console.log('Submitting application:', { resumeFile, coverMessage });
    closeApplyDialog();
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
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search jobs by title, skill..."
                    className="input pl-10 w-full outline-none border-none"
                  />
                </div>
              </div>

              <button className="btn btn-primary flex gap-2">
                <Search className="h-4 w-4 mr-2" />
                Search Jobs
              </button>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border">
              <span className="text-sm font-medium text-muted-foreground mr-2">Filters:</span>

              {/* Job Type Dropdown */}
              <div className="relative">
                <button
                  className="btn btn-outline text-xs h-8 px-3 flex items-center"
                  onClick={() => toggleDropdown('jobType')}
                >
                  Job Type
                  <ChevronDown className="ml-2 h-3 w-3" />
                </button>
                {activeDropdown === 'jobType' && (
                  <div className="absolute top-full left-0 mt-2 min-w-[200px] card p-2 z-50">
                    <div className="space-y-1">
                      {['Full-time', 'Part-time', 'Contract', 'Internship'].map((type) => (
                        <label key={type} className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                          <input type="checkbox" className="rounded border-input" />
                          <span className="text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Experience Level Dropdown */}
              <div className="relative">
                <button
                  className="btn btn-outline text-xs h-8 px-3 flex items-center"
                  onClick={() => toggleDropdown('experience')}
                >
                  Experience Level
                  <ChevronDown className="ml-2 h-3 w-3" />
                </button>
                {activeDropdown === 'experience' && (
                  <div className="absolute top-full left-0 mt-2 min-w-[200px] card p-2 z-50">
                    <div className="space-y-1">
                      {['Entry Level', 'Mid Level', 'Senior Level', 'Lead/Principal'].map((level) => (
                        <label key={level} className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                          <input type="checkbox" className="rounded border-input" />
                          <span className="text-sm">{level}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Salary Range Dropdown */}
              <div className="relative">
                <button
                  className="btn btn-outline text-xs h-8 px-3 flex items-center"
                  onClick={() => toggleDropdown('salary')}
                >
                  Salary Range
                  <ChevronDown className="ml-2 h-3 w-3" />
                </button>
                {activeDropdown === 'salary' && (
                  <div className="absolute top-full left-0 mt-2 min-w-[200px] card p-2 z-50">
                    <div className="space-y-1">
                      {['$0 - $50k', '$50k - $100k', '$100k - $150k', '$150k+'].map((range) => (
                        <label key={range} className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                          <input type="checkbox" className="rounded border-input" />
                          <span className="text-sm">{range}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Skills Dropdown */}
              <div className="relative">
                <button
                  className="btn btn-outline text-xs h-8 px-3 flex items-center"
                  onClick={() => toggleDropdown('skills')}
                >
                  Skills
                  <ChevronDown className="ml-2 h-3 w-3" />
                </button>
                {activeDropdown === 'skills' && (
                  <div className="absolute top-full left-0 mt-2 min-w-[200px] card p-2 z-50">
                    <div className="space-y-1">
                      {['React', 'Node.js', 'Python', 'TypeScript'].map((skill) => (
                        <label key={skill} className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer">
                          <input type="checkbox" className="rounded border-input" />
                          <span className="text-sm">{skill}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button className="btn btn-ghost text-xs h-8 px-3 text-muted-foreground hover:text-foreground">
                Clear All
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Available Jobs</h2>
          <p className="text-sm text-muted-foreground mt-1">Showing 1,247 results</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <div className="relative">
            <button
              className="btn btn-outline text-sm h-9 flex items-center"
              onClick={() => toggleDropdown('sort')}
            >
              Most Recent
              <ChevronDown className="ml-2 h-3 w-3" />
            </button>
            {activeDropdown === 'sort' && (
              <div className="absolute top-full right-0 mt-2 min-w-[200px] card p-2 z-50">
                <button className="w-full text-left text-sm p-2 hover:bg-accent rounded">Most Recent</button>
                <button className="w-full text-left text-sm p-2 hover:bg-accent rounded">Salary (High to Low)</button>
                <button className="w-full text-left text-sm p-2 hover:bg-accent rounded">Salary (Low to High)</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Job Cards Grid */}
      <div className="grid gap-4 md:gap-6">
        {/* Job Card 1 */}
        <article className="card p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    <Link to="/jobs/1" className="hover:underline">Senior Full Stack Developer</Link>
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <Link to="/company/profile" className="hover:text-primary font-medium">TechCorp Solutions</Link>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      San Francisco, CA
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Posted 2 days ago
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                We're looking for an experienced Full Stack Developer to join our dynamic team. You'll be working on cutting-edge web applications using React, Node.js, and cloud technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary">Full-time</span>
                <span className="badge badge-outline">Remote</span>
                <span className="badge badge-outline">React</span>
                <span className="badge badge-outline">Node.js</span>
                <span className="badge badge-outline">TypeScript</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-primary">$120k - $180k</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    47 applicants
                  </span>
                </div>
                <div className="flex gap-2">
                  <Link to="/jobs/1" className="btn btn-outline text-sm">View Details</Link>
                  <button onClick={openApplyDialog} className="btn btn-primary text-sm">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Job Card 2 */}
        <article className="card p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center">
                <Monitor className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    <Link to="/jobs/2" className="hover:underline">UI/UX Designer</Link>
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <Link to="/company/profile" className="hover:text-primary font-medium">Design Studio Pro</Link>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      New York, NY
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Posted 5 days ago
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                Join our creative team to design intuitive and beautiful user experiences for our suite of SaaS products. Experience with Figma and design systems required.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary">Full-time</span>
                <span className="badge badge-outline">Hybrid</span>
                <span className="badge badge-outline">Figma</span>
                <span className="badge badge-outline">Design Systems</span>
                <span className="badge badge-outline">Prototyping</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-primary">$90k - $130k</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    32 applicants
                  </span>
                </div>
                <div className="flex gap-2">
                  <Link to="/jobs/2" className="btn btn-outline text-sm">View Details</Link>
                  <button onClick={openApplyDialog} className="btn btn-primary text-sm">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Job Card 3 */}
        <article className="card p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    <Link to="/jobs/3" className="hover:underline">DevOps Engineer</Link>
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <Link to="/company/profile" className="hover:text-primary font-medium">CloudScale Inc</Link>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Austin, TX
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Posted 1 week ago
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                Build and maintain our cloud infrastructure using AWS, Kubernetes, and Terraform. Help us scale our platform to serve millions of users worldwide.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary">Full-time</span>
                <span className="badge badge-outline">Remote</span>
                <span className="badge badge-outline">AWS</span>
                <span className="badge badge-outline">Kubernetes</span>
                <span className="badge badge-outline">Docker</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-primary">$130k - $170k</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    61 applicants
                  </span>
                </div>
                <div className="flex gap-2">
                  <Link to="/jobs/3" className="btn btn-outline text-sm">View Details</Link>
                  <button onClick={openApplyDialog} className="btn btn-primary text-sm">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Job Card 4 */}
        <article className="card p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center">
                <Code className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    <Link to="/jobs/4" className="hover:underline">Frontend Developer (React)</Link>
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <Link to="/company/profile" className="hover:text-primary font-medium">Innovate Labs</Link>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Seattle, WA
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Posted 3 days ago
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                We're seeking a talented Frontend Developer with strong React skills to build responsive and performant web applications. You'll work closely with designers and backend engineers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-secondary">Full-time</span>
                <span className="badge badge-outline">On-site</span>
                <span className="badge badge-outline">React</span>
                <span className="badge badge-outline">JavaScript</span>
                <span className="badge badge-outline">CSS</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-primary">$95k - $140k</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    28 applicants
                  </span>
                </div>
                <div className="flex gap-2">
                  <Link to="/jobs/4" className="btn btn-outline text-sm">View Details</Link>
                  <button onClick={openApplyDialog} className="btn btn-primary text-sm">Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Load More / Pagination */}
      <div className="mt-12 flex flex-col items-center gap-4">
        <button className="btn btn-outline">
          Load More Jobs
          <ChevronDown className="ml-2 h-4 w-4" />
        </button>
        <p className="text-sm text-muted-foreground">
          Showing 4 of 1,247 jobs
        </p>
      </div>

      {/* Apply Job Dialog */}
      {isApplyDialogOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 space-y-6">
              {/* Dialog Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">Apply for Position</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Complete the form below to submit your application
                  </p>
                </div>
                <button onClick={closeApplyDialog} className="btn-ghost p-2">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Resume Upload Section */}
              <div className="space-y-3">
                <label className="text-sm font-medium">
                  Resume <span className="text-red-500">*</span>
                </label>

                {!resumeFile ? (
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer relative">
                    <input
                      type="file"
                      accept=".pdf"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleFileUpload}
                    />
                    <div className="flex flex-col items-center gap-2">
                      <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center">
                        <Upload className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Click to upload resume</p>
                        <p className="text-xs text-muted-foreground mt-1">PDF file only (Max 5MB)</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="border border-border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{resumeFile.name}</p>
                          <p className="text-xs text-muted-foreground">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => setResumeFile(null)} className="btn btn-outline text-xs h-8 px-3">
                          <Upload className="h-3 w-3 mr-1" />
                          Reupload
                        </button>
                        <button onClick={removeFile} className="btn btn-outline text-xs h-8 px-3 text-red-600 hover:bg-red-50">
                          <Trash2 className="h-3 w-3 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Cover Message Section */}
              <div className="space-y-3">
                <label htmlFor="coverMessage" className="text-sm font-medium">
                  Cover Message <span className="text-muted-foreground">(Optional)</span>
                </label>
                <textarea
                  id="coverMessage"
                  rows="5"
                  className="input resize-none h-auto"
                  placeholder="Write a brief message about why you're a great fit for this role..."
                  value={coverMessage}
                  onChange={(e) => setCoverMessage(e.target.value)}
                ></textarea>
                <p className="text-xs text-muted-foreground">
                  <span>{coverMessage.length}</span>/500 characters
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <button onClick={closeApplyDialog} className="btn btn-outline flex-1">
                  Cancel
                </button>
                <button onClick={submitApplication} className="btn btn-primary flex-1">
                  <Send className="h-4 w-4 mr-2" />
                  Submit Application
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

