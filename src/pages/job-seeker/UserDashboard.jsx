import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Code, Monitor, Cpu, Database, Smartphone, MapPin, Calendar, DollarSign, User, Edit, FileText, Bookmark, Settings, Lightbulb } from 'lucide-react';

const UserDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
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
              {/* Application 1 */}
              <div className="border border-border rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-semibold mb-1">
                          <Link to="/jobs/1" className="hover:underline">
                            Senior Full Stack Developer
                          </Link>
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          TechCorp Solutions
                        </p>
                      </div>
                      <span className="badge badge-success">Under Review</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        San Francisco, CA
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Applied on Nov 28, 2025
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        $120k - $180k
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link to="/jobs/1" className="btn btn-outline text-xs h-8">
                        View Job
                      </Link>
                      <button className="btn btn-ghost text-xs h-8">
                        Withdraw Application
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Application 2 */}
              <div className="border border-border rounded-lg p-4">
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
                            Frontend Developer (React)
                          </Link>
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Innovate Labs
                        </p>
                      </div>
                      <span className="badge badge-info">Interview Scheduled</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        Seattle, WA
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Applied on Nov 25, 2025
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        $95k - $140k
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link to="/jobs/2" className="btn btn-outline text-xs h-8">
                        View Job
                      </Link>
                      <button className="btn btn-ghost text-xs h-8">
                        Reschedule
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Application 3 */}
              <div className="border border-border rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center">
                      <Monitor className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-semibold mb-1">
                          <Link to="/jobs/3" className="hover:underline">
                            UI/UX Designer
                          </Link>
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Design Studio Pro
                        </p>
                      </div>
                      <span className="badge badge-warning">Pending</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        New York, NY
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Applied on Nov 20, 2025
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        $90k - $130k
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link to="/jobs/3" className="btn btn-outline text-xs h-8">
                        View Job
                      </Link>
                      <button className="btn btn-ghost text-xs h-8">
                        Withdraw Application
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Jobs */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Recommended for You</h2>
              <Link to="/" className="text-sm text-primary hover:underline">
                Browse All Jobs
              </Link>
            </div>
            <div className="space-y-4">
              {/* Recommended Job 1 */}
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
                    <p className="text-sm text-muted-foreground mb-3">
                      Join our team to build scalable web applications using modern JavaScript frameworks.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="badge badge-secondary">Full-time</span>
                      <span className="badge badge-outline">Remote</span>
                      <span className="badge badge-outline">React</span>
                      <span className="badge badge-outline">Node.js</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          Remote
                        </span>
                        <span className="font-semibold text-primary">$115k - $165k</span>
                      </div>
                      <div className="flex gap-2">
                        <Link to="/jobs/4" className="btn btn-outline text-xs h-8">
                          View Details
                        </Link>
                        <button className="btn btn-primary text-xs h-8">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Recommended Job 2 */}
              <article className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-semibold mb-1">
                          <Link to="/jobs/5" className="hover:underline">
                            Backend Engineer (Node.js)
                          </Link>
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          DataFlow Solutions
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Build robust APIs and microservices for our enterprise platform.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="badge badge-secondary">Full-time</span>
                      <span className="badge badge-outline">Hybrid</span>
                      <span className="badge badge-outline">Node.js</span>
                      <span className="badge badge-outline">MongoDB</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          Boston, MA
                        </span>
                        <span className="font-semibold text-primary">$125k - $170k</span>
                      </div>
                      <div className="flex gap-2">
                        <Link to="/jobs/5" className="btn btn-outline text-xs h-8">
                          View Details
                        </Link>
                        <button className="btn btn-primary text-xs h-8">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Recommended Job 3 */}
              <article className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-semibold mb-1">
                          <Link to="/jobs/6" className="hover:underline">
                            React Native Developer
                          </Link>
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Mobile Innovations Inc
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Develop cross-platform mobile applications for iOS and Android.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="badge badge-secondary">Full-time</span>
                      <span className="badge badge-outline">Remote</span>
                      <span className="badge badge-outline">React Native</span>
                      <span className="badge badge-outline">TypeScript</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          Austin, TX
                        </span>
                        <span className="font-semibold text-primary">$110k - $155k</span>
                      </div>
                      <div className="flex gap-2">
                        <Link to="/jobs/6" className="btn btn-outline text-xs h-8">
                          View Details
                        </Link>
                        <button className="btn btn-primary text-xs h-8">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Quick Actions */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Link to="/job-seeker/profile" className="flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors">
                <User className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">View Profile</span>
              </Link>
              <Link to="/job-seeker/edit-profile" className="flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors">
                <Edit className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Edit Profile</span>
              </Link>
              <Link to="/job-seeker/applications" className="flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">My Applications</span>
              </Link>
              <Link to="#" className="flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors">
                <Bookmark className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Saved Jobs</span>
              </Link>
              <Link to="#" className="flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors">
                <Settings className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Settings</span>
              </Link>
            </div>
          </div>

          {/* Tips */}
          <div className="card p-6 bg-blue-50 border-blue-200">
            <div className="flex items-start gap-3 mb-3">
              <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-blue-900 mb-1">Pro Tip</h3>
                <p className="text-xs text-blue-700">
                  Applications submitted within 24 hours of posting have a 3x higher response rate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

