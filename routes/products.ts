import productController from '../controllers/productController';
import express from 'express';
import authenticate from '../middleware/authenticate';
const router = express.Router();

router.use(authenticate);

router.get('/products', productController.getProducts);

router.get('/products/:id', productController.getProduct);

export default router;
