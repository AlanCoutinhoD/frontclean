import axiosInstance from '../../config/axios';

export class ProductRepository {
  async getAllProducts() {
    try {
      const response = await axiosInstance.get('/products');
      return response.data.map(product => ({
        id: product.ID,
        nombre: product.Name,
        precio: product.Price
      }));
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
} 