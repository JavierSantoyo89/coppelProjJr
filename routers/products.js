const express = require('express');
const req = require('express/lib/request');

const mainController = require('../controllers/productsController');

const router = express.Router();

// ---- Rutas dedicadas para navegacion general ---- //
router.get('/',mainController.products);

module.exports = router;