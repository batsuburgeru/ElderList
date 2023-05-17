var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var dbConn = require('../../config/db');
const cookieParser = require('cookie-parser');

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


router.get('/newlyRegistered', async (req, res, next) => {
  try {
    // Get senior citizen details from database
    const query = `SELECT seniorcitizen_tb.*
                   FROM seniorcitizen_tb
                   JOIN account_tb ON seniorcitizen_tb.accountId = account_tb.accountId
                   WHERE account_tb.status = 'pending'`;
    const values = [];
    const result = await dbConn.query(query, values, function(error, results, fields) {
      if (error) {
        console.error(error);
        return next(error);
      }
      //res.status(200).json({ success: true, seniorDetails: results });
      const seniorDetails = results.map((result) => ({
          seniorId: result.seniorId,
        accountId: result.accountId,
        firstName: result.firstName,
        middleName: result.middleName,
        lastName: result.lastName,
        contactNumber: result.contactNumber,
        dateOfBirth: result.dateOfBirth,
        address: result.address,
        idNumber: result.idNumber,
        dateOfIssue: result.dateOfIssue,
        expirationDate: result.expirationDate,
        seniorUpload: `http://localhost:5000/office/newlyRegisteredImg/${result.seniorUpload}`

      }))
      res.status(200).json(seniorDetails)
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.get('/newlyRegisteredImg/:seniorUpload', async(req, res) => {
  const seniorUpload = req.params.seniorUpload;

  try {
    res.sendFile (seniorUpload, {root: '././File Upload/ID Upload'});
  } catch (error) {
    res.status(500).json ({success: false, error: 'Internal Server Error'});
  }
})

router.get('/seniorList', async (req, res, next) => {
  try {
    // Get senior citizen details from database
    const query = `SELECT seniorcitizen_tb.*
                   FROM seniorcitizen_tb
                   JOIN account_tb ON seniorcitizen_tb.accountId = account_tb.accountId
                   WHERE account_tb.status = 'confirmed'`;
    const values = [];
    const result = await dbConn.query(query, values, function(error, results, fields) {
      if (error) {
        console.error(error);
        return next(error);
      }
      res.status(200).json({ success: true, seniorDetails: results });
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});


router.patch('/registrationAccept/:accountId', async (req, res, next) => {
  const { accountId } = req.params;
  try {
    const result = await dbConn.query(`UPDATE account_tb SET status = ? WHERE accountId = ?`, ['confirmed', accountId]);
    res.json({ message: 'Account accepted' });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/registrationReject/:accountId', async (req, res, next) => {
  const { accountId } = req.params;
  try {
    const dataToInsertQuery = 'SELECT firstName, lastName, middleName, contactNumber, dateOfBirth, address, idNumber, dateOfIssue, expirationDate FROM seniorcitizen_tb WHERE accountId = ?';
    const dataToInsertValues = [accountId];

    // Step 2: Insert the data into dump_tb
    const insertQuery = 'INSERT INTO dump_tb (firstName, lastName, middleName, contactNumber, dateOfBirth, address, idNumber, dateOfIssuance, dateOfExpiration) ' + dataToInsertQuery;
    await dbConn.query(insertQuery, dataToInsertValues);

    // Step 3: Delete the record from account_tb
    const deleteQuery = 'DELETE FROM account_tb WHERE accountId = ?';
    await dbConn.query(deleteQuery, [accountId]);

    res.json({ message: 'Account rejected' });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;