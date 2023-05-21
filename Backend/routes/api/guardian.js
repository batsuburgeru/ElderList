var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var dbConn = require('../../config/db');

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
      if (decoded.role !== 'guardian') { // Replace 'admin' with the role you want to allow access to
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

router.post('/inputCodeValidation/:accountId', async (req, res, next) => {
    const relationshipCode = req.body.relationshipCode;
    const accountId = req.params.accountId;
  
    try {
      const guardianIdQuery = `SELECT guardianId FROM guardian_tb WHERE accountId = ?`;
      const guardianIdValues = [accountId];
      dbConn.query(guardianIdQuery, guardianIdValues, function (error, guardianIdResult, fields) {
        if (error) {
          console.error(error);
          return next(error);
        }
  
        if (guardianIdResult.length === 0) {
          // No guardianId found for the given accountId
          return res.status(404).json({ success: false, message: 'Guardian not found' });
        }
  
        const guardianId = guardianIdResult[0].guardianId;
  
        // Query the database to validate the code
        const validateQuery = `SELECT * FROM relationship_tb WHERE relationshipCode = ? AND status = ?`;
        const validateValues = [relationshipCode, 'pending'];
  
        dbConn.query(validateQuery, validateValues, function (error, results, fields) {
          if (error) {
            console.error(error);
            return next(error);
          }
  
          if (results.length === 0) {
            // Code does not match, handle the error or return appropriate response
            return res.status(400).json({ success: false, message: 'Invalid code' });
          }
  
          // Code matches, update the guardianId and status
          const updateQuery = `UPDATE relationship_tb SET guardianId = ?, status = ? WHERE relationshipCode = ?`;
          const updateValues = [guardianId, 'confirmed', relationshipCode];
  
          dbConn.query(updateQuery, updateValues, function (error, results, fields) {
            if (error) {
              console.error(error);
              return next(error);
            }
  
            // Code matched and guardianId updated successfully
            return res.status(200).json({ success: true, message: 'Code matched and guardianId updated' });
          });
        });
      });
    } catch (error) {
      console.error(error);
      return next(error);
    }
  });


  router.get('/guardianBooklet/:accountId', (req, res, next) => {
    const { accountId } = req.params;
  
    try {
      // Get guardianId based on the provided accountId
      const guardianQuery = 'SELECT guardianId FROM guardian_tb WHERE accountId = ?';
      const guardianValues = [accountId];
      dbConn.query(guardianQuery, guardianValues, function (error, guardianResult) {
        if (error) {
          console.error(error);
          return next(error);
        }
  
        if (guardianResult.length === 0) {
          // No guardian found for the provided accountId
          return res.status(404).json({ success: false, message: 'Guardian not found' });
        }
  
        const guardianId = guardianResult[0].guardianId;
  
        // Check if the guardian has a valid relationship with any senior
        const relationshipQuery = 'SELECT seniorId FROM relationship_tb WHERE guardianId = ?';
        const relationshipValues = [guardianId];
        dbConn.query(relationshipQuery, relationshipValues, function (error, relationshipResult) {
          if (error) {
            console.error(error);
            return next(error);
          }
  
          if (relationshipResult.length === 0) {
            // No valid relationship exists for the guardian
            return res.status(403).json({ success: false, message: 'Unauthorized' });
          }
  
          const seniorIds = relationshipResult.map((row) => row.seniorId);
  
          // Fetch the senior's booklets based on the seniorIds
          const bookletQuery = 'SELECT * FROM seniorbooklet_tb WHERE seniorId IN (?)';
          const bookletValues = [seniorIds];
          dbConn.query(bookletQuery, bookletValues, function (error, bookletResult) {
            if (error) {
              console.error(error);
              return next(error);
            }
  
            res.status(200).json({ success: true, bookletDetails: bookletResult });
            console.log(bookletResult);
          });
        });
      });
    } catch (error) {
      console.error(error);
      return next(error);
    }
  });









module.exports = router;