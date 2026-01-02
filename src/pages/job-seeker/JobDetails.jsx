import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, Building2, MapPin, Clock, Bookmark, Briefcase, DollarSign, Globe, Calendar, X, Upload, FileText, Trash2, Send, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const JobDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isApplyDialogOpen, setIsApplyDialogOpen] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [coverMessage, setCoverMessage] = useState('');
  const [applying, setApplying] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);
  const [applicationId, setApplicationId] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};

        const response = await fetch(`http://localhost:5000/api/jobs/${id}`, { headers });
        const data = await response.json();

        if (data.success) {
          setJob(data.data);

          // Check if user has already applied
          if (user && data.data.applications) {
            const myApplication = data.data.applications.find(app => app.userId === user.id);
            if (myApplication) {
              setHasApplied(true);
              setApplicationId(myApplication.id);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching job details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id, user]);

  const openApplyDialog = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    setIsApplyDialogOpen(true);
  };

  const closeApplyDialog = () => setIsApplyDialogOpen(false);

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
      const response = await fetch(`http://localhost:5000/api/applications/jobs/${id}/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          coverLetter: coverMessage
          // Resume is handled via profile URL in backend for now, or we could upload here if backend supported multipart/form-data for application
        })
      });

      const data = await response.json();

      if (response.ok) {
        setHasApplied(true);
        setApplicationId(data.data.id);
        closeApplyDialog();
        alert('Application submitted successfully!');
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

  const handleWithdrawApplication = async () => {
    if (!window.confirm('Are you sure you want to withdraw your application?')) return;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/applications/${applicationId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        setHasApplied(false);
        setApplicationId(null);
        alert('Application withdrawn successfully');
      } else {
        alert('Failed to withdraw application');
      }
    } catch (error) {
      console.error('Error withdrawing application:', error);
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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold">Job not found</h1>
        <Link to="/" className="btn btn-primary mt-4">Browse Jobs</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">
          Jobs
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">{job.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Job Header */}
          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="h-20 w-20 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
                  {job.company?.logoUrl ? (
                    <img src={job.company.logoUrl} alt={job.company.name} className="h-full w-full object-cover" />
                  ) : (
                    <Building2 className="h-10 w-10 text-primary" />
                  )}
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <Link to={`/companies/${job.company?.slug}`} className="flex items-center gap-1 hover:text-primary">
                    <Building2 className="h-4 w-4" />
                    {job.company?.name}
                  </Link>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Posted {new Date(job.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {hasApplied ? (
                    <button
                      className="btn btn-outline text-destructive hover:bg-destructive hover:text-destructive-foreground"
                      onClick={handleWithdrawApplication}
                    >
                      Withdraw Application
                    </button>
                  ) : (
                    <button className="btn btn-primary" onClick={openApplyDialog}>
                      Apply Now
                    </button>
                  )}
                  <button className="btn btn-outline">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save Job
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div className="card p-6">
            <h2 className="text-xl font-bold mb-4">Job Description</h2>
            <div className="prose max-w-none text-muted-foreground whitespace-pre-line">
              {job.description}
            </div>

            {job.requirements && (
              <>
                <h3 className="text-lg font-semibold mt-6 mb-3">Requirements</h3>
                <div className="prose max-w-none text-muted-foreground whitespace-pre-line">
                  {job.requirements}
                </div>
              </>
            )}

            {job.benefits && (
              <>
                <h3 className="text-lg font-semibold mt-6 mb-3">Benefits</h3>
                <div className="prose max-w-none text-muted-foreground whitespace-pre-line">
                  {job.benefits}
                </div>
              </>
            )}
          </div>

          {/* Skills */}
          {job.skills && parseSkills(job.skills).length > 0 && (
            <div className="card p-6">
              <h2 className="text-xl font-bold mb-4">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {parseSkills(job.skills).map((skill, index) => (
                  <span key={index} className="badge badge-secondary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Job Overview */}
          <div className="card p-6">
            <h3 className="font-semibold mb-4">Job Overview</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Date Posted</p>
                  <p className="text-sm text-muted-foreground">{new Date(job.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Expiration Date</p>
                  <p className="text-sm text-muted-foreground">
                    {job.deadline ? new Date(job.deadline).toLocaleDateString() : 'Open until filled'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">{job.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Job Title</p>
                  <p className="text-sm text-muted-foreground">{job.title}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Salary</p>
                  <p className="text-sm text-muted-foreground">
                    {job.salaryMin && job.salaryMax
                      ? `$${job.salaryMin} - $${job.salaryMax} / ${job.salaryPeriod}`
                      : 'Competitive'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="card p-6">
            <h3 className="font-semibold mb-4">About Company</h3>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
                {job.company?.logoUrl ? (
                  <img src={job.company.logoUrl} alt={job.company.name} className="h-full w-full object-cover" />
                ) : (
                  <Building2 className="h-6 w-6 text-primary" />
                )}
              </div>
              <div>
                <p className="font-medium">{job.company?.name}</p>
                <Link to={`/companies/${job.company?.slug}`} className="text-sm text-primary hover:underline">
                  View Profile
                </Link>
              </div>
            </div>
            {job.company?.websiteUrl && (
              <a
                href={job.company.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full"
              >
                <Globe className="h-4 w-4 mr-2" />
                Visit Website
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Apply Modal */}
      {isApplyDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="card w-full max-w-lg p-6 shadow-xl animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Apply for {job.title}</h2>
              <button onClick={closeApplyDialog} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Resume Upload - Note: Backend currently uses profile resume, but UI shows upload for completeness/future */}
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

export default JobDetails;
