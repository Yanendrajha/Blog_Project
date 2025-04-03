# Blog_Project

## Overview

Blog_Project is a comprehensive JavaScript-based application designed for creating and managing blog posts. The project incorporates modern web development practices and provides a robust platform for blog management.

## Features

- **User Authentication**: Secure user authentication using JWT for login and registration.
- **Post Management**: Create, edit, and delete blog posts with a rich text editor.
- **Comment System**: Integrated comment system for user interaction on posts.
- **Responsive Design**: Fully responsive design to ensure compatibility with various devices.
- **SEO Optimization**: Built-in SEO features to enhance search engine visibility.
- **Performance Optimization**: Optimized for fast load times and efficient performance.

## Technologies Used

- **Frontend**:
  - JavaScript (ES6+)
  - React
  - Redux
  - HTML5
  - CSS3
  - Bootstrap

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (Mongoose)
  - JWT for authentication

## Directory Structure

```
Blog_Project/
├── client/                 # Frontend source code
│   ├── public/             # Public assets
│   ├── src/                # React components and Redux store
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── redux/          # Redux actions and reducers
│   │   ├── utils/          # Utility functions
│   │   └── App.js          # Main App component
│   └── package.json        # Frontend dependencies
│
├── server/                 # Backend source code
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   └── server.js           # Main server file
│
├── .env                    # Environment variables
├── .gitignore              # Git ignore file
├── README.md               # Project documentation
└── package.json            # Backend dependencies
```

## Installation and Running

### Prerequisites

- Node.js & npm
- MongoDB

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/Yanendrajha/Blog_Project.git
   cd Blog_Project
   ```

2. Install backend dependencies:
   ```sh
   cd server
   npm install
   ```

3. Setup environment variables:
   Create a `.env` file in the `server` directory and add the following:
   ```
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup

1. Navigate to the `client` directory:
   ```sh
   cd client
   ```

2. Install frontend dependencies:
   ```sh
   npm install
   ```

3. Start the frontend development server:
   ```sh
   npm start
   ```

---
