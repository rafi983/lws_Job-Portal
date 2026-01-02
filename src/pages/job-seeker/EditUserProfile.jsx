import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, User, Camera, Upload, Trash2, Plus, X, Save, Linkedin, Github, Globe, FileText, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const EditUserProfile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    title: '',
    city: '',
    state: '',
    country: '',
    zipcode: '',
    bio: '',
    linkedin: '',
    github: '',
    portfolio: ''
  });
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [resume, setResume] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

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
          const userData = data.data;

          setFormData({
            name: userData.name || '',
            email: userData.email || '',
            phone: userData.phone || '',
            title: userData.title || '',
            city: userData.location?.split(',')[0]?.trim() || '',
            state: userData.location?.split(',')[1]?.trim() || '',
            country: userData.location?.split(',')[2]?.trim() || '',
            zipcode: '', // Assuming zipcode is not stored in location string for now
            bio: userData.bio || '',
            linkedin: userData.socialLinks?.linkedin || '',
            github: userData.socialLinks?.github || '',
            portfolio: userData.socialLinks?.portfolio || ''
          });
          setSkills(userData.skills || []);
          setPreviewUrl(userData.profilePictureUrl);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      if (type === 'profilePicture') {
        setProfilePicture(file);
        setPreviewUrl(URL.createObjectURL(file));
      } else if (type === 'resume') {
        setResume(file);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const token = localStorage.getItem('token');

      // 1. Update Profile Data
      const location = [formData.city, formData.state, formData.country].filter(Boolean).join(', ');
      const profileData = {
        ...formData,
        location,
        skills,
        socialLinks: {
          linkedin: formData.linkedin,
          github: formData.github,
          portfolio: formData.portfolio
        }
      };

      const profileResponse = await fetch('http://localhost:5000/api/users/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(profileData)
      });

      if (!profileResponse.ok) {
        throw new Error('Failed to update profile data');
      }

      // 2. Upload Profile Picture if changed
      if (profilePicture) {
        const picFormData = new FormData();
        picFormData.append('profilePicture', profilePicture);

        const picResponse = await fetch('http://localhost:5000/api/users/profile-picture', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: picFormData
        });

        if (!picResponse.ok) {
          throw new Error('Failed to upload profile picture');
        }
      }

      // 3. Upload Resume if changed
      if (resume) {
        const resumeFormData = new FormData();
        resumeFormData.append('resume', resume);

        const resumeResponse = await fetch('http://localhost:5000/api/users/resume', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: resumeFormData
        });

        if (!resumeResponse.ok) {
          throw new Error('Failed to upload resume');
        }
      }

      alert('Profile updated successfully!');
      navigate('/job-seeker/profile');

    } catch (error) {
      console.error('Error updating profile:', error);
      alert('An error occurred while updating profile');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Link to="/job-seeker/dashboard" className="hover:text-primary">
            Dashboard
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/job-seeker/profile" className="hover:text-primary">
            Profile
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Edit Profile</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">Edit Profile</h1>
        <p className="text-muted-foreground">
          Update your personal information and resume
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Basic Info */}
        <div className="lg:col-span-2 space-y-8">
          {/* Basic Information */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-6">Basic Information</h2>

            {/* Profile Picture Upload */}
            <div className="mb-8 flex items-center gap-6">
              <div className="relative">
                <div className="h-24 w-24 rounded-full bg-secondary flex items-center justify-center overflow-hidden border border-border">
                  {previewUrl ? (
                    <img src={previewUrl} alt="Profile" className="h-full w-full object-cover" />
                  ) : (
                    <User className="h-12 w-12 text-muted-foreground" />
                  )}
                </div>
                <label className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors shadow-sm">
                  <Camera className="h-4 w-4 text-primary-foreground" />
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, 'profilePicture')} />
                </label>
              </div>
              <div>
                <h3 className="font-medium mb-1">Profile Picture</h3>
                <p className="text-sm text-muted-foreground">
                  PNG, JPG or GIF no bigger than 2MB
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="name" className="label block mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  className="input"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="title" className="label block mb-2">Professional Title</label>
                <input
                  type="text"
                  id="title"
                  className="input"
                  placeholder="e.g. Senior Full Stack Developer"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="label block mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  className="input bg-secondary/50"
                  value={formData.email}
                  readOnly
                  disabled
                />
              </div>

              <div>
                <label htmlFor="phone" className="label block mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="input"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="bio" className="label block mb-2">Bio</label>
                <textarea
                  id="bio"
                  className="textarea"
                  rows="4"
                  placeholder="Tell us about yourself..."
                  value={formData.bio}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-6">Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="city" className="label block mb-2">City</label>
                <input
                  type="text"
                  id="city"
                  className="input"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="state" className="label block mb-2">State / Province</label>
                <input
                  type="text"
                  id="state"
                  className="input"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="country" className="label block mb-2">Country</label>
                <input
                  type="text"
                  id="country"
                  className="input"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="zipcode" className="label block mb-2">Zip Code</label>
                <input
                  type="text"
                  id="zipcode"
                  className="input"
                  value={formData.zipcode}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-6">Skills</h2>
            <div className="mb-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  className="input flex-1"
                  placeholder="Type a skill and press Add"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                />
                <button type="button" className="btn btn-primary" onClick={handleAddSkill}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="badge badge-secondary inline-flex items-center gap-1">
                  {skill}
                  <button type="button" className="hover:text-red-600" onClick={() => handleRemoveSkill(skill)}>
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Resume & Social */}
        <div className="space-y-8">
          {/* Resume Upload */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-6">Resume / CV</h2>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:bg-accent/50 transition-colors">
              <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm font-medium mb-1">Upload your resume</p>
              <p className="text-xs text-muted-foreground mb-4">PDF, DOC, DOCX (Max 5MB)</p>
              <label className="btn btn-outline btn-sm cursor-pointer w-full">
                Browse Files
                <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => handleFileChange(e, 'resume')} />
              </label>
            </div>
            {resume && (
              <div className="mt-4 flex items-center justify-between p-3 border border-border rounded-lg bg-accent/50">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <div className="text-sm">
                    <p className="font-medium truncate max-w-[200px]">{resume.name}</p>
                    <p className="text-xs text-muted-foreground">{(resume.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
                <button type="button" onClick={() => setResume(null)} className="text-muted-foreground hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-6">Social Profiles</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="linkedin" className="label block mb-2">
                  <Linkedin className="h-4 w-4 inline mr-2" />
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  id="linkedin"
                  className="input"
                  placeholder="https://www.linkedin.com/in/yourprofile"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="github" className="label block mb-2">
                  <Github className="h-4 w-4 inline mr-2" />
                  GitHub URL
                </label>
                <input
                  type="url"
                  id="github"
                  className="input"
                  placeholder="https://github.com/yourusername"
                  value={formData.github}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="portfolio" className="label block mb-2">
                  <Globe className="h-4 w-4 inline mr-2" />
                  Portfolio URL
                </label>
                <input
                  type="url"
                  id="portfolio"
                  className="input"
                  placeholder="https://yourportfolio.com"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="card p-6">
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <Link to="/job-seeker/profile" className="btn btn-outline">
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Link>
            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUserProfile;
