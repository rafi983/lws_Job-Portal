import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, Briefcase, Calendar, Eye, FileText, UserCheck, XCircle, Loader2, Download, Search } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Applicants = () => {
  const { user } = useAuth();
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    status: [],
    experienceLevel: [],
    date: 'all',
    search: ''
  });
  const [sort, setSort] = useState('newest');
  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    shortlisted: 0,
    interviewed: 0,
    rejected: 0,
    hired: 0
  });

  const fetchApplicants = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const queryParams = new URLSearchParams();

      if (filters.status.length > 0) {
        queryParams.append('status', filters.status.join(','));
      }

      if (filters.experienceLevel.length > 0) {
        queryParams.append('experienceLevel', filters.experienceLevel.join(','));
      }

      if (filters.date !== 'all') {
        queryParams.append('date', filters.date);
      }

      if (filters.search) {
        queryParams.append('search', filters.search);
      }

      queryParams.append('sort', sort);

      const response = await fetch(`http://localhost:5000/api/companies/applicants?${queryParams.toString()}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (data.success) {
        setApplicants(data.data);

        // Calculate stats from fetched data (approximate if filtered, ideally backend provides stats)
        // For now, we'll just use the count from the response for total
        // To get accurate stats for all statuses, we might need a separate endpoint or aggregate query
        // But let's try to populate based on current view if possible, or just show total
        setStats(prev => ({ ...prev, total: data.count }));
      }
    } catch (error) {
      console.error('Error fetching applicants:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, [filters, sort]);

  const handleStatusChange = (status) => {
    setFilters(prev => {
      const newStatus = prev.status.includes(status)
        ? prev.status.filter(s => s !== status)
        : [...prev.status, status];
      return { ...prev, status: newStatus };
    });
  };

  const handleExperienceChange = (level) => {
    setFilters(prev => {
      const newExp = prev.experienceLevel.includes(level)
        ? prev.experienceLevel.filter(l => l !== level)
        : [...prev.experienceLevel, level];
      return { ...prev, experienceLevel: newExp };
    });
  };

  const handleDateChange = (date) => {
    setFilters(prev => ({ ...prev, date }));
  };

  const handleSearchChange = (e) => {
    setFilters(prev => ({ ...prev, search: e.target.value }));
  };

  const handleUpdateStatus = async (applicationId, newStatus) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/applications/${applicationId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        setApplicants(prev => prev.map(app =>
          app.id === applicationId ? { ...app, status: newStatus } : app
        ));
      } else {
        alert('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'New': return 'badge badge-warning';
      case 'Shortlisted': return 'badge badge-info';
      case 'Interviewed': return 'badge badge-primary';
      case 'Rejected': return 'badge badge-danger';
      case 'Hired': return 'badge badge-success';
      default: return 'badge badge-secondary';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Link to="/company/dashboard" className="hover:text-primary">
            Dashboard
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Applicants</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Job Applicants</h1>
            <p className="text-muted-foreground">
              Review and manage applicants
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1">
          <div className="card p-6 sticky top-20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Filters</h3>
              <button
                className="text-sm text-primary hover:underline"
                onClick={() => setFilters({ status: [], experienceLevel: [], date: 'all', search: '' })}
              >
                Reset
              </button>
            </div>

            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  className="input pl-9 w-full"
                  placeholder="Search applicants..."
                  value={filters.search}
                  onChange={handleSearchChange}
                />
              </div>
            </div>

            {/* Status Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3">Application Status</h4>
              <div className="space-y-2">
                {['New', 'Shortlisted', 'Interviewed', 'Rejected', 'Hired'].map(status => (
                  <label key={status} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-input"
                      checked={filters.status.includes(status)}
                      onChange={() => handleStatusChange(status)}
                    />
                    <span className="text-sm">{status}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Experience Level Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3">Experience Level</h4>
              <div className="space-y-2">
                {['Entry', 'Mid', 'Senior', 'Expert'].map(level => (
                  <label key={level} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-input"
                      checked={filters.experienceLevel.includes(level)}
                      onChange={() => handleExperienceChange(level)}
                    />
                    <span className="text-sm">{level} Level</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Date Filter */}
            <div>
              <h4 className="text-sm font-medium mb-3">Applied Date</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="date"
                    className="border-input"
                    checked={filters.date === 'all'}
                    onChange={() => handleDateChange('all')}
                  />
                  <span className="text-sm">All Time</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="date"
                    className="border-input"
                    checked={filters.date === 'last 7 days'}
                    onChange={() => handleDateChange('last 7 days')}
                  />
                  <span className="text-sm">Last 7 Days</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="date"
                    className="border-input"
                    checked={filters.date === 'last 30 days'}
                    onChange={() => handleDateChange('last 30 days')}
                  />
                  <span className="text-sm">Last 30 Days</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Applicants List */}
        <div className="lg:col-span-3 space-y-4">
          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : applicants.length === 0 ? (
            <div className="text-center py-12 card">
              <p className="text-muted-foreground">No applicants found matching your filters.</p>
            </div>
          ) : (
            applicants.map((app) => (
              <div key={app.id} className="card p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Applicant Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                          {app.user.profilePictureUrl ? (
                            <img src={app.user.profilePictureUrl} alt={app.user.name} className="h-full w-full object-cover" />
                          ) : (
                            <span className="text-lg font-bold text-primary">{app.user.name.charAt(0)}</span>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{app.user.name}</h3>
                          <p className="text-sm text-muted-foreground">Applied for <span className="font-medium text-foreground">{app.job.title}</span></p>
                        </div>
                      </div>
                      <span className={getStatusBadgeClass(app.status)}>{app.status}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        {app.user.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Briefcase className="h-4 w-4" />
                        {app.user.experienceLevel || 'N/A'} Experience
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        Applied {new Date(app.createdAt).toLocaleDateString()}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
                      <a href={app.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline text-sm h-9">
                        <FileText className="h-4 w-4 mr-2" />
                        View Resume
                      </a>

                      <div className="ml-auto flex items-center gap-2">
                        {app.status === 'New' && (
                          <>
                            <button
                              className="btn btn-outline text-sm h-9 text-green-600 hover:bg-green-50 hover:text-green-700 hover:border-green-200"
                              onClick={() => handleUpdateStatus(app.id, 'Shortlisted')}
                            >
                              <UserCheck className="h-4 w-4 mr-2" />
                              Shortlist
                            </button>
                            <button
                              className="btn btn-outline text-sm h-9 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-200"
                              onClick={() => handleUpdateStatus(app.id, 'Rejected')}
                            >
                              <XCircle className="h-4 w-4 mr-2" />
                              Reject
                            </button>
                          </>
                        )}
                        {app.status === 'Shortlisted' && (
                          <button
                            className="btn btn-primary text-sm h-9"
                            onClick={() => handleUpdateStatus(app.id, 'Interviewed')}
                          >
                            Schedule Interview
                          </button>
                        )}
                        {app.status === 'Interviewed' && (
                          <button
                            className="btn btn-success text-sm h-9 bg-green-600 hover:bg-green-700 text-white"
                            onClick={() => handleUpdateStatus(app.id, 'Hired')}
                          >
                            Hire Applicant
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Applicants;
