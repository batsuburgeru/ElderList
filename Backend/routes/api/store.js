var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var dbConn = require('../../config/db');

router.post('/bookletInput/:seniorId', async (req, res, next) => {
  var referenceId = (req.body.referenceId);
  var seniorId = req.params.seniorId;
  var storeName = req.body.storeName;
  var discountAmount = req.body.discountAmount;
  var purchasedItems = JSON.stringify(req.body.purchasedItems);

  try {
    var totalPrice = req.body.purchasedItems.reduce((total, item) => {
      return total + (item.quantity * item.pricePerUnit);
    }, 0);

    const storeQuery = `INSERT INTO seniorbooklet_tb (referenceId, seniorId, storeName, discountAmount, totalPrice, purchasedItems) VALUES (?, ?, ?, ?, ?, ?)`;
    const storeValues = [referenceId, seniorId, storeName, discountAmount, totalPrice, purchasedItems];

    const storeResult = await dbConn.query(storeQuery, storeValues);
    console.log(storeResult);

    res.status(200).json({ success: true, referenceId: referenceId });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

  router.get('/bookletView', async(req, res, next) => {
    try {
        // Get senior citizen details from database
        const query = `SELECT purchasedItems FROM seniorbooklet_tb`;
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
