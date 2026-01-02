import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import RegisterCompany from './pages/auth/RegisterCompany';
import CompanyDashboard from './pages/company/CompanyDashboard';
import CreateJob from './pages/company/CreateJob';
import Applicants from './pages/company/Applicants';
import ManageJobs from './pages/company/ManageJobs';
import UserDashboard from './pages/job-seeker/UserDashboard';
import AppliedJobs from './pages/job-seeker/AppliedJobs';
import JobDetails from './pages/job-seeker/JobDetails';
import UserProfile from './pages/job-seeker/UserProfile';
import EditUserProfile from './pages/job-seeker/EditUserProfile';
import CompanyProfile from './pages/company/CompanyProfile';
import CompanySettings from './pages/company/CompanySettings';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-background text-foreground antialiased flex flex-col">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/register-company" element={<RegisterCompany />} />

              {/* Company Routes */}
              <Route path="/company/dashboard" element={<CompanyDashboard />} />
              <Route path="/company/create-job" element={<CreateJob />} />
              <Route path="/company/applicants" element={<Applicants />} />
              <Route path="/company/manage-jobs" element={<ManageJobs />} />
              <Route path="/company/profile" element={<CompanyProfile />} />
              <Route path="/company/settings" element={<CompanySettings />} />
              <Route path="/companies/:slug" element={<CompanyProfile />} /> {/* Public view of company profile */}

              {/* Job Seeker Routes */}
              <Route path="/job-seeker/dashboard" element={<UserDashboard />} />
              <Route path="/job-seeker/applications" element={<AppliedJobs />} />
              <Route path="/job-seeker/profile" element={<UserProfile />} />
              <Route path="/job-seeker/edit-profile" element={<EditUserProfile />} />

              {/* Public Job Routes */}
              <Route path="/jobs/:id" element={<JobDetails />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
