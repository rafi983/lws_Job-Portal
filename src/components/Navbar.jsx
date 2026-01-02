import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">LWS Job Portal</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              Jobs
            </Link>
            {user?.role === 'COMPANY' && (
              <>
                <Link to="/company/dashboard" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                  Dashboard
                </Link>
                <Link to="/company/manage-jobs" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                  Manage Jobs
                </Link>
                <Link to="/company/applicants" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                  Applicants
                </Link>
              </>
            )}
            {user?.role === 'USER' && (
              <>
                <Link to="/job-seeker/dashboard" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                  Dashboard
                </Link>
                <Link to="/job-seeker/applications" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                  My Applications
                </Link>
              </>
            )}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <Link
                to={user.role === 'COMPANY' ? '/company/profile' : '/job-seeker/profile'}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                  {user.profilePictureUrl ? (
                    <img src={user.profilePictureUrl} alt={user.name} className="h-full w-full object-cover" />
                  ) : (
                    <User className="h-4 w-4 text-primary" />
                  )}
                </div>
                <span className="text-sm font-medium hidden sm:block">{user.name}</span>
              </Link>
              <button onClick={logout} className="btn btn-outline btn-sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
              {user.role === 'COMPANY' && (
                <Link to="/company/create-job" className="btn btn-primary btn-sm">
                  Post Job
                </Link>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline">
                Sign In
              </Link>
              <Link to="/register" className="btn btn-primary">
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
