import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Building2, MapPin, Clock, Bookmark, Briefcase, DollarSign, BarChart, Users, Globe, Calendar, Linkedin, Twitter, Facebook, Link as LinkIcon, Flag, X, Upload, FileText, Trash2, Send, Layout, Cpu, Code } from 'lucide-react';

const JobDetails = () => {
  const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [coverMessage, setCoverMessage] = useState('');

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
    // Handle application submission logic here
    console.log('Submitting application:', { resumeFile, coverMessage });
    closeApplyDialog();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">
          Jobs
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="#" className="hover:text-foreground">
          Technology
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">Senior Full Stack Developer</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Job Header */}
          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="h-20 w-20 rounded-lg bg-secondary flex items-center justify-center">
                  <Building2 className="h-10 w-10 text-primary" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">
                      Senior Full Stack Developer
                    </h1>
                    <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                      <Link to="/company/profile" className="text-lg font-medium hover:text-primary">
                        TechCorp Solutions
                      </Link>
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
                  <button className="btn-ghost p-2 flex-shrink-0" title="Save job">
                    <Bookmark className="h-6 w-6" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-secondary">Full-time</span>
                  <span className="badge badge-outline">Remote</span>
                  <span className="badge badge-outline">Senior Level</span>
                </div>
              </div>
            </div>
          </div>

          {/* Job Overview */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Job Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Job Type</p>
                  <p className="font-medium">Full-time</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">San Francisco, CA (Remote)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Salary</p>
                  <p className="font-medium">$120k - $180k / year</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <BarChart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="font-medium">5+ years</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Application Deadline</p>
                  <p className="font-medium">December 31, 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Applicants</p>
                  <p className="font-medium">47 applications</p>
                </div>
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Job Description</h2>
            <div className="prose prose-sm max-w-none space-y-4 text-foreground">
              <p>
                We're looking for an experienced Full Stack Developer to join our dynamic team at TechCorp Solutions. You'll be working on cutting-edge web applications using React, Node.js, and cloud technologies to build scalable solutions that impact millions of users.
              </p>
              <p>
                As a Senior Full Stack Developer, you will lead the design and implementation of new features, mentor junior developers, and work closely with product managers and designers to deliver exceptional user experiences.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">Required Qualifications</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>5+ years of professional software development experience</li>
                <li>Strong proficiency in JavaScript/TypeScript, React, and Node.js</li>
                <li>Experience with modern frontend frameworks and state management (Redux, MobX, etc.)</li>
                <li>Solid understanding of RESTful APIs and microservices architecture</li>
                <li>Experience with SQL and NoSQL databases (PostgreSQL, MongoDB, etc.)</li>
                <li>Proficiency with Git and version control workflows</li>
                <li>Strong problem-solving skills and attention to detail</li>
                <li>Excellent communication and collaboration skills</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-3">What We Offer</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Competitive salary range: $120,000 - $180,000 per year</li>
                <li>Comprehensive health, dental, and vision insurance</li>
                <li>401(k) with company match</li>
                <li>Flexible remote work policy</li>
                <li>Generous PTO and paid holidays</li>
                <li>Professional development budget</li>
                <li>Latest tech equipment and tools</li>
                <li>Collaborative and inclusive work environment</li>
              </ul>
            </div>
          </div>

          {/* Required Skills */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Required Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'TypeScript', 'JavaScript', 'REST API', 'PostgreSQL', 'MongoDB', 'Git', 'Docker', 'AWS', 'Microservices', 'Redux'].map((skill) => (
                <span key={skill} className="badge badge-secondary">{skill}</span>
              ))}
            </div>
          </div>

          {/* Similar Jobs */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Similar Jobs</h2>
            <div className="space-y-4">
              {/* Similar Job 1 */}
              <article className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center">
                      <Cpu className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-semibold mb-1">
                          <Link to="/jobs/4" className="hover:underline">
                            Full Stack JavaScript Developer
                          </Link>
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          WebTech Industries
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="badge badge-secondary">Full-time</span>
                      <span className="badge badge-outline">Remote</span>
                      <span className="badge badge-outline">React</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          Remote
                        </span>
                        <span className="font-semibold text-primary">$115k - $165k</span>
                      </div>
                      <Link to="/jobs/4" className="btn btn-outline text-xs h-8">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </article>

              {/* Similar Job 2 */}
              <article className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-semibold mb-1">
                          <Link to="/jobs/2" className="hover:underline">
                            Frontend Developer
                          </Link>
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Innovate Labs
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="badge badge-secondary">Full-time</span>
                      <span className="badge badge-outline">On-site</span>
                      <span className="badge badge-outline">React</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          Seattle, WA
                        </span>
                        <span className="font-semibold text-primary">$95k - $140k</span>
                      </div>
                      <Link to="/jobs/2" className="btn btn-outline text-xs h-8">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Apply Card */}
          <div className="card p-6 sticky top-24">
            <h3 className="text-lg font-semibold mb-4">Interested in this job?</h3>
            <div className="space-y-4">
              <button onClick={openApplyDialog} className="btn btn-primary w-full">
                Apply Now
              </button>
              <button className="btn btn-outline w-full">
                <Bookmark className="h-4 w-4 mr-2" />
                Save Job
              </button>
              <div className="text-center text-xs text-muted-foreground mt-4">
                <p>Application deadline: Dec 31, 2025</p>
                <p className="mt-1">Posted 2 days ago</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="font-medium mb-3">Share this job</h4>
              <div className="flex gap-2 justify-center">
                <button className="btn btn-outline h-9 w-9 p-0 rounded-full">
                  <Linkedin className="h-4 w-4" />
                </button>
                <button className="btn btn-outline h-9 w-9 p-0 rounded-full">
                  <Twitter className="h-4 w-4" />
                </button>
                <button className="btn btn-outline h-9 w-9 p-0 rounded-full">
                  <Facebook className="h-4 w-4" />
                </button>
                <button className="btn btn-outline h-9 w-9 p-0 rounded-full">
                  <LinkIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Company Card */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">About the Company</h3>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">TechCorp Solutions</h4>
                <Link to="/company/profile" className="text-sm text-primary hover:underline">
                  View Profile
                </Link>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              TechCorp Solutions is a leading technology company specializing in enterprise software solutions. We empower businesses through innovative technology.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <a href="#" className="hover:underline">www.techcorp.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>500-1000 employees</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Report Job */}
          <div className="text-center">
            <button className="text-sm text-muted-foreground hover:text-red-600 flex items-center justify-center gap-2 mx-auto">
              <Flag className="h-4 w-4" />
              Report this job
            </button>
          </div>
        </div>
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
                    Senior Full Stack Developer at TechCorp Solutions
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

export default JobDetails;

