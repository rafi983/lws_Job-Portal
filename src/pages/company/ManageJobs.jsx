import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Search, Filter, ChevronDown, ArrowUpDown, MapPin, Briefcase, Edit, Trash2, CheckCircle, PlayCircle, ChevronLeft } from 'lucide-react';

const ManageJobs = () => {
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
                className="input pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="relative group">
              <button className="btn btn-outline flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Status
                <ChevronDown className="h-4 w-4 ml-2" />
              </button>
              <div className="hidden group-hover:block absolute top-full right-0 mt-2 w-48 card p-2 shadow-lg z-10">
                <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent">
                  All Status
                </button>
                <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent">
                  New
                </button>
                <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent">
                  Hired
                </button>
                <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent">
                  Shortlisted
                </button>
                <button className="w-full text-left px-3 py-2 text-sm rounded hover:bg-accent">
                  Rejected
                </button>
              </div>
            </div>
            <div className="relative group">
              <button className="btn btn-outline flex items-center">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                Sort
                <ChevronDown className="h-4 w-4 ml-2" />
              </button>
              <div className="hidden group-hover:block absolute top-full right-0 mt-2 w-48 card p-2 shadow-lg z-10">
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
      </div>

      {/* Jobs Table */}
      <div className="card overflow-hidden">
        {/* Table Header */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted border-b border-border">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-medium">
                  <input type="checkbox" className="rounded border-input" />
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium">
                  Job Title
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium">
                  Status
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium">
                  Applicants
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium">
                  Posted Date
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium">
                  Expires
                </th>
                <th className="text-right py-4 px-6 text-sm font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {/* Row 1 */}
              <tr className="hover:bg-accent transition-colors">
                <td className="py-4 px-6">
                  <input type="checkbox" className="rounded border-input" />
                </td>
                <td className="py-4 px-6">
                  <div>
                    <Link to="#" className="font-medium hover:text-primary">
                      Senior Full Stack Developer
                    </Link>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        San Francisco, CA
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        Full-time
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="badge badge-success">Active</span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">24</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-muted-foreground">
                  Nov 28, 2025
                </td>
                <td className="py-4 px-6 text-sm text-muted-foreground">
                  Dec 28, 2025
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-end gap-2">
                    <button className="btn-ghost p-2" title="Edit">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="btn-ghost p-2 text-red-600" title="Delete">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-accent transition-colors">
                <td className="py-4 px-6">
                  <input type="checkbox" className="rounded border-input" />
                </td>
                <td className="py-4 px-6">
                  <div>
                    <Link to="#" className="font-medium hover:text-primary">
                      Frontend Developer
                    </Link>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        Remote
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        Full-time
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="badge badge-success">Active</span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">18</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-muted-foreground">
                  Nov 25, 2025
                </td>
                <td className="py-4 px-6 text-sm text-muted-foreground">
                  Dec 25, 2025
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-end gap-2">
                    <button className="btn-ghost p-2" title="Edit">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="btn-ghost p-2 text-red-600" title="Delete">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-accent transition-colors">
                <td className="py-4 px-6">
                  <input type="checkbox" className="rounded border-input" />
                </td>
                <td className="py-4 px-6">
                  <div>
                    <Link to="#" className="font-medium hover:text-primary">
                      Backend Engineer
                    </Link>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        Austin, TX
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        Full-time
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="badge badge-success">Active</span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">32</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-muted-foreground">
                  Nov 20, 2025
                </td>
                <td className="py-4 px-6 text-sm text-muted-foreground">
                  Dec 20, 2025
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-end gap-2">
                    <button className="btn-ghost p-2" title="Edit">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="btn-ghost p-2 text-red-600" title="Delete">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 4 - Expiring Soon */}
              <tr className="hover:bg-accent transition-colors">
                <td className="py-4 px-6">
                  <input type="checkbox" className="rounded border-input" />
                </td>
                <td className="py-4 px-6">
                  <div>
                    <Link to="#" className="font-medium hover:text-primary">
                      DevOps Engineer
                    </Link>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        Seattle, WA
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        Full-time
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="badge badge-warning">Expiring Soon</span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">15</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-sm text-muted-foreground">
                  Nov 15, 2025
                </td>
                <td className="py-4 px-6 text-sm text-yellow-600 font-medium">
                  Dec 5, 2025
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-end gap-2">
                    <button className="btn-ghost p-2" title="Edit">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="btn-ghost p-2 text-red-600" title="Delete">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 5 - Draft */}
              <tr className="hover:bg-accent transition-colors">
                <td className="py-4 px-6">
                  <input type="checkbox" className="rounded border-input" />
                </td>
                <td className="py-4 px-6">
                  <div>
                    <Link to="#" className="font-medium hover:text-primary">
                      UI/UX Designer
                    </Link>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        Los Angeles, CA
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        Full-time
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="badge badge-info">Draft</span>
                </td>
                <td className="py-4 px-6">
                  <span className="text-muted-foreground">-</span>
                </td>
                <td className="py-4 px-6 text-sm text-muted-foreground">
                  Nov 30, 2025
                </td>
                <td className="py-4 px-6 text-sm text-muted-foreground">
                  -
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-end gap-2">
                    <button className="btn-ghost p-2" title="Edit">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="btn-ghost p-2 text-green-600" title="Publish">
                      <CheckCircle className="h-4 w-4" />
                    </button>
                    <button className="btn-ghost p-2 text-red-600" title="Delete">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 6 - Closed */}
              <tr className="hover:bg-accent transition-colors opacity-60">
                <td className="py-4 px-6">
                  <input type="checkbox" className="rounded border-input" />
                </td>
                <td className="py-4 px-6">
                  <div>
                    <Link to="#" className="font-medium hover:text-primary">
                      Product Manager
                    </Link>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        Boston, MA
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        Full-time
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="badge badge-danger">Closed</span>
                </td>
                <td className="py-4 px-6">
                  <span className="font-medium">45</span>
                </td>
                <td className="py-4 px-6 text-sm text-muted-foreground">
                  Oct 15, 2025
                </td>
                <td className="py-4 px-6 text-sm text-muted-foreground">
                  Nov 15, 2025
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-end gap-2">
                    <button className="btn-ghost p-2 text-green-600" title="Reactivate">
                      <PlayCircle className="h-4 w-4" />
                    </button>
                    <button className="btn-ghost p-2 text-red-600" title="Delete">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of <span className="font-medium">24</span> jobs
            </div>
            <div className="flex items-center gap-2">
              <button className="btn btn-outline h-9 px-3" disabled>
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="btn btn-primary h-9 px-3">1</button>
              <button className="btn btn-outline h-9 px-3">2</button>
              <button className="btn btn-outline h-9 px-3">3</button>
              <button className="btn btn-outline h-9 px-3">4</button>
              <button className="btn btn-outline h-9 px-3">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageJobs;

