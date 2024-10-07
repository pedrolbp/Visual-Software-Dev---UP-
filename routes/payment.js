// ./routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../models');

const PaymentService = require('../services/paymentService');
const PaymentController = require('../controllers/paymentController');

const paymentService = new PaymentService(db.Payment);
const paymentController = new PaymentController(paymentService);

router.post('/creditcard', (req, res) => paymentController.pay(req, res, 'CARTAO_DE_CREDITO'));
router.post('/pix', (req, res) => paymentController.pay(req, res, 'PIX'));
router.get('/status/:transactionId', (req, res) => paymentController.status(req, res));

module.exports = router;
