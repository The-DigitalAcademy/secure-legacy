const express = require('express');
const { registerUser, loginUser, resetPassword, requestPasswordReset } = require('../Controllers/authController');
const { getAllUsers, getOneUser} = require('../Controllers/authController');
const { authenticateJWT } = require('../Middleware/authMiddleware');

const authRouter = express.Router();
const userRouter = express.Router();

// Auth routes
authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);

// User routes (Example: get all users)
authRouter.get('/', getAllUsers);
authRouter.get('/:id', getOneUser);

authRouter.post('/requestPasswordReset', requestPasswordReset)
authRouter.post('/resetPassword', resetPassword)


module.exports = {
  authRouter,
  userRouter,
};
