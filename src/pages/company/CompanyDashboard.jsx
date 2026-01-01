import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Clock, Star, ChevronRight, MapPin } from 'lucide-react';

const CompanyDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, TechCorp! 👋
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
          <h3 className="text-2xl font-bold mb-1">24</h3>
          <p className="text-sm text-muted-foreground">Active Jobs</p>
        </div>

        {/* Stat Card 2 */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">156</h3>
          <p className="text-sm text-muted-foreground">Total Applicants</p>
        </div>

        {/* Stat Card 3 */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 rounded-lg bg-yellow-100 flex items-center justify-center">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">32</h3>
          <p className="text-sm text-muted-foreground">Pending Reviews</p>
        </div>

        {/* Stat Card 4 */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">18</h3>
          <p className="text-sm text-muted-foreground">Shortlisted</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Jobs */}
          <div className="card">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Recent Job Posts</h2>
                <Link to="/company/manage-jobs" className="text-sm text-primary hover:underline">
                  View All
                </Link>
              </div>
            </div>
            <div className="divide-y divide-border">
              {/* Job Item 1 */}
              <div className="p-6 hover:bg-accent transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">
                      <Link to="#" className="hover:text-primary">
                        Senior Full Stack Developer
                      </Link>
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        San Francisco, CA
                      </span>
                      <span>•</span>
                      <span>Full-time</span>
                      <span>•</span>
                      <span>Posted 2 days ago</span>
                    </div>
                  </div>
                  <span className="badge badge-success">Active</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                    <div className="h-8 w-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium">
                      +42
                    </div>
                  </div>
                  <Link to="/company/applicants" className="btn btn-outline text-sm h-8">
                    View Applicants
                  </Link>
                </div>
              </div>

              {/* Job Item 2 */}
              <div className="p-6 hover:bg-accent transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">
                      <Link to="#" className="hover:text-primary">
                        UI/UX Designer
                      </Link>
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Remote
                      </span>
                      <span>•</span>
                      <span>Contract</span>
                      <span>•</span>
                      <span>Posted 5 days ago</span>
                    </div>
                  </div>
                  <span className="badge badge-success">Active</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium">
                        {String.fromCharCode(67 + i)}
                      </div>
                    ))}
                    <div className="h-8 w-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium">
                      +28
                    </div>
                  </div>
                  <Link to="/company/applicants" className="btn btn-outline text-sm h-8">
                    View Applicants
                  </Link>
                </div>
              </div>

              {/* Job Item 3 */}
              <div className="p-6 hover:bg-accent transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">
                      <Link to="#" className="hover:text-primary">
                        DevOps Engineer
                      </Link>
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Austin, TX
                      </span>
                      <span>•</span>
                      <span>Full-time</span>
                      <span>•</span>
                      <span>Posted 1 week ago</span>
                    </div>
                  </div>
                  <span className="badge badge-warning">Expiring Soon</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium">
                        {String.fromCharCode(70 + i)}
                      </div>
                    ))}
                    <div className="h-8 w-8 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium">
                      +15
                    </div>
                  </div>
                  <Link to="/company/applicants" className="btn btn-outline text-sm h-8">
                    View Applicants
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Quick Actions */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link to="/company/create-job" className="btn btn-primary w-full justify-start">
                <Briefcase className="h-4 w-4 mr-2" />
                Post a New Job
              </Link>
              <Link to="/company/applicants" className="btn btn-outline w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                Browse Candidates
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">John Doe</span> applied for{' '}
                    <span className="font-medium">Senior Full Stack Developer</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm">
                    New job posted:{' '}
                    <span className="font-medium">Product Manager</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">5 hours ago</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Star className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm">
                    You shortlisted <span className="font-medium">Sarah Smith</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                </div>
              </div>
            </div>
            <button className="btn btn-ghost w-full mt-4 text-sm">
              View All Activity
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;

