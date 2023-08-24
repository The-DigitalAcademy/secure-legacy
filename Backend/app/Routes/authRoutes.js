// Import necessary modules and dependencies
const express = require('express');

// Import controllers and middleware
const { registerUser, loginUser } = require('../Controllers/authController');
const { getAllUsers, getOneUser } = require('../Controllers/authController');
const { authenticateJWT } = require('../Middleware/authMiddleware');

// Create routers for authentication and user-related routes
const authRouter = express.Router();
const userRouter = express.Router();

// Define authentication routes
authRouter.post('/register', registerUser); // Register a new user
authRouter.post('/login', loginUser);       // Log in an existing user

// Define user-related routes (Example: get all users and get user by ID)
authRouter.get('/', getAllUsers, authenticateJWT);    // Get all users
authRouter.get('/:id', getOneUser, authenticateJWT); // Get a user by ID

// Export the defined routers for use in other modules
module.exports = {
  authRouter,
  userRouter,
};
