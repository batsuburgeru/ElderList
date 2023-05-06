var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var dbConn = require('../../config/db');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'File Upload/ID Upload/'); // Directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const fileExtension = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
    }
  });

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
  var accountId = " ";

  try {
    // Insert user's account credentials into account_tb
    const accountQuery = `INSERT INTO account_tb (email, password, role) VALUES (?, ?, ?)`;
    const accountValues = [email, password, role];
    const accountResult = await dbConn.query(accountQuery, accountValues, function(error, results, fields) {
      console.log(results);
      accountId = results.insertId;

      const filePath = req.file.path;

      // Insert user's basic info into seniorcitizen_tb with accountId as foreign key
      const seniorQuery = `INSERT INTO seniorcitizen_tb (accountId, firstName, middleName, lastName, contactNumber, dateOfBirth, address, idNumber, dateOfIssue, expirationDate, seniorUpload) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
      const seniorValues = [accountId, firstName, middleName, lastName, contactNumber, dateOfBirth, address, idNumber, dateOfIssuance, dateOfExpiration, filePath];
      dbConn.query(seniorQuery, seniorValues, function(error, results, fields) {
        if (error) {
          console.error(error);
          return next(error);
        }
        const seniorId = results.insertId;
        res.status(200).json({ success: true, seniorId:seniorId });
      });
    })
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/guardianSignup', async (req, res, next) => {
  var firstName = req.body.firstName;
  var middleName = req.body.middleName;
  var lastName = req.body.lastName;
  var contactNumber = req.body.contactNumber;
  var email = req.body.email;
  var password = req.body.password;
  var role = 'guardian';
  var accountId = " ";

  try {
    // Insert user's account credentials into account_tb
    const accountQuery = `INSERT INTO account_tb (email, password, role) VALUES (?, ?, ?)`;
    const accountValues = [email, password, role];
    const accountResult = await dbConn.query(accountQuery, accountValues, function(error, results, fields) {
      console.log(results);
      accountId = results.insertId;

      // Insert user's basic info into seniorcitizen_tb with accountId as foreign key
      const guardianQuery = `INSERT INTO guardian_tb (accountId, firstName, middleName, lastName, contactNumber) VALUES (?,?,?,?,?)`;
      const guardianValues = [accountId, firstName, middleName, lastName, contactNumber];
      dbConn.query(guardianQuery, guardianValues, function(error, results, fields) {
        if (error) {
          console.error(error);
          return next(error);
        }
        const guardianId = results.insertId;
        res.status(200).json({ success: true, guardianId:guardianId });
      });
    })
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/login',(req,res,next) => {
  var email = req.body.email;
  var password = req.body.password;

try {
  sqlQuery = `SELECT * FROM account_tb WHERE email="${email}" AND password="${password}"`;
  dbConn.query (sqlQuery, function(error,results) {
    console.log(results);
    Object.keys(results).forEach(function(key){
  var row = results[key];
  var accountId = row.accountId;
  var email = row.email;
  var role = row.role;
  var data = {
    accountId:row.accountId,
    email:row.email,
    role:row.role,
};
//Create Token
  token = jwt.sign({data:data},process.env.SECRET_TOKEN,{expiresIn: '1h'});
  res.status(200).json({success:true,token:token});
});
});
} catch (error) {
console.log(error);
return next(error)
}
});

module.exports = router;