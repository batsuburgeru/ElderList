var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var dbConn = require('../../config/db');


router.post('/inputCodeValidation/:guardianId', async (req, res, next) => {
    const relationshipCode = req.body.relationshipCode;
    const guardianId = req.params.guardianId
  
    try {
      // Query the database to validate the code
      const validateQuery = `SELECT * FROM relationship_tb WHERE relationshipCode = ?`;
      const validateValues = [relationshipId];
      const validateResult = await dbConn.query(validateQuery, validateValues, function(error, results, fields) {
        if (error) {
          console.error(error);
          return next(error);
        }
        if (results.length === 0) {
          // Code does not match, handle the error or return appropriate response
          return res.status(400).json({ success: false, message: 'Invalid code' });
        }
        // Code matches, update the guardianId
        const updateQuery = `UPDATE relationship_tb SET guardianId = ? WHERE relationshipCode = ?`;
        const updateValues = [guardianId, relationshipCode]; // Set the guardianId value based on your logic
        dbConn.query(updateQuery, updateValues, function(error, results, fields) {
          if (error) {
            console.error(error);
            return next(error);
          }
          // Code matched and guardianId updated successfully
          return res.status(200).json({ success: true, message: 'Code matched and guardianId updated' });
        });
      });
    } catch (error) {
      console.error(error);
      return next(error);
    }
  });










module.exports = router;