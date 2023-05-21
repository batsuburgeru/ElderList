var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var dbConn = require('../../config/db');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'File Upload/ID Upload/'); // Directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)

      //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      // const fileExtension = path.extname(file.originalname);
     // cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
    },
  });
  const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWtith('image/')) {
      cb( nullt, true)
    } else {
      cb(new Error('File Type not Supported'), false)
    }
  };

  const upload = multer({ storage: storage });

  router.post('/seniorSignup', upload.single('image'), async (req, res, next) => {
    var firstName = req.body.firstName;
    var middleName = req.body.middleName;
    var lastName = req.body.lastName;
    var contactNumber = req.body.contactNumber;
    var dateOfBirth = req.body.dateOfBirth;
    var idNumber = req.body.idNumber;
    var dateOfIssuance = req.body.dateOfIssuance;
    var dateOfExpiration = req.body.dateOfExpiration;
    var address = req.body.address;
    var email = req.body.email;
    var password = req.body.password;
    var role = 'seniorCitizen';
  
    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Insert user's account credentials into account_tb
      const accountQuery = `INSERT INTO account_tb (email, password, role) VALUES (?, ?, ?)`;
      const accountValues = [email, hashedPassword, role];
  
      const accountResult = await dbConn.query(accountQuery, accountValues, function(error, results, fields) {
        if (error) {
          console.error(error);
          return next(error);
        }
        const accountId = results.insertId;
        const filePath = req.file.filename;
  
        // Insert user's basic info into seniorcitizen_tb with accountId as foreign key
        const seniorQuery = `INSERT INTO seniorcitizen_tb (accountId, firstName, middleName, lastName, contactNumber, dateOfBirth, address, idNumber, dateOfIssue, expirationDate, seniorUpload) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
        const seniorValues = [accountId, firstName, middleName, lastName, contactNumber, dateOfBirth, address, idNumber, dateOfIssuance, dateOfExpiration, filePath];
  
        dbConn.query(seniorQuery, seniorValues, function(error, results, fields) {
          if (error) {
            console.error(error);
            return next(error);
          }
  
          const seniorId = results.insertId;
          res.status(200).json({ success: true, seniorId: seniorId });
        });
      });
    } catch (error) {
      console.error(error);
      return next(error);
    }
  });

  router.post('/guardianSignup', upload.single('image'), async (req, res, next) => {
    var firstName = req.body.firstName;
    var middleName = req.body.middleName;
    var lastName = req.body.lastName;
    var contactNumber = req.body.contactNumber;
    var email = req.body.email;
    var password = req.body.password;
    var role = 'guardian';
    var status = 'confirmed';
  
    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Insert user's account credentials into account_tb
      const accountQuery = `INSERT INTO account_tb (email, password, role, status) VALUES (?, ?, ?, ?)`;
      const accountValues = [email, hashedPassword, role, status];
      const accountResult = await dbConn.query(accountQuery, accountValues, function(error, results, fields) {
        if (error) {
          console.error(error);
          return next(error);
        }
  
        const accountId = results.insertId;
  
        const filePath = req.file.path;
  
        // Insert user's basic info into seniorcitizen_tb with accountId as foreign key
        const guardianQuery = `INSERT INTO guardian_tb (accountId, firstName, middleName, lastName, contactNumber, guardianUpload) VALUES (?,?,?,?,?,?)`;
        const guardianValues = [accountId, firstName, middleName, lastName, contactNumber, filePath];
  
        dbConn.query(guardianQuery, guardianValues, function(error, results, fields) {
          if (error) {
            console.error(error);
            return next(error);
          }
  
          const guardianId = results.insertId;
          res.status(200).json({ success: true, guardianId: guardianId });
        });
      });
    } catch (error) {
      console.error(error);
      return next(error);
    }
  });

  router.post('/login', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
  
    try {
      const sqlQuery = `SELECT * FROM account_tb WHERE email = ?`;
      const sqlValues = [email];
  
      dbConn.query(sqlQuery, sqlValues, async function(error, results) {
        if (error) {
          console.error(error);
          return next(error);
        }
  
        if (results.length === 0) {
          // Invalid credentials
          return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
  
        const user = results[0];
        const hashedPassword = user.password;
  
        // Compare the hashed password
        const isPasswordMatch = await bcrypt.compare(password, hashedPassword);
  
        if (!isPasswordMatch) {
          // Invalid credentials
          return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
  
        // Check the account status
        if (user.status !== 'confirmed') {
          // Account is not confirmed
          return res.status(401).json({ success: false, message: 'Account not confirmed' });
        }
  
        // User authenticated and account is confirmed, generate token
        const data = {
          accountId: user.accountId,
          email: user.email,
          role: user.role,
          status: user.status
        };
        const token = jwt.sign({ data }, process.env.SECRET_KEY, { expiresIn: '1h' });
  
        // Decode the token to extract the role
        const decodedToken = jwt.decode(token);
  
        // Include the role in the response data
        const responseData = {
          success: true,
          token: token,
          role: decodedToken.data.role,
          accountId: decodedToken.data.accountId
        };
  
        res.status(200).json(responseData);
      });
    } catch (error) {
      console.error(error);
      return next(error);
    }
  });
  
module.exports = router;