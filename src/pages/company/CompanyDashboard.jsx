import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Clock, Star, ChevronRight, MapPin, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const CompanyDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    activeJobs: 0,
    totalApplicants: 0,
    pendingReviews: 0,
    shortLists: 0
  });
  const [recentJobs, setRecentJobs] = useState([]);
  const [recentApplicants, setRecentApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = { 'Authorization': `Bearer ${token}` };

        // Fetch Stats
        const statsRes = await fetch('http://localhost:5000/api/companies/dashboard/stats', { headers });
        const statsData = await statsRes.json();
        if (statsData.success) {
          setStats(statsData.data);
        }

        // Fetch Recent Jobs
        const jobsRes = await fetch('http://localhost:5000/api/companies/jobs?limit=5&sort=newest', { headers });
        const jobsData = await jobsRes.json();
        if (jobsData.success) {
          setRecentJobs(jobsData.data);
        }

        // Fetch Recent Applicants
        const applicantsRes = await fetch('http://localhost:5000/api/companies/applicants?limit=5&sort=newest', { headers });
        const applicantsData = await applicantsRes.json();
        if (applicantsData.success) {
          setRecentApplicants(applicantsData.data);
        }

      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {user?.name}! 👋
        </h1>
        <p className="text-muted-foreground">
          Here's what's happening with your job postings today
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Stat Card 1 */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">{stats.activeJobs}</h3>
          <p className="text-sm text-muted-foreground">Active Jobs</p>
        </div>

        {/* Stat Card 2 */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">{stats.totalApplicants}</h3>
          <p className="text-sm text-muted-foreground">Total Applicants</p>
        </div>

        {/* Stat Card 3 */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 rounded-lg bg-yellow-100 flex items-center justify-center">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">{stats.pendingReviews}</h3>
          <p className="text-sm text-muted-foreground">Pending Reviews</p>
        </div>

        {/* Stat Card 4 */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">{stats.shortLists}</h3>
          <p className="text-sm text-muted-foreground">Shortlisted Candidates</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Job Posts */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recent Job Posts</h2>
            <Link to="/company/jobs" className="text-sm text-primary hover:underline flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="space-y-4">
            {recentJobs.length === 0 ? (
              <p className="text-muted-foreground text-center py-4">No job posts yet.</p>
            ) : (
              recentJobs.map(job => (
                <div key={job.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                  <div>
                    <h3 className="font-medium mb-1">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-primary">{job.applicants}</span>
                    <p className="text-xs text-muted-foreground">Applicants</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recent Applicants */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recent Applicants</h2>
            <Link to="/company/applicants" className="text-sm text-primary hover:underline flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="space-y-4">
            {recentApplicants.length === 0 ? (
              <p className="text-muted-foreground text-center py-4">No applicants yet.</p>
            ) : (
              recentApplicants.map(app => (
                <div key={app.id} className="flex items-center gap-4 p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                    {app.user.profilePictureUrl ? (
                      <img src={app.user.profilePictureUrl} alt={app.user.name} className="h-full w-full object-cover" />
                    ) : (
                      <span className="font-bold text-primary">{app.user.name.charAt(0)}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">{app.user.name}</h3>
                    <p className="text-sm text-muted-foreground truncate">
                      Applied for <span className="text-foreground">{app.job.title}</span>
                    </p>
                  </div>
                  <span className={`badge ${
                    app.status === 'New' ? 'badge-warning' :
                    app.status === 'Shortlisted' ? 'badge-info' :
                    app.status === 'Interviewed' ? 'badge-primary' :
                    app.status === 'Hired' ? 'badge-success' :
                    'badge-secondary'
                  }`}>
                    {app.status}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
