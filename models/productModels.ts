import axios from 'axios';

const productModels = {
  getProducts: async () => {
    const allProducts = await axios.get(
      'https://fakestoreapi.com/products'
    );
    return allProducts.data;
  },

  getProduct: async (id: string) => {
    const product = await axios.get(
      `https://fakestoreapi.com/products/${id}`
    );

    return product.data;
  },
};

export default productModels;
