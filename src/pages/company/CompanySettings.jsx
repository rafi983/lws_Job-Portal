import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Building2, Phone, Share2, Settings, CreditCard, Shield, Camera, Upload, Save, Linkedin, Twitter, Facebook, Instagram, Github, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const CompanySettings = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    industry: '',
    description: '',
    websiteUrl: '',
    location: '',
    employeeCount: '',
    foundedYear: '',
    infoEmail: '',
    phone: '',
    linkedin: '',
    twitter: '',
    facebook: '',
    instagram: ''
  });
  const [logo, setLogo] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    const fetchCompanyProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/companies/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          const companyData = data.data;

          setFormData({
            name: companyData.name || '',
            industry: companyData.industry || '',
            description: companyData.description || '',
            websiteUrl: companyData.websiteUrl || '',
            location: companyData.location || '',
            employeeCount: companyData.employeeCount || '',
            foundedYear: companyData.foundedYear || '',
            infoEmail: companyData.infoEmail || '',
            phone: companyData.phone || '',
            linkedin: companyData.socialLinks?.linkedin || '',
            twitter: companyData.socialLinks?.twitter || '',
            facebook: companyData.socialLinks?.facebook || '',
            instagram: companyData.socialLinks?.instagram || ''
          });

          setPreviewUrl(companyData.logoUrl);
        }
      } catch (error) {
        console.error('Error fetching company profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyProfile();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const token = localStorage.getItem('token');

      // 1. Update Profile Data
      const profileData = {
        ...formData,
        socialLinks: {
          linkedin: formData.linkedin,
          twitter: formData.twitter,
          facebook: formData.facebook,
          instagram: formData.instagram
        }
      };

      const profileResponse = await fetch('http://localhost:5000/api/companies/profile', {
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

      // 2. Upload Logo if changed
      if (logo) {
        const logoFormData = new FormData();
        logoFormData.append('logo', logo);

        const logoResponse = await fetch('http://localhost:5000/api/companies/logo', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: logoFormData
        });

        if (!logoResponse.ok) {
          throw new Error('Failed to upload logo');
        }
      }

      alert('Company profile updated successfully!');
      navigate('/company/profile');

    } catch (error) {
      console.error('Error updating company profile:', error);
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
          <Link to="/company/dashboard" className="hover:text-primary">
            Dashboard
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Company Settings</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Company Settings</h1>
          <p className="text-muted-foreground">
            Manage your company profile and preferences
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Navigation */}
        <aside className="lg:col-span-1">
          <div className="card p-4 sticky top-20">
            <nav className="space-y-1">
              <a href="#company-info" className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-accent rounded-md">
                <Building2 className="h-4 w-4" />
                Company Info
              </a>
              <a href="#contact" className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground rounded-md transition-colors">
                <Phone className="h-4 w-4" />
                Contact Details
              </a>
              <a href="#social" className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground rounded-md transition-colors">
                <Share2 className="h-4 w-4" />
                Social Media
              </a>
            </nav>
          </div>
        </aside>

        {/* Settings Form */}
        <div className="lg:col-span-3 space-y-8">
          <form onSubmit={handleSubmit}>
            {/* Company Info Section */}
            <section id="company-info" className="card p-6 mb-8 scroll-mt-24">
              <h2 className="text-xl font-semibold mb-6">Company Information</h2>

              {/* Logo Upload */}
              <div className="mb-8">
                <label className="block text-sm font-medium mb-4">Company Logo</label>
                <div className="flex items-center gap-6">
                  <div className="h-24 w-24 rounded-lg bg-secondary flex items-center justify-center overflow-hidden border border-border">
                    {previewUrl ? (
                      <img src={previewUrl} alt="Company Logo" className="h-full w-full object-cover" />
                    ) : (
                      <Building2 className="h-10 w-10 text-muted-foreground" />
                    )}
                  </div>
                  <div>
                    <div className="flex gap-3 mb-2">
                      <label className="btn btn-outline cursor-pointer">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload New Logo
                        <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                      </label>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Recommended size: 400x400px. Max size: 2MB.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="name" className="label block mb-2">Company Name *</label>
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
                  <label htmlFor="description" className="label block mb-2">About Company *</label>
                  <textarea
                    id="description"
                    className="textarea"
                    rows="5"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="industry" className="label block mb-2">Industry *</label>
                  <select
                    id="industry"
                    className="input"
                    value={formData.industry}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Industry</option>
                    <option value="Technology">Technology</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Finance">Finance</option>
                    <option value="Education">Education</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Retail">Retail</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="websiteUrl" className="label block mb-2">Website URL</label>
                  <input
                    type="url"
                    id="websiteUrl"
                    className="input"
                    placeholder="https://example.com"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="employeeCount" className="label block mb-2">Company Size</label>
                  <select
                    id="employeeCount"
                    className="input"
                    value={formData.employeeCount}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="foundedYear" className="label block mb-2">Founded Year</label>
                  <input
                    type="number"
                    id="foundedYear"
                    className="input"
                    placeholder="e.g. 2010"
                    value={formData.foundedYear}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </section>

            {/* Contact Details Section */}
            <section id="contact" className="card p-6 mb-8 scroll-mt-24">
              <h2 className="text-xl font-semibold mb-6">Contact Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="infoEmail" className="label block mb-2">Public Email</label>
                  <input
                    type="email"
                    id="infoEmail"
                    className="input"
                    placeholder="info@company.com"
                    value={formData.infoEmail}
                    onChange={handleInputChange}
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
                  <label htmlFor="location" className="label block mb-2">Headquarters Location</label>
                  <input
                    type="text"
                    id="location"
                    className="input"
                    placeholder="City, Country"
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </section>

            {/* Social Media Section */}
            <section id="social" className="card p-6 mb-8 scroll-mt-24">
              <h2 className="text-xl font-semibold mb-6">Social Media</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="linkedin" className="label block mb-2">
                    <Linkedin className="h-4 w-4 inline mr-2" />
                    LinkedIn URL
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    className="input"
                    placeholder="https://linkedin.com/company/..."
                    value={formData.linkedin}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="twitter" className="label block mb-2">
                    <Twitter className="h-4 w-4 inline mr-2" />
                    Twitter URL
                  </label>
                  <input
                    type="url"
                    id="twitter"
                    className="input"
                    placeholder="https://twitter.com/..."
                    value={formData.twitter}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="facebook" className="label block mb-2">
                    <Facebook className="h-4 w-4 inline mr-2" />
                    Facebook URL
                  </label>
                  <input
                    type="url"
                    id="facebook"
                    className="input"
                    placeholder="https://facebook.com/..."
                    value={formData.facebook}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="instagram" className="label block mb-2">
                    <Instagram className="h-4 w-4 inline mr-2" />
                    Instagram URL
                  </label>
                  <input
                    type="url"
                    id="instagram"
                    className="input"
                    placeholder="https://instagram.com/..."
                    value={formData.instagram}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </section>

            {/* Save Button */}
            <div className="flex justify-end sticky bottom-4 bg-background p-4 border-t border-border shadow-lg rounded-lg">
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanySettings;

