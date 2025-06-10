# Job Search Next.js Application

A job search application built with Next.js 15, featuring job search functionality, user profile, and personalized recommendations.

## Features

### Core Functionality

- **Job Search**: Search for jobs by title with real-time API integration
- **Job Details**: Detailed view for each job posting with full information
- **User Profile**: Create and manage user profiles with desired job titles
- **Personalized Recommendations**: Get job suggestions based on your profile
- **Liked Jobs**: Save favorite jobs to your personal list
- **Authentication**: User registration and login system

### Key Pages

- `/` - Home page
- `/jobs` - Job search and recommendations
- `/job-details/[id]` - Individual job details
- `/liked` - Saved/liked jobs list
- `/create-profile` - User profile creation
- `/auth/sign-in` - User authentication

## Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Formik + Yup** - Form handling and validation
- **SWR** - Data fetching with caching
- **Axios** - HTTP client for API requests
- **React Icons** - Icon library

### Backend

- **Express.js** - Node.js web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### External APIs

- **JSearch API** - Job search data from RapidAPI

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- MongoDB account (for backend)
- RapidAPI account for JSearch API

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd job-search-next
```

2. **Install dependencies**

```bash
npm install
```

3. **Environment Setup**
   Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_APP_NAME=Job Search
NEXT_PUBLIC_X_RAPIDAPI_HOST="https://jsearch.p.rapidapi.com"
NEXT_PUBLIC_X_RAPIDAPI_KEY=your_rapidapi_key_here
NEXT_PUBLIC_AUTH_API_BASE_URL=your_auth_backend_host
```

4. **Get RapidAPI Key**

- Sign up at [RapidAPI](https://rapidapi.com)
- Subscribe to [JSearch API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch)
- Copy your API key to the environment file

5. **Run the development server**

```bash
npm run dev
```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 API Integration

### JSearch API

The application uses the JSearch API for job data:

- **Search Endpoint**: `/search` - Search for jobs
- **Job Details Endpoint**: `/job-details` - Get detailed job information

### Custom Hooks

- `useJobs(params)` - Fetch job listings with search parameters
- `useJobDetails(params)` - Fetch detailed job information by ID

## Authentication

- User registration with email/password
- Profile-based job recommendations
- Local storage for user session

## Data Storage

- **Local Storage**: User profiles and liked jobs
- **MongoDB**: User authentication data (backend)
- **SWR Cache**: API response caching for better performance

## Deployment

### Frontend (Vercel)

```bash
npm run build
# Deploy to Vercel or your preferred platform
```

### Backend (Render)

- Deploy the Express.js backend to Render
- Configure MongoDB connection string
- Set environment variables

## License

This project is licensed under the MIT License.
