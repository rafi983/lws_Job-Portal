import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Building, MapPin, Users, Share2, Clock, ArrowRight, Globe, Mail, Phone, Linkedin, Twitter, Facebook, Instagram, Loader2 } from 'lucide-react';

const CompanyProfile = () => {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchCompanyProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = { 'Authorization': `Bearer ${token}` };

        // Fetch Company Profile
        const response = await fetch('http://localhost:5000/api/companies/profile', { headers });
        const data = await response.json();

        if (data.success) {
          setCompany(data.data);

          // Fetch Company Jobs (Active)
          // Assuming we want to show active jobs on the profile
          const jobsResponse = await fetch('http://localhost:5000/api/companies/jobs?status=Active&limit=3', { headers });
          const jobsData = await jobsResponse.json();
          if (jobsData.success) {
            setJobs(jobsData.data);
          }
        }
      } catch (error) {
        console.error('Error fetching company profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyProfile();
  }, []);

  const handleShare = () => {
    if (company) {
      const url = `${window.location.origin}/companies/${company.slug}`;
      navigator.clipboard.writeText(url).then(() => {
        alert('Company profile link copied to clipboard!');
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!company) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold">Company not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Company Header */}
      <div className="card p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Company Logo */}
          <div className="flex-shrink-0">
            <div className="h-32 w-32 rounded-xl bg-secondary flex items-center justify-center overflow-hidden">
              {company.logoUrl ? (
                <img src={company.logoUrl} alt={company.name} className="h-full w-full object-cover" />
              ) : (
                <Building2 className="h-16 w-16 text-primary" />
              )}
            </div>
          </div>

          {/* Company Info */}
          <div className="flex-1 h-full items-center">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{company.name}</h1>
                <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Building className="h-4 w-4" />
                    {company.industry || 'Industry N/A'}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {company.location || 'Location N/A'}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {company.employeeCount || 'Size N/A'} employees
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="btn btn-outline" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </button>
                <Link to="/company/settings" className="btn btn-primary">
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* About */}
          <section className="card p-6">
            <h2 className="text-xl font-bold mb-4">About Company</h2>
            <div className="prose max-w-none text-muted-foreground">
              <p>{company.description || 'No description available.'}</p>
            </div>
          </section>

          {/* Open Positions */}
          <section className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Open Positions</h2>
              <Link to="/company/jobs" className="text-primary hover:underline flex items-center">
                View All <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="space-y-4">
              {jobs.length === 0 ? (
                <p className="text-muted-foreground">No active job openings.</p>
              ) : (
                jobs.map(job => (
                  <div key={job.id} className="group border border-border rounded-lg p-4 hover:border-primary transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {job.applicants} Applicants
                          </span>
                        </div>
                      </div>
                      <Link to={`/jobs/${job.id}`} className="btn btn-outline">
                        View Details
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Contact Info */}
          <div className="card p-6">
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              {company.websiteUrl && (
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Website</p>
                    <a href={company.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary truncate block max-w-[200px]">
                      {company.websiteUrl}
                    </a>
                  </div>
                </div>
              )}

              {company.infoEmail && (
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <a href={`mailto:${company.infoEmail}`} className="text-sm font-medium hover:text-primary">
                      {company.infoEmail}
                    </a>
                  </div>
                </div>
              )}

              {company.phone && (
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium">{company.phone}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="text-sm font-medium mb-3">Social Profiles</h4>
              <div className="flex gap-2">
                {company.socialLinks?.linkedin && (
                  <a href={company.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline h-8 w-8 p-0 rounded-full">
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
                {company.socialLinks?.twitter && (
                  <a href={company.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="btn btn-outline h-8 w-8 p-0 rounded-full">
                    <Twitter className="h-4 w-4" />
                  </a>
                )}
                {company.socialLinks?.facebook && (
                  <a href={company.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-outline h-8 w-8 p-0 rounded-full">
                    <Facebook className="h-4 w-4" />
                  </a>
                )}
                {company.socialLinks?.instagram && (
                  <a href={company.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-outline h-8 w-8 p-0 rounded-full">
                    <Instagram className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CompanyProfile;
