var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var dbConn = require('../../config/db');
const path = require('path');
const bcrypt = require('bcrypt');

router.post('/officeSignup', async (req, res, next) => {
  var email = req.body.email;
  var password = req.body.password;
  var role = 'admin';
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
        res.status(200).json({ success: true, accountId: results.accountId });
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/storeSignup', async (req, res, next) => {
  var email = req.body.email;
  var password = req.body.password;
  var role = 'store';
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
        res.status(200).json({ success: true, accountId: results.accountId });
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

module.exports = router;