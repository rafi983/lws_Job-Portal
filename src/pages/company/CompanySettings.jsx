import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Building2, Phone, Share2, Settings, CreditCard, Shield, Camera, Upload, Save, Linkedin, Twitter, Facebook, Instagram, Github } from 'lucide-react';

const CompanySettings = () => {
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
          <div className="card p-4">
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
              <a href="#preferences" className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground rounded-md transition-colors">
                <Settings className="h-4 w-4" />
                Preferences
              </a>
              <a href="#billing" className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground rounded-md transition-colors">
                <CreditCard className="h-4 w-4" />
                Billing
              </a>
              <a href="#account" className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground rounded-md transition-colors">
                <Shield className="h-4 w-4" />
                Account Security
              </a>
            </nav>
          </div>

          {/* Quick Info Card */}
          <div className="card p-6 mt-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold mb-1">TechCorp Solutions</h3>
              <p className="text-xs text-muted-foreground mb-4">Premium Member</p>
              <div className="w-full space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Jobs</span>
                  <span className="font-medium">24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Applicants</span>
                  <span className="font-medium">156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Member Since</span>
                  <span className="font-medium">Jan 2024</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Settings Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Company Logo and Name */}
          <div id="company-info" className="card p-6">
            <h2 className="text-xl font-semibold mb-6">Company Information</h2>

            {/* Logo Upload */}
            <div className="mb-6">
              <label className="label mb-2">Company Logo</label>
              <div className="flex items-start gap-6">
                <div className="relative">
                  <div className="h-24 w-24 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Building2 className="h-12 w-12 text-white" />
                  </div>
                  <button className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex-1">
                  <input type="file" id="logoUpload" className="hidden" accept="image/*" />
                  <label htmlFor="logoUpload" className="btn btn-outline cursor-pointer">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Logo
                  </label>
                  <p className="text-xs text-muted-foreground mt-2">
                    Recommended size: 200x200px. Max file size: 2MB. Supported formats: JPG, PNG, SVG
                  </p>
                </div>
              </div>
            </div>

            {/* Company Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="label mb-2" htmlFor="companyName">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="input"
                  defaultValue="TechCorp Solutions"
                  placeholder="Enter company name"
                  required
                />
              </div>
              <div>
                <label className="label mb-2" htmlFor="industry">
                  Industry <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="industry"
                  className="input"
                  defaultValue="Information Technology"
                  placeholder="e.g., Technology, Healthcare"
                  required
                />
              </div>
            </div>

            {/* Company Size and Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="label mb-2" htmlFor="companySize">Company Size</label>
                <select id="companySize" className="input" defaultValue="500">
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="50">11-50 employees</option>
                  <option value="200">51-200 employees</option>
                  <option value="500">201-500 employees</option>
                  <option value="1000">501-1000 employees</option>
                  <option value="5000">1001-5000 employees</option>
                  <option value="10000">5001-10000 employees</option>
                  <option value="10001+">10000+ employees</option>
                </select>
              </div>
              <div>
                <label className="label mb-2" htmlFor="companyType">Company Type</label>
                <select id="companyType" className="input" defaultValue="private">
                  <option value="">Select company type</option>
                  <option value="startup">Startup</option>
                  <option value="private">Private Company</option>
                  <option value="public">Public Company</option>
                  <option value="non-profit">Non-Profit</option>
                  <option value="government">Government Agency</option>
                  <option value="educational">Educational Institution</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>
            </div>

            {/* Website and Founded Year */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="label mb-2" htmlFor="website">
                  Website <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  id="website"
                  className="input"
                  defaultValue="https://techcorp.example.com"
                  placeholder="https://yourcompany.com"
                  required
                />
              </div>
              <div>
                <label className="label mb-2" htmlFor="founded">Founded Year</label>
                <input
                  type="text"
                  id="founded"
                  className="input"
                  defaultValue="2015"
                  placeholder="e.g., 2020"
                />
              </div>
            </div>

            {/* About Company */}
            <div className="mb-4">
              <label className="label mb-2" htmlFor="about">
                About Company <span className="text-red-500">*</span>
              </label>
              <textarea
                id="about"
                className="textarea"
                rows="6"
                required
                placeholder="Tell us about your company..."
                defaultValue={`TechCorp Solutions is a leading technology company specializing in innovative software solutions. We are committed to delivering cutting-edge products and services that help businesses transform digitally. Our team of experienced professionals works on challenging projects across various domains including cloud computing, AI/ML, and mobile applications.

We pride ourselves on fostering a culture of innovation, collaboration, and continuous learning. Join us to be part of a dynamic team that's shaping the future of technology.`}
              ></textarea>
            </div>

            {/* Headquarters Location */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="label mb-2" htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  className="input"
                  defaultValue="San Francisco"
                  placeholder="City"
                />
              </div>
              <div>
                <label className="label mb-2" htmlFor="state">State/Province</label>
                <input
                  type="text"
                  id="state"
                  className="input"
                  defaultValue="California"
                  placeholder="State"
                />
              </div>
              <div>
                <label className="label mb-2" htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  className="input"
                  defaultValue="United States"
                  placeholder="Country"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div id="contact" className="card p-6">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="label mb-2" htmlFor="phone">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="input"
                  defaultValue="+1 (555) 123-4567"
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="label mb-2" htmlFor="hrEmail">HR Department Email</label>
                <input
                  type="email"
                  id="hrEmail"
                  className="input"
                  defaultValue="hr@techcorp.com"
                  placeholder="hr@example.com"
                />
              </div>
              <div>
                <label className="label mb-2" htmlFor="supportEmail">Information Email</label>
                <input
                  type="email"
                  id="supportEmail"
                  className="input"
                  defaultValue="support@techcorp.com"
                  placeholder="support@example.com"
                />
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div id="social" className="card p-6">
            <h2 className="text-xl font-semibold mb-6">Social Media Links</h2>

            <div className="space-y-4">
              <div>
                <label className="label mb-2" htmlFor="linkedin">LinkedIn Profile</label>
                <div className="relative">
                  <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="url"
                    id="linkedin"
                    className="input pl-10"
                    defaultValue="https://linkedin.com/company/techcorp"
                    placeholder="https://linkedin.com/company/yourcompany"
                  />
                </div>
              </div>

              <div>
                <label className="label mb-2" htmlFor="twitter">Twitter/X Profile</label>
                <div className="relative">
                  <Twitter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="url"
                    id="twitter"
                    className="input pl-10"
                    defaultValue="https://twitter.com/techcorp"
                    placeholder="https://twitter.com/yourcompany"
                  />
                </div>
              </div>

              <div>
                <label className="label mb-2" htmlFor="facebook">Facebook Page</label>
                <div className="relative">
                  <Facebook className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="url"
                    id="facebook"
                    className="input pl-10"
                    defaultValue="https://facebook.com/techcorp"
                    placeholder="https://facebook.com/yourcompany"
                  />
                </div>
              </div>

              <div>
                <label className="label mb-2" htmlFor="instagram">Instagram Profile</label>
                <div className="relative">
                  <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="url"
                    id="instagram"
                    className="input pl-10"
                    defaultValue="https://instagram.com/techcorp"
                    placeholder="https://instagram.com/yourcompany"
                  />
                </div>
              </div>

              <div>
                <label className="label mb-2" htmlFor="github">GitHub Organization</label>
                <div className="relative">
                  <Github className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="url"
                    id="github"
                    className="input pl-10"
                    defaultValue="https://github.com/techcorp"
                    placeholder="https://github.com/yourcompany"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-4 pt-4">
            <div className="flex gap-2">
              <button className="btn btn-primary">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySettings;

