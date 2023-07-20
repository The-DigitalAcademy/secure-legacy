const express = require('express');
const { registerUser, loginUser } = require('../Controllers/authController');
const { getAllUsers } = require('../Controllers/authController');
const { authenticateJWT } = require('../Middleware/authMiddleware');

const authRouter = express.Router();
const userRouter = express.Router();

// Auth routes
authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);

// User routes (Example: get all users)
authRouter.get('/', getAllUsers);

module.exports = {
  authRouter,
  userRouter,
};
