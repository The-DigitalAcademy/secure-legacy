// Import necessary modules and functions for JWT authentication
const { verifyJWT } = require('../Utils/authUtils');

// Middleware function to authenticate requests using JWT
const authenticateJWT = (req, res, next) => {
  // Extract JWT token from the request header
  const token = req.header('Authorization');

  // If token is missing, return authentication error
  if (!token) {
    return res.status(401).json({ message: 'Authentication token missing' });
  }

  try {
    // Verify and decode the JWT token
    const decodedToken = verifyJWT(token);
    
    // Attach the decoded user information to the request object
    req.user = decodedToken;
    
    // Move to the next middleware or route handler
    next();
  } catch (err) {
    // If token is invalid, return forbidden error
    return res.status(403).json({ message: 'Invalid token' });
  }
};

// Export the defined middleware for use in other modules
module.exports = {
  authenticateJWT,
};
