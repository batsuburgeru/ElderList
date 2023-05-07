var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var dbConn = require('../../config/db');

router.post('/bookletInput/:seniorId', async (req, res, next) => {
    var seniorId = req.params.seniorId;
    var referenceId = req.body.referenceId;
    var nameOfProduct = req.body.nameOfProduct;
    var numberOfUnits = req.body.numberOfUnits;
    var discountAmount = req.body.discountAmount;
  
    try {
      // Insert user's account credentials into account_tb
      const storeQuery = `INSERT INTO seniorbooklet_tb (referenceId, seniorId, nameOfProduct, numberOfUnits, discountAmount) VALUES (?, ?, ?, ?, ?)`;
      const storeValues = [referenceId, seniorId, nameOfProduct, numberOfUnits, discountAmount];
      const storeResult = await dbConn.query(storeQuery, storeValues, function(error, results, fields) {
        console.log(results);
        if (error) {
          console.error(error);
          return next(error);
        }
        res.status(200).json({ success: true, referenceId: referenceId });
      });
    } catch (error) {
      console.error(error);
      return next(error);
    }
  });

  router.get('/bookletView', async(req, res, next) => {
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
        });
      } catch (error) {
        console.error(error);
        return next(error);
      }
  });

  module.exports = router;
