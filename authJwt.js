const jwt = require('jsonwebtoken');
require('dotenv').config(); // Use environment variables for secret

// Your JWT secret from .env (e.g., JWT_SECRET=YOUR_VERY_SECRET_KEY)
const config = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  // Check for the token in the 'x-access-token' header
  let token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({ message: 'No token provided!' });
  }

  jwt.verify(token, config, (err, decoded) => {
    if (err) {
      // Handles token expired, invalid signature, etc.
      return res.status(401).send({ message: 'Unauthorized! Token is invalid or expired.' });
    }
    // Store the decoded user ID for use in the controller
    req.userId = decoded.id;
    next();
  });
};

module.exports = { verifyToken };
