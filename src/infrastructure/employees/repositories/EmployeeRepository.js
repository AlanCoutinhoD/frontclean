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

  async createEmployee(name) {
    try {
      const response = await axiosInstance.post('/employees', { name });
      return response.data;
    } catch (error) {
      console.error('Error creating employee:', error);
      throw error;
    }
  }

  async deleteEmployee(id) {
    try {
      await axiosInstance.delete(`/employees/${id}`);
      return true;
    } catch (error) {
      console.error('Error deleting employee:', error);
      throw error;
    }
  }

  async updateEmployee(id, name) {
    try {
      const response = await axiosInstance.put(`/employees/${id}`, { name });
      return response.data;
    } catch (error) {
      console.error('Error updating employee:', error);
      throw error;
    }
  }
} 