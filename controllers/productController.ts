import { Request, Response, NextFunction } from 'express';
import productModels from '../models/productModels';
const productController = {
  getProducts: async (_: Request, res: Response): Promise<void> => {
    try {
      const allProducts = await productModels.getProducts();
      if (!allProducts.length) {
        res.status(404).send('No products found');
        return;
      }
      res.send(allProducts);
    } catch (error) {
      console.error({ error: error as Error });
      res
        .status(500)
        .send('An error occurred while fetching products');
    }
  },

  getProduct: async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      if (!id || typeof id !== 'string') {
        res.status(400).send('Invalid product id');
        return;
      }
      const product = await productModels.getProduct(id);
      if (!product) {
        res.status(404).send('Product not found');
        return;
      }
      res.send(product);
    } catch (error) {
      console.error({ error: error as Error });
      res
        .status(500)
        .send('An error occurred while fetching the product');
    }
  },
};

export default productController;
