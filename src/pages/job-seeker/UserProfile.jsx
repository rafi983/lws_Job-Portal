import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Camera, MapPin, Calendar, Edit, Mail, Phone, Linkedin, Github, Globe, FileText, Download, Upload, LayoutDashboard, Bookmark, GraduationCap, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const UserProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/users/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          setProfile(data.data);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold">Profile not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="card p-8 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Profile Photo */}
          <div className="relative flex-shrink-0">
            <div className="h-32 w-32 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
              {profile.profilePictureUrl ? (
                <img src={profile.profilePictureUrl} alt={profile.name} className="h-full w-full object-cover" />
              ) : (
                <User className="h-16 w-16 text-primary" />
              )}
            </div>
            {/* <div className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center border-4 border-white">
              <Camera className="h-5 w-5 text-white" />
            </div> */}
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
              <div>
                <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
                <p className="text-lg text-muted-foreground mb-2">
                  {profile.title || 'Job Seeker'}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {profile.location || 'Location not set'}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Member since {new Date(profile.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <Link to="/job-seeker/edit-profile" className="btn btn-primary">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Link>
            </div>

            {/* Quick Stats - Optional, if we have stats endpoint */}
            {/* <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-primary">12</p>
                <p className="text-sm text-muted-foreground">Applications</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">5</p>
                <p className="text-sm text-muted-foreground">Interviews</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">8</p>
                <p className="text-sm text-muted-foreground">Saved Jobs</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* About */}
          <section className="card p-6">
            <h2 className="text-xl font-bold mb-4">About Me</h2>
            <div className="prose max-w-none text-muted-foreground">
              <p>{profile.bio || 'No bio added yet.'}</p>
            </div>
          </section>

          {/* Skills */}
          <section className="card p-6">
            <h2 className="text-xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {profile.skills && profile.skills.length > 0 ? (
                profile.skills.map((skill, index) => (
                  <span key={index} className="badge badge-secondary">
                    {skill}
                  </span>
                ))
              ) : (
                <p className="text-muted-foreground">No skills added yet.</p>
              )}
            </div>
          </section>

          {/* Experience - Placeholder */}
          {/* <section className="card p-6">
            <h2 className="text-xl font-bold mb-6">Work Experience</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-border pl-4 ml-2">
                <h3 className="font-semibold text-lg">Senior Full Stack Developer</h3>
                <p className="text-primary font-medium">TechCorp Solutions</p>
                <p className="text-sm text-muted-foreground mb-2">Jan 2022 - Present</p>
                <p className="text-muted-foreground">
                  Leading a team of 5 developers building scalable web applications using React and Node.js.
                </p>
              </div>
            </div>
          </section> */}

          {/* Education - Placeholder */}
          {/* <section className="card p-6">
            <h2 className="text-xl font-bold mb-6">Education</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Bachelor of Science in Computer Science</h3>
                  <p className="text-muted-foreground">Stanford University</p>
                  <p className="text-sm text-muted-foreground">2016 - 2020</p>
                </div>
              </div>
            </div>
          </section> */}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Contact Info */}
          <div className="card p-6">
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium truncate max-w-[200px]">{profile.email}</p>
                </div>
              </div>
              {profile.phone && (
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium">{profile.phone}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="text-sm font-medium mb-3">Social Profiles</h4>
              <div className="flex gap-2">
                {profile.socialLinks?.linkedin && (
                  <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline h-8 w-8 p-0 rounded-full">
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
                {profile.socialLinks?.github && (
                  <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline h-8 w-8 p-0 rounded-full">
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {profile.socialLinks?.portfolio && (
                  <a href={profile.socialLinks.portfolio} target="_blank" rel="noopener noreferrer" className="btn btn-outline h-8 w-8 p-0 rounded-full">
                    <Globe className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Resume */}
          <div className="card p-6">
            <h3 className="font-semibold mb-4">Resume</h3>
            {profile.resumeUrl ? (
              <div className="p-4 bg-secondary rounded-lg mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">My Resume</p>
                    <p className="text-xs text-muted-foreground">PDF</p>
                  </div>
                </div>
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full text-sm h-9">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </a>
              </div>
            ) : (
              <div className="text-center py-6 bg-secondary/50 rounded-lg border border-dashed border-border">
                <p className="text-sm text-muted-foreground mb-2">No resume uploaded</p>
                <Link to="/job-seeker/edit-profile" className="text-sm text-primary hover:underline">
                  Upload Resume
                </Link>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default UserProfile;
