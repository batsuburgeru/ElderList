var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var dbConn = require('../../config/db');

router.get('/bookletRender', async(req, res, next) => {
    try {
        // Get senior citizen details from database
        const query = `SELECT * FROM seniorbooklet_tb`;
        const values = [];
        const result = await dbConn.query(query, values, function(error, results, fields) {
          if (error) {
            console.error(error);
            return next(error);
          }
          res.status(200).json({ success: true, bookletDetails: results });
          console.log(results)
        });
      } catch (error) {
        console.error(error);
        return next(error);
      }
  });

  module.exports = router;