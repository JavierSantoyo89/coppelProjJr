const express = require('express');
const req = require('express/lib/request');

const mainController = require('../controllers/productsController');
const APIController = require('../controllers/API/apiProductos')
const router = express.Router();

// ************ Controller API ************//
const productsAPI = require('../controllers/API/apiProductos');

// ************ Rutas dedicadas para navegacion general ******** //
// ************ Rutas dedicadas para navegacion general ******** //
router.get('/products',mainController.products);
router.get('/products/api',APIController.Clases)
module.exports = router;