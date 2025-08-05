// routes/allformRoutes.js
const express = require('express');
const router  = express.Router();

// Destructure exactly what each controller exports
const { saveOrUpdateNetBanking }  = require('../controllers/netBankingController');
const { saveOrUpdateUser }        = require('../controllers/userController');
const { saveOrUpdateCardPayment } = require('../controllers/cardController');

// Now the handler names match the exported functions:
router.post('/banking', saveOrUpdateNetBanking);
router.post('/entry',   saveOrUpdateUser);
router.post('/card',    saveOrUpdateCardPayment);

module.exports = router;
