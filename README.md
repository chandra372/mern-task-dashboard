# MERN Task Dashboard

A full-stack task management application built with MongoDB, Express, React, and Node.js (MERN stack).

## Features

- **User Authentication**: Register and login with secure JWT authentication
- **Task Management**: Create, read, update, and delete tasks
- **Task Prioritization**: Assign priority levels (Low, Medium, High) to tasks
- **Task Status Tracking**: Track task status (Pending, In-Progress, Completed)
- **User Dashboard**: Personal dashboard for each user to manage their tasks
- **Responsive Design**: Mobile-friendly UI with modern styling

## Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing

### Frontend
- **React** - UI library
- **React Router** - Client-side routing
- **CSS3** - Styling

## Project Structure

```
mern-task-dashboard/
├── backend/
│   ├── config/
│   │   └── db.js              # Database connection
│   ├── controllers/
│   │   ├── taskController.js  # Task business logic
│   │   └── userController.js  # User business logic
│   ├── middleware/
│   │   └── authMiddleware.js  # JWT authentication
│   ├── models/
│   │   ├── Task.js            # Task schema
│   │   └── User.js            # User schema
│   ├── routes/
│   │   ├── taskRoutes.js      # Task API endpoints
│   │   └── userRoutes.js      # User API endpoints
│   ├── .env                   # Environment variables
│   ├── server.js              # Server entry point
│   └── package.json           # Backend dependencies
│
└── frontend/
    ├── public/
    │   └── index.html         # HTML entry point
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.js      # Navigation component
    │   │   ├── TaskForm.js    # Task creation form
    │   │   └── TaskList.js    # Task list display
    │   ├── pages/
    │   │   ├── Dashboard.js   # Main dashboard
    │   │   ├── Login.js       # Login page
    │   │   └── Register.js    # Registration page
    │   ├── App.js             # Main app component
    │   ├── index.js           # React entry point
    │   └── CSS files          # Styling
    ├── .env                   # Environment variables
    ├── .gitignore             # Git ignore rules
    ├── package.json           # Frontend dependencies
    └── README.md              # This file
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with the following variables:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/mern-task-dashboard
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
BCRYPT_ROUNDS=10
```

4. Start the backend server:
```bash
npm start
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
REACT_APP_API_URL=http://localhost:5000/api
DANGEROUSLY_DISABLE_HOST_CHECK=true
```

4. Start the development server:
```bash
npm start
```

The app will open on `http://localhost:3000`

## API Endpoints

### User Endpoints
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user

### Task Endpoints
- `GET /api/tasks` - Get all tasks for logged-in user
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Authentication

The application uses JWT (JSON Web Tokens) for authentication. After login, the token is stored in localStorage and sent with each request in the Authorization header.

## Usage

1. **Register**: Create a new account with your email and password
2. **Login**: Sign in with your credentials
3. **Dashboard**: View your tasks and create new ones
4. **Manage Tasks**: 
   - Set priority levels (Low, Medium, High)
   - Mark tasks as complete
   - Delete tasks
   - Add descriptions to tasks

## Available Scripts

### Backend
- `npm start` - Start the server
- `npm run dev` - Start with nodemon for development

### Frontend
- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## Environment Variables

### Backend (.env)
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT signing
- `JWT_EXPIRE` - JWT expiration time
- `BCRYPT_ROUNDS` - Bcrypt salt rounds for password hashing

### Frontend (.env)
- `REACT_APP_API_URL` - Backend API URL
- `DANGEROUSLY_DISABLE_HOST_CHECK` - Allow dev server on any host

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.

## Author

MERN Task Dashboard - 2026

## Support

For support, email support@example.com or open an issue on GitHub.
