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


router.patch('/registrationAccept/:accountId', async (req, res, next) => {
  const { accountId } = req.params;
  try {
    const result = await dbConn.query(`UPDATE account_tb SET status = ? WHERE accountId = ?`, ['accepted', accountId]);
    res.json({ message: 'Account accepted' });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/registrationReject/:accountId', async (req, res, next) => {
  const { accountId } = req.params;
  try {
    const result = await dbConn.query('DELETE FROM account_tb WHERE accountId = ?', [accountId]);
    res.json({ message: 'Account rejected' });
  } catch (error) {
    console.error(error);
    next(error);
  }
});


module.exports = router;