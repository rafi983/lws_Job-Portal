import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, RotateCcw, ChevronDown, Building2, MapPin, Briefcase, DollarSign, Clock, Eye, X, Code2, Smartphone, Database, Palette, Loader2 } from 'lucide-react';

const AppliedJobs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Link to="/job-seeker/dashboard" className="hover:text-primary">
            Dashboard
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Applied Jobs</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Applied Jobs</h1>
            <p className="text-muted-foreground">
              Track all your job applications in one place
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">12</span> applications
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <aside className="lg:col-span-1">
          <div className="card p-6 sticky top-20">
            <h2 className="font-semibold mb-4">Filters</h2>

            {/* Status Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Application Status</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-input" defaultChecked />
                  <span className="text-sm">All</span>
                  <span className="ml-auto text-xs text-muted-foreground">12</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-input" />
                  <span className="text-sm">Under Review</span>
                  <span className="ml-auto text-xs text-muted-foreground">5</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-input" />
                  <span className="text-sm">Shortlisted</span>
                  <span className="ml-auto text-xs text-muted-foreground">3</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-input" />
                  <span className="text-sm">Rejected</span>
                  <span className="ml-auto text-xs text-muted-foreground">2</span>
                </label>
              </div>
            </div>

            {/* Date Filter */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Application Date</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="date" className="border-input" defaultChecked />
                  <span className="text-sm">All Time</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="date" className="border-input" />
                  <span className="text-sm">Last 7 Days</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="date" className="border-input" />
                  <span className="text-sm">Last 30 Days</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="date" className="border-input" />
                  <span className="text-sm">Last 3 Months</span>
                </label>
              </div>
            </div>

            <button className="btn btn-outline w-full">
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset Filters
            </button>
          </div>
        </aside>

        {/* Applications List */}
        <div className="lg:col-span-3 space-y-4">
          {/* Sort and View Options */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <div className="relative group">
                <button className="btn btn-outline text-sm h-9 flex items-center">
                  <span>Newest First</span>
                  <ChevronDown className="h-4 w-4 ml-2" />
                </button>
                <div className="hidden group-hover:block absolute top-full left-0 mt-2 w-48 card p-2 shadow-lg z-10">
                  <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent">
                    Newest First
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent">
                    Oldest First
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Application Card 1 - Interview Scheduled */}
          <div className="card p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Company Logo */}
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
              </div>

              {/* Job Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">
                      <Link to="#" className="hover:text-primary">
                        Senior Full Stack Developer
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      <Link to="#" className="hover:text-primary">
                        TechCorp Solutions
                      </Link>
                    </p>
                  </div>
                  <span className="badge badge-warning">Under Review</span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    San Francisco, CA
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    Full-time
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    $120k - $160k
                  </span>
                </div>

                {/* Application Info */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Applied on Nov 25, 2025
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link to="#" className="btn btn-outline text-sm h-9">
                      <Eye className="h-4 w-4 mr-2" />
                      View Job
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application Card 2 - Under Review */}
          <div className="card p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center">
                  <Code2 className="h-8 w-8 text-primary" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">
                      <Link to="#" className="hover:text-primary">
                        Frontend Developer
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      <Link to="#" className="hover:text-primary">
                        Digital Innovations Inc
                      </Link>
                    </p>
                  </div>
                  <span className="badge badge-warning">Under Review</span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Remote
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    Full-time
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    $90k - $130k
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Applied on Nov 28, 2025
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link to="#" className="btn btn-outline text-sm h-9">
                      <Eye className="h-4 w-4 mr-2" />
                      View Job
                    </Link>
                    <button className="btn btn-outline text-sm h-9">
                      <X className="h-4 w-4 mr-2" />
                      Withdraw
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application Card 3 - Shortlisted */}
          <div className="card p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">
                      <Link to="#" className="hover:text-primary">
                        Mobile App Developer
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      <Link to="#" className="hover:text-primary">
                        AppWorks Studio
                      </Link>
                    </p>
                  </div>
                  <span className="badge badge-info">Shortlisted</span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    New York, NY
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    Full-time
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    $100k - $140k
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Applied on Nov 20, 2025
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link to="#" className="btn btn-outline text-sm h-9">
                      <Eye className="h-4 w-4 mr-2" />
                      View Job
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application Card 4 - Under Review */}
          <div className="card p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center">
                  <Database className="h-8 w-8 text-primary" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">
                      <Link to="#" className="hover:text-primary">
                        Backend Engineer
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      <Link to="#" className="hover:text-primary">
                        DataFlow Systems
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Austin, TX
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    Full-time
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    $110k - $150k
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Applied on Nov 15, 2025
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link to="#" className="btn btn-outline text-sm h-9">
                      <Eye className="h-4 w-4 mr-2" />
                      View Job
                    </Link>
                    <button className="btn btn-outline text-sm h-9">
                      <X className="h-4 w-4 mr-2" />
                      Withdraw
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application Card 5 - Rejected */}
          <div className="card p-6 hover:shadow-md transition-shadow opacity-75">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">
                      <Link to="#" className="hover:text-primary">
                        UI/UX Designer
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      <Link to="#" className="hover:text-primary">
                        Creative Labs
                      </Link>
                    </p>
                  </div>
                  <span className="badge badge-danger">Not Selected</span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Los Angeles, CA
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    Full-time
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    $80k - $120k
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Applied on Nov 10, 2025
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link to="#" className="btn btn-outline text-sm h-9">
                      <Eye className="h-4 w-4 mr-2" />
                      View Job
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Load More */}
          <div className="flex justify-center pt-6">
            <button className="btn btn-outline">
              <Loader2 className="h-4 w-4 mr-2" />
              Load More Applications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;

