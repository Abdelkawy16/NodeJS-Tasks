const express = require('express');
const pool = require('../../db');
const router = express.Router();
const productController = require('../controllers/product-controller')(pool);


router.post('/', productController.createProduct);
router.get('', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;