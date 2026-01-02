# LWS Job Portal

A full-stack job portal application built with React, Node.js, Express, and SQLite. This platform connects job seekers with companies, allowing users to browse and apply for jobs, while companies can post job openings and manage applications.

## 🚀 Features

### For Job Seekers
- **User Authentication**: Secure registration and login.
- **Job Search & Filtering**: Browse jobs with filters for job type, experience level, and salary.
- **Job Application**: Apply for jobs with a cover letter.
- **Dashboard**: View recommended jobs and track application status.
- **Profile Management**: Update personal information and upload resume/CV.
- **Applied Jobs**: View a history of all applied jobs.

### For Companies
- **Company Registration**: Create a company profile with details like industry, size, and location.
- **Job Posting**: Create and manage job listings with detailed requirements and benefits.
- **Applicant Management**: View and manage applications for posted jobs.
- **Company Dashboard**: Overview of active jobs, total applications, and recent activities.
- **Company Profile**: Public profile page for the company.

## 🛠️ Tech Stack

### Frontend
- **React**: UI library for building the user interface.
- **Vite**: Fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router DOM**: For client-side routing.
- **Lucide React**: Icon library.

### Backend
- **Node.js & Express**: Runtime and framework for the server.
- **Sequelize**: ORM for database management.
- **SQLite**: Lightweight relational database.
- **JWT (JSON Web Tokens)**: For secure authentication.
- **Bcrypt**: For password hashing.
- **Multer**: For handling file uploads (resumes, logos).

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd lws-job-portal
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following content:
```env
PORT=5000
JWT_SECRET=your_super_secret_key_here
NODE_ENV=development
```

Start the backend server:
```bash
npm run dev
```
The server will start on `http://localhost:5000`.

### 3. Frontend Setup
Open a new terminal, navigate to the root directory (if not already there), and install frontend dependencies:
```bash
# If you are in the backend folder, go back one level
cd ..

npm install
```

Start the frontend development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

## 📂 Project Structure

```
lws-job-portal/
├── backend/                 # Backend source code
│   ├── config/              # Database configuration
│   ├── controllers/         # Request handlers
│   ├── middleware/          # Custom middleware (auth, upload)
│   ├── models/              # Sequelize models
│   ├── routes/              # API routes
│   ├── uploads/             # Uploaded files (resumes, logos)
│   ├── server.js            # Entry point for backend
│   └── database.sqlite      # SQLite database file
├── src/                     # Frontend source code
│   ├── assets/              # Static assets
│   ├── components/          # Reusable UI components
│   ├── context/             # React Context (Auth)
│   ├── pages/               # Application pages
│   │   ├── auth/            # Login/Register pages
│   │   ├── company/         # Company-specific pages
│   │   └── job-seeker/      # Job Seeker-specific pages
│   ├── App.jsx              # Main App component
│   └── main.jsx             # Entry point for frontend
├── index.html               # HTML entry point
├── package.json             # Frontend dependencies
└── tailwind.config.js       # Tailwind configuration
```

## 🔑 Key API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user or company
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user profile

### Jobs
- `GET /api/jobs` - Get all jobs (with filters)
- `GET /api/jobs/:id` - Get job details
- `POST /api/jobs` - Create a new job (Company only)
- `PUT /api/jobs/:id` - Update a job (Company only)
- `DELETE /api/jobs/:id` - Delete a job (Company only)

### Applications
- `POST /api/applications/jobs/:jobId/apply` - Apply for a job
- `GET /api/applications/my-applications` - Get user's applications
- `GET /api/companies/applicants` - Get applicants for company jobs

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

