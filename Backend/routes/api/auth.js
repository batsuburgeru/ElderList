var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var dbConn = require('../../config/db');

router.post('/signup', async (req, res, next) => {
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
  var accountId = " ";

  try {
    // Insert user's account credentials into account_tb
    const accountQuery = `INSERT INTO account_tb (email, password) VALUES (?, ?)`;
    const accountValues = [email, password];
    const accountResult = await dbConn.query(accountQuery, accountValues, function(error, results, fields) {
      console.log(results);
      accountId = results.insertId;

      // Insert user's basic info into seniorcitizen_tb with accountId as foreign key
      const seniorQuery = `INSERT INTO seniorcitizen_tb (accountId, firstName, middleName, lastName, contactNumber, dateOfBirth, address, idNumber, dateOfIssue, expirationDate) VALUES (?,?,?,?,?,?,?,?,?,?)`;
      const seniorValues = [accountId, firstName, middleName, lastName, contactNumber, dateOfBirth, address, idNumber, dateOfIssuance, dateOfExpiration];
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

module.exports = router;