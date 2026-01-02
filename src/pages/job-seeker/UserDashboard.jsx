import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Calendar, DollarSign, User, Edit, FileText, Lightbulb, Loader2, Briefcase } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const UserDashboard = () => {
  const { user } = useAuth();
  const [recentApplications, setRecentApplications] = useState([]);
  const [recommendedJobs, setRecommendedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = { 'Authorization': `Bearer ${token}` };

        // Fetch Recent Applications
        const appsResponse = await fetch('http://localhost:5000/api/applications/my-applications?limit=3&sort=Newest First', { headers });
        const appsData = await appsResponse.json();
        if (appsData.success) {
          setRecentApplications(appsData.data.slice(0, 3)); // Limit to 3
        }

        // Fetch Recommended Jobs
        const recsResponse = await fetch('http://localhost:5000/api/jobs/recommendations?limit=3', { headers });
        const recsData = await recsResponse.json();
        if (recsData.success) {
          setRecommendedJobs(recsData.data);
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
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}! 👋</h1>
        <p className="text-muted-foreground">
          Here's what's happening with your job search today.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Applications */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Recent Applications</h2>
              <Link to="/job-seeker/applications" className="text-sm text-primary hover:underline">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {recentApplications.length === 0 ? (
                <p className="text-muted-foreground">You haven't applied to any jobs yet.</p>
              ) : (
                recentApplications.map(app => (
                  <div key={app.id} className="border border-border rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
                          {app.job.company.logoUrl ? (
                            <img src={app.job.company.logoUrl} alt={app.job.company.name} className="h-full w-full object-cover" />
                          ) : (
                            <Building2 className="h-6 w-6 text-primary" />
                          )}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="font-semibold mb-1">
                              <Link to={`/jobs/${app.job.id}`} className="hover:underline">
                                {app.job.title}
                              </Link>
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {app.job.company.name}
                            </p>
                          </div>
                          <span className={`badge ${
                            app.status === 'New' ? 'badge-warning' :
                            app.status === 'Shortlisted' ? 'badge-info' :
                            app.status === 'Interviewed' ? 'badge-primary' :
                            app.status === 'Rejected' ? 'badge-danger' :
                            'badge-success'
                          }`}>
                            {app.status}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {app.job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Applied {new Date(app.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Recommended Jobs */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                <h2 className="text-xl font-semibold">Recommended for You</h2>
              </div>
              <Link to="/" className="text-sm text-primary hover:underline">
                Browse All Jobs
              </Link>
            </div>
            <div className="space-y-4">
              {recommendedJobs.length === 0 ? (
                <p className="text-muted-foreground">Complete your profile to get job recommendations.</p>
              ) : (
                recommendedJobs.map(job => (
                  <div key={job.id} className="border border-border rounded-lg p-4 hover:border-primary transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
                          {job.company.logoUrl ? (
                            <img src={job.company.logoUrl} alt={job.company.name} className="h-full w-full object-cover" />
                          ) : (
                            <Building2 className="h-6 w-6 text-primary" />
                          )}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="font-semibold mb-1">
                              <Link to={`/jobs/${job.id}`} className="hover:underline">
                                {job.title}
                              </Link>
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {job.company.name}
                            </p>
                          </div>
                          <Link to={`/jobs/${job.id}`} className="btn btn-outline btn-sm">
                            View
                          </Link>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-3 w-3" />
                            {job.type}
                          </span>
                          {(job.salaryMin || job.salaryMax) && (
                            <span className="flex items-center gap-1">
                              <DollarSign className="h-3 w-3" />
                              {job.salaryMin && job.salaryMax 
                                ? `${job.salaryMin/1000}k - ${job.salaryMax/1000}k` 
                                : `${(job.salaryMin || job.salaryMax)/1000}k`}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Profile Summary */}
          <div className="card p-6">
            <div className="text-center mb-6">
              <div className="h-24 w-24 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center overflow-hidden">
                {user?.profilePictureUrl ? (
                  <img src={user.profilePictureUrl} alt={user.name} className="h-full w-full object-cover" />
                ) : (
                  <User className="h-12 w-12 text-primary" />
                )}
              </div>
              <h2 className="text-xl font-bold mb-1">{user?.name}</h2>
              <p className="text-muted-foreground mb-4">{user?.title || 'Job Seeker'}</p>
              <Link to="/job-seeker/profile" className="btn btn-outline w-full">
                View Profile
              </Link>
            </div>
            
            <div className="space-y-2">
              <Link to="/job-seeker/edit-profile" className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors">
                <Edit className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Edit Profile</span>
              </Link>
              <Link to="/job-seeker/applications" className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">My Applications</span>
              </Link>
              {/* <Link to="/job-seeker/saved-jobs" className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors">
                <Bookmark className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Saved Jobs</span>
              </Link> */}
              {/* <Link to="/job-seeker/settings" className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors">
                <Settings className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Settings</span>
              </Link> */}
            </div>
          </div>

          {/* Profile Completion - Optional Feature */}
          {/* <div className="card p-6">
            <h3 className="font-semibold mb-4">Profile Completion</h3>
            <div className="mb-2 flex justify-between text-sm">
              <span>85% Complete</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden mb-4">
              <div className="h-full bg-primary w-[85%]"></div>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Complete your profile to get better job recommendations.
            </p>
            <Link to="/job-seeker/edit-profile" className="text-sm text-primary hover:underline">
              Complete Profile
            </Link>
          </div> */}
        </aside>
      </div>
    </div>
  );
};

export default UserDashboard;
