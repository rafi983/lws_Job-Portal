import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Search, Filter, ChevronDown, ArrowUpDown, MapPin, Briefcase, Edit, Trash2, CheckCircle, PlayCircle, ChevronLeft, Loader2, Eye } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const ManageJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    status: ''
  });
  const [sort, setSort] = useState('newest');
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalPages: 1
  });

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const queryParams = new URLSearchParams();

      if (filters.search) queryParams.append('search', filters.search);
      if (filters.status) queryParams.append('status', filters.status);
      queryParams.append('sort', sort);
      queryParams.append('page', pagination.page);
      queryParams.append('limit', pagination.limit);

      const response = await fetch(`http://localhost:5000/api/companies/jobs?${queryParams.toString()}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (data.success) {
        setJobs(data.data);
        setPagination(prev => ({
          ...prev,
          totalPages: data.totalPages
        }));
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [filters, sort, pagination.page]);

  const handleSearchChange = (e) => {
    setFilters(prev => ({ ...prev, search: e.target.value }));
    setPagination(prev => ({ ...prev, page: 1 }));
  };

  const handleStatusChange = (status) => {
    setFilters(prev => ({ ...prev, status }));
    setPagination(prev => ({ ...prev, page: 1 }));
  };

  const handleSortChange = (newSort) => {
    setSort(newSort);
  };

  const handleDeleteJob = async (jobId) => {
    if (!window.confirm('Are you sure you want to delete this job?')) return;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/jobs/${jobId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        setJobs(prev => prev.filter(job => job.id !== jobId));
      } else {
        alert('Failed to delete job');
      }
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const handleStatusUpdate = async (jobId, newStatus) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/jobs/${jobId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        setJobs(prev => prev.map(job =>
          job.id === jobId ? { ...job, status: newStatus } : job
        ));
      } else {
        alert('Failed to update job status');
      }
    } catch (error) {
      console.error('Error updating job status:', error);
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
          <span className="text-foreground">Manage Jobs</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Manage Jobs</h1>
            <p className="text-muted-foreground">
              View and manage all your job postings
            </p>
          </div>
          <Link to="/company/create-job" className="btn btn-primary">
            <Briefcase className="h-4 w-4 mr-2" />
            Create New Job
          </Link>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="card p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search jobs by title, location..."
                className="input pl-10 w-full"
                value={filters.search}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="relative group">
              <button className="btn btn-outline flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                {filters.status || 'All Status'}
                <ChevronDown className="h-4 w-4 ml-2" />
              </button>
              <div className="hidden group-hover:block absolute top-full right-0 mt-2 w-48 card p-2 shadow-lg z-10">
                <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent" onClick={() => handleStatusChange('')}>All Status</button>
                <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent" onClick={() => handleStatusChange('Active')}>Active</button>
                <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent" onClick={() => handleStatusChange('Closed')}>Closed</button>
                <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent" onClick={() => handleStatusChange('Archived')}>Archived</button>
              </div>
            </div>
            <div className="relative group">
              <button className="btn btn-outline flex items-center">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                {sort === 'newest' ? 'Newest First' : 'Oldest First'}
                <ChevronDown className="h-4 w-4 ml-2" />
              </button>
              <div className="hidden group-hover:block absolute top-full right-0 mt-2 w-48 card p-2 shadow-lg z-10">
                <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent" onClick={() => handleSortChange('newest')}>Newest First</button>
                <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent" onClick={() => handleSortChange('oldest')}>Oldest First</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Jobs List */}
      <div className="space-y-4">
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-12 card">
            <p className="text-muted-foreground">No jobs found.</p>
          </div>
        ) : (
          jobs.map(job => (
            <div key={job.id} className="card p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        <Link to={`/jobs/${job.id}`} className="hover:text-primary">
                          {job.title}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="font-medium text-foreground">{job.applicants}</span> Applicants
                        </span>
                      </div>
                    </div>
                    <span className={`badge ${
                      job.status === 'Active' ? 'badge-success' :
                      job.status === 'Closed' ? 'badge-danger' :
                      'badge-secondary'
                    }`}>
                      {job.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                    <div className="text-xs text-muted-foreground">
                      Posted on {new Date(job.createdAt).toLocaleDateString()}
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                      <Link to={`/jobs/${job.id}`} className="btn btn-ghost btn-sm h-8 w-8 p-0" title="View Job">
                        <Eye className="h-4 w-4" />
                      </Link>
                      {/* Edit functionality not fully implemented in backend yet, but UI can be there */}
                      {/* <Link to={`/company/edit-job/${job.id}`} className="btn btn-ghost btn-sm h-8 w-8 p-0" title="Edit Job">
                        <Edit className="h-4 w-4" />
                      </Link> */}

                      {job.status === 'Active' ? (
                        <button
                          className="btn btn-ghost btn-sm h-8 w-8 p-0 text-orange-600 hover:bg-orange-50"
                          title="Close Job"
                          onClick={() => handleStatusUpdate(job.id, 'Closed')}
                        >
                          <CheckCircle className="h-4 w-4" />
                        </button>
                      ) : (
                        <button
                          className="btn btn-ghost btn-sm h-8 w-8 p-0 text-green-600 hover:bg-green-50"
                          title="Activate Job"
                          onClick={() => handleStatusUpdate(job.id, 'Active')}
                        >
                          <PlayCircle className="h-4 w-4" />
                        </button>
                      )}

                      <button
                        className="btn btn-ghost btn-sm h-8 w-8 p-0 text-red-600 hover:bg-red-50"
                        title="Delete Job"
                        onClick={() => handleDeleteJob(job.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          <button
            className="btn btn-outline w-10 h-10 p-0"
            disabled={pagination.page === 1}
            onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={`btn w-10 h-10 p-0 ${pagination.page === page ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setPagination(prev => ({ ...prev, page }))}
            >
              {page}
            </button>
          ))}

          <button
            className="btn btn-outline w-10 h-10 p-0"
            disabled={pagination.page === pagination.totalPages}
            onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ManageJobs;

