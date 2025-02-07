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

  async createProduct(name, price) {
    try {
      const response = await axiosInstance.post('/products', { 
        name, 
        price: Number(price) 
      });
      return response.data;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  }
} 