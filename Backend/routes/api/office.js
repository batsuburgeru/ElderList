var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var dbConn = require('../../config/db');

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
      res.status(200).json({ success: true, seniorDetails: results });
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});


router.patch('/registrationConfirm/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await db.query('UPDATE users SET status = $1 WHERE id = $2', ['accepted', id]);
      res.json({ message: 'Account accepted' });
    } catch (error) {
      console.error(error);
      next(error);
    }
  });


module.exports = router;