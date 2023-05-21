var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var dbConn = require('../../config/db');
const cookieParser = require('cookie-parser');
const { Parser } = require('json2csv');
const mysql = require('mysql');
const fs = require('fs');
const xlsx = require('xlsx');
const path = require('path');
router.use(cookieParser());

const authenticate = (req, res, next) => {
  const authToken = req.cookies.token; // Assuming the token is stored in a cookie named "token"

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

router.get('/export-excel', (req, res) => {
  const query = 'SELECT * FROM seniorbooklet_tb ORDER BY dateOfPurchase DESC'; // Add ORDER BY clause to sort by dateOfPurchase in descending order
  try {
    dbConn.query(query, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to export the database to Excel.' });
      } else {
        if (results.length === 0) {
          res.status(400).json({ error: 'No data found in the database.' });
          return;
        }

        // Define the file paths
        const csvFilePath = path.join(__dirname, '../..', 'dataset', 'database.csv');
        const excelFilePath = path.join(__dirname, '../..', 'dataset', 'database.xlsx');

        // Convert the data to CSV format using json2csv
        const json2csvParser = new Parser({ fields: Object.keys(results[0]) });
        const csvData = json2csvParser.parse(results);

        // Write the CSV data to a file
        fs.writeFileSync(csvFilePath, csvData);

        // Load the CSV file into a workbook using xlsx
        const workbook = xlsx.readFile(csvFilePath);

        // Save the workbook as an Excel file
        xlsx.writeFile(workbook, excelFilePath, { bookType: 'xlsx' });

        // Set the appropriate response headers for file download
        res.setHeader('Content-Disposition', 'attachment; filename="database.xlsx"');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.sendFile(excelFilePath);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to export the database to Excel.' });
  }
});

router.get('/export-users', (req, res) => {
  const query = `
  SELECT *
  FROM seniorcitizen_tb AS s
  INNER JOIN account_tb AS a ON s.accountID = a.accountID
  WHERE a.status = 'confirmed'
  ORDER BY a.dateOfCreation DESC
`;
  
  try {
    dbConn.query(query, (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to export the database to Excel.' });
      } else {
        if (results.length === 0) {
          res.status(400).json({ error: 'No data found in the database.' });
          return;
        }

        // Define the file paths
        const csvFilePath = path.join(__dirname, '../..', 'dataset', 'database.csv');
        const excelFilePath = path.join(__dirname, '../..', 'dataset', 'elderlist_users.xlsx');

        // Convert the data to CSV format using json2csv
        const json2csvParser = new Parser({ fields: Object.keys(results[0]) });
        const csvData = json2csvParser.parse(results);

        // Write the CSV data to a file
        fs.writeFileSync(csvFilePath, csvData);

        // Load the CSV file into a workbook using xlsx
        const workbook = xlsx.readFile(csvFilePath);

        // Save the workbook as an Excel file
        xlsx.writeFile(workbook, excelFilePath, { bookType: 'xlsx' });

        // Set the appropriate response headers for file download
        res.setHeader('Content-Disposition', 'attachment; filename="elderlist_users.xlsx"');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.sendFile(excelFilePath);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to export the database to Excel.' });
  }
});

router.get('/excel-preview', (req, res) => {
  const excelFilePath = path.join(__dirname, '../..', 'dataset', 'database.xlsx');

  // Read the Excel file
  const workbook = xlsx.readFile(excelFilePath);

  // Get the first sheet name
  const sheetName = workbook.SheetNames[0];

  // Convert the first sheet to HTML format
  const htmlData = xlsx.utils.sheet_to_html(workbook.Sheets[sheetName]);

  // Set the appropriate response headers for the HTML preview
  res.setHeader('Content-Type', 'text/html');
  res.send(htmlData);
});

router.get('/officeAnalytics', async (req, res, next) => {
  try {
    const bookletQuery = 'SELECT * FROM seniorbooklet_tb';
    const seniorQuery = 'SELECT * FROM seniorcitizen_tb';

    const bookletResult = await dbConn.query(bookletQuery);
    const seniorResult = await dbConn.query(seniorQuery);

    res.status(200).json({ success: true, bookletAnalytics: bookletResult, seniorAnalytics: seniorResult });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;