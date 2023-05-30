import axios from 'axios';

const productModels = {
  getProducts: async () => {
    try {
      const allProducts = await axios
        .get('https://fakestoreapi.com/products')
        .then((response) => response.data);

      return allProducts;
    } catch (error) {
      console.log({ error: error as Error });
    }
  },

  getProduct: async (id: string) => {
    try {
      const product = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.data);

      return product;
    } catch (error) {
      console.log({ error: error as Error });
    }
  },
};

export default productModels;
