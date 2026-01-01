import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, Briefcase, Calendar, Eye, FileText, UserCheck, XCircle } from 'lucide-react';

const Applicants = () => {
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
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Filters</h3>
              <button className="text-sm text-primary hover:underline">
                Reset
              </button>
            </div>

            {/* Status Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3">Application Status</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded border-input" />
                  <span className="text-sm">New Applications</span>
                  <span className="ml-auto text-xs text-muted-foreground">(8)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded border-input" />
                  <span className="text-sm">Shortlisted</span>
                  <span className="ml-auto text-xs text-muted-foreground">(8)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-input" />
                  <span className="text-sm">Interviewed</span>
                  <span className="ml-auto text-xs text-muted-foreground">(5)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-input" />
                  <span className="text-sm">Rejected</span>
                  <span className="ml-auto text-xs text-muted-foreground">(3)</span>
                </label>
              </div>
            </div>

            {/* Experience Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3">Experience Level</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-input" />
                  <span className="text-sm">Entry Level (0-2 years)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded border-input" />
                  <span className="text-sm">Mid Level (3-5 years)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded border-input" />
                  <span className="text-sm">Senior (5+ years)</span>
                </label>
              </div>
            </div>

            {/* Date Filter */}
            <div>
              <h4 className="text-sm font-medium mb-3">Applied Date</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="date" defaultChecked className="border-input" />
                  <span className="text-sm">Last 24 hours</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="date" className="border-input" />
                  <span className="text-sm">Last 7 days</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="date" className="border-input" />
                  <span className="text-sm">Last 30 days</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="date" className="border-input" />
                  <span className="text-sm">All time</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Applicants List */}
        <div className="lg:col-span-3">
          {/* Applicant Cards */}
          <div className="space-y-4">
            {/* Applicant 1 */}
            <div className="card p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                    JD
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">John Doe</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          john.doe@example.com
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          7 years experience
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Applied 2 hours ago
                        </span>
                      </div>
                    </div>
                    <span className="badge badge-info">New</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="badge badge-secondary">JavaScript</span>
                    <span className="badge badge-secondary">React</span>
                    <span className="badge badge-secondary">Node.js</span>
                    <span className="badge badge-secondary">TypeScript</span>
                    <span className="badge badge-secondary">AWS</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Link to="#" className="btn btn-outline text-sm h-9">
                      <Eye className="h-3 w-3 mr-2" />
                      View Profile
                    </Link>
                    <Link to="#" className="btn btn-outline text-sm h-9">
                      <FileText className="h-3 w-3 mr-2" />
                      Resume
                    </Link>
                    <button className="btn btn-primary text-sm h-9">
                      <UserCheck className="h-3 w-3 mr-2" />
                      Shortlist
                    </button>
                    <button className="btn btn-outline text-sm h-9 text-red-600 hover:text-red-600">
                      <XCircle className="h-3 w-3 mr-2" />
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Applicant 2 */}
            <div className="card p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white text-xl font-bold">
                    SW
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Sarah Williams</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          sarah.w@example.com
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          5 years experience
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Applied 5 hours ago
                        </span>
                      </div>
                    </div>
                    <span className="badge badge-success">Shortlisted</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="badge badge-secondary">Python</span>
                    <span className="badge badge-secondary">Django</span>
                    <span className="badge badge-secondary">PostgreSQL</span>
                    <span className="badge badge-secondary">Docker</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Link to="#" className="btn btn-outline text-sm h-9">
                      <Eye className="h-3 w-3 mr-2" />
                      View Profile
                    </Link>
                    <Link to="#" className="btn btn-outline text-sm h-9">
                      <FileText className="h-3 w-3 mr-2" />
                      Resume
                    </Link>
                    <button className="btn btn-outline text-sm h-9">
                      <UserCheck className="h-3 w-3 mr-2" />
                      Interview
                    </button>
                    <button className="btn btn-outline text-sm h-9 text-red-600 hover:text-red-600">
                      <XCircle className="h-3 w-3 mr-2" />
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applicants;

