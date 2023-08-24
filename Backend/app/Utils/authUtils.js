// Import necessary modules for password hashing and JWT handling
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Define salt rounds for bcrypt and your secret key for JWT
const saltRounds = 10;
const secretKey = 'your-secret-key';

// Function to generate a hash of the password using bcrypt
const generateHash = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds);
  return bcrypt.hash(password, salt);
};

// Function to compare a password with its hash using bcrypt
const compareHash = async (password, hash) => {
  return bcrypt.compare(password, hash);
};

// Function to generate a JWT token for a user
const generateJWT = (user) => {
  const payload = { id: user.id, email: user.email };
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

// Function to verify and decode a JWT token
const verifyJWT = (token) => {
  return jwt.verify(token, secretKey);
};

// Export the defined functions for use in other modules
module.exports = {
  generateHash,
  compareHash,
  generateJWT,
  verifyJWT,
};
