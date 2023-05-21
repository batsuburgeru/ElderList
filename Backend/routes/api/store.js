var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
var dbConn = require('../../config/db');

const authenticate = (req, res, next) => {
  const authToken = req.cookies.authToken; // Assuming the token is stored in a cookie named "authToken"

  if (!authToken) {
    // Token is missing, authentication failed
    return res.status(401).json({ success: false, message: 'Authentication failed' });
  }

  try {
    // Verify and decode the token
    const secretKey = process.env.SECRET_KEY; // Retrieve secret key from environment variable
    const decoded = jwt.verify(authToken, secretKey);

    // Check the expiration
    if (decoded.exp < Date.now() / 1000) {
      // Token is expired, authentication failed
      return res.status(401).json({ success: false, message: 'Token expired' });
    }

    // Check the role
    if (decoded.role !== 'store') { // Replace 'admin' with the role you want to allow access to
      // Role is not authorized, authentication failed
      return res.status(403).json({ success: false, message: 'Access denied' });
    }

    // Token is valid and user is authorized, proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Token verification failed, authentication failed
    return res.status(401).json({ success: false, message: 'Authentication failed' });
  }
};

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
