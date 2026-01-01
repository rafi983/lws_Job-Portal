import React from 'react';
import { Link } from 'react-router-dom';
import { User, Camera, MapPin, Calendar, Edit, Mail, Phone, Linkedin, Github, Globe, FileText, Download, Upload, LayoutDashboard, Bookmark, GraduationCap } from 'lucide-react';

const UserProfile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="card p-8 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Profile Photo */}
          <div className="relative flex-shrink-0">
            <div className="h-32 w-32 rounded-full bg-secondary flex items-center justify-center">
              <User className="h-16 w-16 text-primary" />
            </div>
            <div className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center border-4 border-white">
              <Camera className="h-5 w-5 text-white" />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
              <div>
                <h1 className="text-3xl font-bold mb-2">John Doe</h1>
                <p className="text-lg text-muted-foreground mb-2">
                  Full Stack Developer
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    San Francisco, CA
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Member since Jan 2024
                  </span>
                </div>
              </div>
              <Link to="/job-seeker/edit-profile" className="btn btn-primary">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-primary">12</p>
                <p className="text-sm text-muted-foreground">Applications</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">5</p>
                <p className="text-sm text-muted-foreground">In Review</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">18</p>
                <p className="text-sm text-muted-foreground">Saved Jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* About */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-foreground leading-relaxed">
              Experienced Full Stack Developer with 5+ years of expertise in building scalable web applications. Passionate about creating clean, efficient code and delivering exceptional user experiences. Strong background in React, Node.js, and cloud technologies.
            </p>
          </div>

          {/* Contact Information */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">john.doe@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+1 (415) 555-0123</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">San Francisco, CA 94102</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <Link to="#" className="font-medium text-primary hover:underline">
                    linkedin.com/in/johndoe
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'AWS', 'REST API', 'GraphQL'].map((skill) => (
                <span key={skill} className="badge badge-secondary">{skill}</span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
            <div className="space-y-6">
              {/* Experience 1 */}
              <div className="relative pl-8 pb-6 border-l-2 border-border last:pb-0">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary border-2 border-white"></div>
                <div>
                  <h3 className="font-semibold mb-1">Senior Full Stack Developer</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    TechCorp Solutions • Full-time
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    Jan 2022 - Present • 2 years
                  </p>
                  <p className="text-sm text-foreground">
                    Leading development of enterprise web applications using React and Node.js. Architecting scalable solutions and mentoring junior developers.
                  </p>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative pl-8 pb-6 border-l-2 border-border last:pb-0">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-secondary border-2 border-white"></div>
                <div>
                  <h3 className="font-semibold mb-1">Full Stack Developer</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    WebTech Industries • Full-time
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    Jun 2020 - Dec 2021 • 1.5 years
                  </p>
                  <p className="text-sm text-foreground">
                    Developed and maintained multiple client projects using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Bachelor of Science in Computer Science</h3>
                  <p className="text-sm text-muted-foreground mb-1">Stanford University</p>
                  <p className="text-xs text-muted-foreground">2016 - 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Resume */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Resume</h3>
            <div className="space-y-4">
              <div className="p-4 bg-secondary rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-12 w-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">John_Doe_Resume.pdf</p>
                    <p className="text-xs text-muted-foreground">Updated Nov 28, 2025</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link to="#" className="btn btn-outline w-full text-xs h-9">
                    <Download className="h-3 w-3 mr-2" />
                    Download
                  </Link>
                </div>
              </div>
              <Link to="/job-seeker/edit-profile" className="btn btn-outline w-full">
                <Upload className="h-4 w-4 mr-2" />
                Update Resume
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Social Profiles</h3>
            <div className="space-y-2">
              <Link to="#" className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors">
                <Linkedin className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">LinkedIn</span>
              </Link>
              <Link to="#" className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors">
                <Github className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">GitHub</span>
              </Link>
              <Link to="#" className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors">
                <Globe className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Portfolio</span>
              </Link>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Link to="/job-seeker/dashboard" className="btn btn-outline w-full justify-start">
                <LayoutDashboard className="h-4 w-4 mr-2" />
                View Dashboard
              </Link>
              <Link to="/job-seeker/applications" className="btn btn-outline w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                My Applications
              </Link>
              <Link to="#" className="btn btn-outline w-full justify-start">
                <Bookmark className="h-4 w-4 mr-2" />
                Saved Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

