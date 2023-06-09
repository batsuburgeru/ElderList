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
    if (decoded.role !== 'seniorCitizen') { // Replace 'admin' with the role you want to allow access to
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

router.get('/bookletRender/:accountId', async (req, res, next) => {
  const { accountId } = req.params;

  try {
    // First query: Select seniorId from seniorcitizen_tb based on accountId
    const selectSeniorIdQuery = 'SELECT seniorId FROM seniorcitizen_tb WHERE accountId = ?';
    const selectSeniorIdValues = [accountId];

    dbConn.query(selectSeniorIdQuery, selectSeniorIdValues, async (error, selectSeniorIdResult, fields) => {
      if (error) {
        console.error(error);
        return next(error);
      }

      if (selectSeniorIdResult.length === 0) {
        // No matching seniorId found for the given accountId
        return res.status(404).json({ success: false, message: 'Senior citizen not found' });
      }

      const seniorId = selectSeniorIdResult[0].seniorId;

      // Second query: Get senior booklet details from seniorbooklet_tb based on seniorId
      const selectBookletQuery = 'SELECT * FROM seniorbooklet_tb WHERE seniorId = ?';
      const selectBookletValues = [seniorId];

      dbConn.query(selectBookletQuery, selectBookletValues, (error, selectBookletResult, fields) => {
        if (error) {
          console.error(error);
          return next(error);
        }

        res.status(200).json({ success: true, bookletDetails: selectBookletResult });
      });
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/inputCode/:accountId', async (req, res, next) => {
  const relationshipCode = req.body.relationshipCode;
  const codeExpiration = req.body.codeExpiration;
  const accountId = req.params.accountId;

  try {
    // Query the database to retrieve the seniorId associated with the accountId
    const seniorIdQuery = `SELECT seniorId FROM seniorcitizen_tb WHERE accountId = ?`;
    const seniorIdValues = [accountId];
    dbConn.query(seniorIdQuery, seniorIdValues, function (error, seniorIdResult, fields) {
      if (error) {
        console.error(error);
        return next(error);
      }

      if (seniorIdResult.length === 0) {
        // No seniorId found for the given accountId
        return res.status(404).json({ success: false, message: 'Senior not found' });
      }

      const seniorId = seniorIdResult[0].seniorId;

      // Proceed with the query
      const relationshipQuery = `INSERT INTO relationship_tb (seniorId, relationshipCode, codeExpiration) VALUES (?, ?, ?)`;
      const relationshipValues = [seniorId, relationshipCode, codeExpiration];
      dbConn.query(relationshipQuery, relationshipValues, function (error, relationshipResult, fields) {
        if (error) {
          console.error(error);
          return next(error);
        }

        const relationshipId = relationshipResult.insertId; // Get the inserted relationshipId
        res.status(200).json({ success: true, relationshipId: relationshipId });
      });
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});
  module.exports = router;