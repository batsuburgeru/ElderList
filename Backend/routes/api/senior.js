var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var dbConn = require('../../config/db');

router.get('/bookletRender/:seniorId', async (req, res, next) => {
  const { seniorId } = req.params;
  try {
    // Get senior citizen details from database based on seniorId
    const query = 'SELECT * FROM seniorbooklet_tb WHERE seniorId = ?';
    const values = [seniorId];
    const result = await dbConn.query(query, values, function (error, results, fields) {
      if (error) {
        console.error(error);
        return next(error);
      }
      res.status(200).json({ success: true, bookletDetails: results });
      console.log(results);
    });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

  module.exports = router;