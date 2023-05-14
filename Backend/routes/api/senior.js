var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var dbConn = require('../../config/db');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

dotenv.config();

const authenticate = (req, res, next) => {
  const authToken = req.cookies.authToken; // Assuming the token is stored in a cookie named "authToken"

  if (!authToken) {
    // Token is missing, authentication failed
    return res.status(401).json({ success: false, message: 'Authentication failed' });
  }

  try {
    // Verify and decode the token
    const secretKey = process.env.SECRET_KEY; // Retrieve secret key from environment variable
    const decoded = jwt.verify(authToken, secretKey);

    // Check the expiration
    if (decoded.exp < Date.now() / 1000) {
      // Token is expired, authentication failed
      return res.status(401).json({ success: false, message: 'Token expired' });
    }

    // Check the role
    if (decoded.role !== 'admin') { // Replace 'admin' with the role you want to allow access to
      // Role is not authorized, authentication failed
      return res.status(403).json({ success: false, message: 'Access denied' });
    }

    // Token is valid and user is authorized, proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Token verification failed, authentication failed
    return res.status(401).json({ success: false, message: 'Authentication failed' });
  }
};

router.get('/bookletRender/:seniorId', authenticate, async (req, res, next) => {
  const { seniorId } = req.params;
  try {
    // Get senior citizen details from database based on seniorId
    const query = 'SELECT * FROM seniorbooklet_tb WHERE seniorId = ?';
    const values = [seniorId];
    const result = await dbConn.query(query, values, function (error, results, fields) {
      if (error) {
        console.error(error);
        return next(error);
      }
      res.status(200).json({ success: true, bookletDetails: results });
      console.log(results);
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

  module.exports = router;