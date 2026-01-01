import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Building, MapPin, Users, Share2, Lightbulb, Target, Heart, Bookmark, Clock, ArrowRight, Globe, Mail, Phone, Linkedin, Twitter, Facebook, Instagram, Github } from 'lucide-react';

const CompanyProfile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Company Header */}
      <div className="card p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Company Logo */}
          <div className="flex-shrink-0">
            <div className="h-32 w-32 rounded-xl bg-secondary flex items-center justify-center">
              <Building2 className="h-16 w-16 text-primary" />
            </div>
          </div>

          {/* Company Info */}
          <div className="flex-1 h-full items-center">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">TechCorp Solutions</h1>
                <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Building className="h-4 w-4" />
                    Technology & Software
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    San Francisco, CA
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    500-1000 employees
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="btn btn-outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* About Company */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">About Company</h2>
            <div className="space-y-4 text-foreground">
              <p>
                TechCorp Solutions is a leading technology company specializing in enterprise software solutions. Founded in 2010, we've grown from a small startup to a thriving organization with over 750 employees across multiple locations worldwide.
              </p>
              <p>
                Our mission is to empower businesses through innovative technology solutions that drive digital transformation. We work with Fortune 500 companies and startups alike, helping them leverage cutting-edge technology to solve complex business challenges.
              </p>
              <p>
                At TechCorp, we believe in fostering a culture of innovation, collaboration, and continuous learning. Our team consists of passionate professionals who are dedicated to creating products that make a real difference in the world. We invest heavily in our people, providing opportunities for growth, learning, and career advancement.
              </p>
              <p>
                We're proud to be recognized as one of the best places to work in the tech industry, with numerous awards for our workplace culture, employee benefits, and commitment to diversity and inclusion.
              </p>
            </div>
          </div>

          {/* Company Culture & Values */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    We encourage creative thinking and embrace new ideas to solve problems.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Collaboration</h3>
                  <p className="text-sm text-muted-foreground">
                    Teamwork and open communication are at the heart of everything we do.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    We strive for the highest quality in our products and services.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Integrity</h3>
                  <p className="text-sm text-muted-foreground">
                    Honesty and transparency guide our decisions and actions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="card p-6" id="jobs">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Open Positions</h2>
              <span className="text-sm text-muted-foreground">15 jobs available</span>
            </div>
            <div className="space-y-4">
              {/* Job Card 1 */}
              <article className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      <Link to="/jobs/1" className="hover:underline">
                        Senior Full Stack Developer
                      </Link>
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        San Francisco, CA
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Posted 2 days ago
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        47 applicants
                      </span>
                    </div>
                  </div>
                  <button className="btn-ghost p-2 flex-shrink-0" title="Save job">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>

                <p className="text-sm text-muted-foreground mb-3">
                  We're looking for an experienced Full Stack Developer to join our dynamic team. You'll be working on cutting-edge web applications using React, Node.js, and cloud technologies.
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="badge badge-secondary">Full-time</span>
                  <span className="badge badge-outline">Remote</span>
                  <span className="badge badge-outline">React</span>
                  <span className="badge badge-outline">Node.js</span>
                  <span className="badge badge-outline">TypeScript</span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-sm font-semibold text-primary">$120k - $180k</span>
                  <div className="flex gap-2">
                    <Link to="/jobs/1" className="btn btn-outline text-sm">
                      View Details
                    </Link>
                    <button className="btn btn-primary text-sm">
                      Apply Now
                    </button>
                  </div>
                </div>
              </article>

              {/* Job Card 2 */}
              <article className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      <Link to="/jobs/2" className="hover:underline">
                        DevOps Engineer
                      </Link>
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Austin, TX
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Posted 1 week ago
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        61 applicants
                      </span>
                    </div>
                  </div>
                  <button className="btn-ghost p-2 flex-shrink-0" title="Save job">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>

                <p className="text-sm text-muted-foreground mb-3">
                  Build and maintain our cloud infrastructure using AWS, Kubernetes, and Terraform. Help us scale our platform to serve millions of users worldwide.
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="badge badge-secondary">Full-time</span>
                  <span className="badge badge-outline">Remote</span>
                  <span className="badge badge-outline">AWS</span>
                  <span className="badge badge-outline">Kubernetes</span>
                  <span className="badge badge-outline">Docker</span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-sm font-semibold text-primary">$130k - $170k</span>
                  <div className="flex gap-2">
                    <Link to="/jobs/2" className="btn btn-outline text-sm">
                      View Details
                    </Link>
                    <button className="btn btn-primary text-sm">
                      Apply Now
                    </button>
                  </div>
                </div>
              </article>

              {/* Job Card 3 */}
              <article className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      <Link to="/jobs/3" className="hover:underline">
                        Product Manager
                      </Link>
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        San Francisco, CA
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Posted 3 days ago
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        38 applicants
                      </span>
                    </div>
                  </div>
                  <button className="btn-ghost p-2 flex-shrink-0" title="Save job">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>

                <p className="text-sm text-muted-foreground mb-3">
                  Lead product strategy and execution for our enterprise platform. Work with engineering, design, and stakeholders to deliver exceptional products.
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="badge badge-secondary">Full-time</span>
                  <span className="badge badge-outline">Hybrid</span>
                  <span className="badge badge-outline">Product Strategy</span>
                  <span className="badge badge-outline">Agile</span>
                  <span className="badge badge-outline">Leadership</span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-sm font-semibold text-primary">$140k - $190k</span>
                  <div className="flex gap-2">
                    <Link to="/jobs/3" className="btn btn-outline text-sm">
                      View Details
                    </Link>
                    <button className="btn btn-primary text-sm">
                      Apply Now
                    </button>
                  </div>
                </div>
              </article>

              {/* Job Card 4 */}
              <article className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      <Link to="/jobs/4" className="hover:underline">
                        UI/UX Designer
                      </Link>
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        New York, NY
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Posted 5 days ago
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        29 applicants
                      </span>
                    </div>
                  </div>
                  <button className="btn-ghost p-2 flex-shrink-0" title="Save job">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>

                <p className="text-sm text-muted-foreground mb-3">
                  Design intuitive and beautiful user experiences for our suite of products. Experience with Figma and design systems required.
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="badge badge-secondary">Full-time</span>
                  <span className="badge badge-outline">Remote</span>
                  <span className="badge badge-outline">Figma</span>
                  <span className="badge badge-outline">Design Systems</span>
                  <span className="badge badge-outline">Prototyping</span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-sm font-semibold text-primary">$90k - $140k</span>
                  <div className="flex gap-2">
                    <Link to="/jobs/4" className="btn btn-outline text-sm">
                      View Details
                    </Link>
                    <button className="btn btn-primary text-sm">
                      Apply Now
                    </button>
                  </div>
                </div>
              </article>
            </div>

            {/* View All Jobs */}
            <div className="mt-6 text-center">
              <Link to="/" className="btn btn-outline">
                View All Open Positions
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Contact Information */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Website</p>
                  <a href="https://www.techcorp.com" className="text-sm font-medium text-primary hover:underline">
                    www.techcorp.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a href="mailto:careers@techcorp.com" className="text-sm font-medium text-primary hover:underline">
                    careers@techcorp.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+14155551234" className="text-sm font-medium">
                    +1 (415) 555-1234
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Headquarters</p>
                  <p className="text-sm font-medium">
                    123 Tech Street<br />
                    San Francisco, CA 94102<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="space-y-2">
              <Link to="#" className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors">
                <Linkedin className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">LinkedIn</span>
              </Link>
              <Link to="#" className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors">
                <Twitter className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Twitter</span>
              </Link>
              <Link to="#" className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors">
                <Facebook className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Facebook</span>
              </Link>
              <Link to="#" className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors">
                <Instagram className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">Instagram</span>
              </Link>
              <Link to="#" className="flex items-center gap-3 p-2 rounded-md hover:bg-accent transition-colors">
                <Github className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;

