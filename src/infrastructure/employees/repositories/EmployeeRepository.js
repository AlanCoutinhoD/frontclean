import axiosInstance from '../../config/axios';

export class EmployeeRepository {
  async getAllEmployees() {
    try {
      const response = await axiosInstance.get('/employees');
      return response.data.map(employee => ({
        id: employee.id,
        nombre: employee.name || 'Sin nombre' // Manejo de nombres vacíos
      }));
    } catch (error) {
      console.error('Error fetching employees:', error);
      throw error;
    }
  }
} 