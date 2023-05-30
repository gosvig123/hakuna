import productController from '../controllers/productController';
import express from 'express';

const router = express.Router();

router.get('/products', productController.getProducts);

router.get('/products/:id', productController.getProduct);

export default router;
