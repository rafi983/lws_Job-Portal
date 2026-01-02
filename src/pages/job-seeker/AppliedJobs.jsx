import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, RotateCcw, ChevronDown, Building2, MapPin, Briefcase, DollarSign, Clock, Eye, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const AppliedJobs = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    status: [],
    date: 'all'
  });
  const [sort, setSort] = useState('Newest First');
  const [stats, setStats] = useState({
    total: 0,
    underReview: 0,
    shortlisted: 0,
    rejected: 0
  });

  const fetchApplications = useCallback(async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const queryParams = new URLSearchParams();

      if (filters.status.length > 0) {
        queryParams.append('status', filters.status.join(','));
      }

      if (filters.date !== 'all') {
        queryParams.append('date', filters.date);
      }

      queryParams.append('sort', sort);

      const response = await fetch(`http://localhost:5000/api/applications/my-applications?${queryParams.toString()}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (data.success) {
        setApplications(data.data);

        // Simple stats calculation based on fetched data (approximate if filtered)
        // Ideally, we should have a separate endpoint for stats or get it in metadata
        const total = data.data.length;
        const underReview = data.data.filter(app => app.status === 'New' || app.status === 'Interviewed').length;
        const shortlisted = data.data.filter(app => app.status === 'Shortlisted').length;
        const rejected = data.data.filter(app => app.status === 'Rejected').length;

        setStats({
          total,
          underReview,
          shortlisted,
          rejected
        });
      }
    } catch (error) {
      console.error('Error fetching applications:', error);
    } finally {
      setLoading(false);
    }
  }, [filters, sort]);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  const handleStatusChange = (status) => {
    setFilters(prev => {
      const newStatus = prev.status.includes(status)
        ? prev.status.filter(s => s !== status)
        : [...prev.status, status];
      return { ...prev, status: newStatus };
    });
  };

  const handleDateChange = (date) => {
    setFilters(prev => ({ ...prev, date }));
  };

  const handleSortChange = (newSort) => {
    setSort(newSort);
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
          <Link to="/job-seeker/dashboard" className="hover:text-primary">
            Dashboard
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">My Applications</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Applications</h1>
            <p className="text-muted-foreground">
              Track and manage your job applications
            </p>
          </div>
          <div className="flex gap-4">
            <div className="text-center px-4 py-2 bg-secondary rounded-lg">
              <p className="text-2xl font-bold text-primary">{stats.total}</p>
              <p className="text-xs text-muted-foreground">Total Applied</p>
            </div>
            <div className="text-center px-4 py-2 bg-secondary rounded-lg">
              <p className="text-2xl font-bold text-yellow-600">{stats.underReview}</p>
              <p className="text-xs text-muted-foreground">Under Review</p>
            </div>
            <div className="text-center px-4 py-2 bg-secondary rounded-lg">
              <p className="text-2xl font-bold text-blue-600">{stats.shortlisted}</p>
              <p className="text-xs text-muted-foreground">Shortlisted</p>
            </div>
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
                className="text-sm text-primary hover:underline flex items-center"
                onClick={() => setFilters({ status: [], date: 'all' })}
              >
                <RotateCcw className="h-3 w-3 mr-1" />
                Reset
              </button>
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

        {/* Applications List */}
        <div className="lg:col-span-3 space-y-4">
          {/* Sort Bar */}
          <div className="flex justify-end mb-4">
            <div className="relative group">
              <button className="btn btn-outline flex items-center text-sm">
                Sort by: {sort}
                <ChevronDown className="h-4 w-4 ml-2" />
              </button>
              <div className="hidden group-hover:block absolute top-full right-0 mt-1 w-40 card p-1 shadow-lg z-10">
                <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent" onClick={() => handleSortChange('Newest First')}>Newest First</button>
                <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent" onClick={() => handleSortChange('Oldest First')}>Oldest First</button>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : applications.length === 0 ? (
            <div className="text-center py-12 card">
              <p className="text-muted-foreground">No applications found matching your filters.</p>
            </div>
          ) : (
            applications.map((app) => (
              <div key={app.id} className="card p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
                      {app.job.company.logoUrl ? (
                        <img src={app.job.company.logoUrl} alt={app.job.company.name} className="h-full w-full object-cover" />
                      ) : (
                        <Building2 className="h-8 w-8 text-primary" />
                      )}
                    </div>
                  </div>

                  {/* Application Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          <Link to={`/jobs/${app.job.id}`} className="hover:text-primary">
                            {app.job.title}
                          </Link>
                        </h3>
                        <Link to={`/companies/${app.job.company.slug}`} className="text-sm text-muted-foreground hover:text-primary">
                          {app.job.company.name}
                        </Link>
                      </div>
                      <span className={getStatusBadgeClass(app.status)}>
                        {app.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {app.job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {app.job.type}
                      </span>
                      {(app.job.salaryMin || app.job.salaryMax) && (
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {app.job.salaryMin && app.job.salaryMax
                            ? `$${app.job.salaryMin} - $${app.job.salaryMax}`
                            : `$${app.job.salaryMin || app.job.salaryMax}`}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Applied {new Date(app.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <Link to={`/jobs/${app.job.id}`} className="btn btn-outline btn-sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Job
                      </Link>
                      {/* Withdraw button could be here too, but it's on job details page */}
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

export default AppliedJobs;
