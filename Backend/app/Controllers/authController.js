// Import necessary modules and functions
const User = require('../Models/userModel');
const { generateHash, compareHash, generateJWT } = require('../Utils/authUtils');

// Function to register a new user
const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    
    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Hash the password and create a new user
    const hashedPassword = await generateHash(password);
    const user = await User.create({ firstName, lastName, email, password: hashedPassword });

    // Generate a JWT token for the user and send the response
    const token = generateJWT(user);
    return res.status(201).json({ user, token });
  } catch (err) {
    // Handle server errors
    return res.status(500).json({ message: 'Server error register' });
  }
};

// Function to authenticate and log in a user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find the user based on the email
    const user = await User.findOne({ where: { email } });

    // If user doesn't exist, return error
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the hashed password with the provided password
    const isPasswordValid = await compareHash(password, user.password);
    
    // If password is invalid, return error
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate a JWT token for the user and send the response
    const token = generateJWT(user);
    return res.status(200).json({ user, token });
  } catch (err) {
    // Handle server errors
    return res.status(500).json({ message: 'Server error' });
  }
};

// Function to retrieve all users
const getAllUsers = async (req, res) => {
  try {
    // Retrieve all users from the database
    const users = await User.findAll();
    
    // If no users are found, return error
    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }

    // Send the list of users in the response
    return res.status(200).json(users);
  } catch (err) {
    // Handle server errors
    return res.status(500).json({ message: 'Server error' });
  }
};

// Function to retrieve a single user by ID
const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Find a user by their ID
    const user = await User.findByPk(id);

    // If user doesn't exist, return error
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send the user details in the response
    return res.status(200).json(user);
  } catch (err) {
    // Handle server errors
    return res.status(500).json({ message: 'Server error' });
  }
};

// Export the defined functions for use in other modules
module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getOneUser,
};
