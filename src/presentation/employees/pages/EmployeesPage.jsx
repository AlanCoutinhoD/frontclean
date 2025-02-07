import { useState, useEffect } from 'react';
import Layout from '../../shared/components/Layout/Layout';
import EmployeeTable from '../components/EmployeeTable';
import AddEmployeeButton from '../components/AddEmployeeButton';
import { EmployeeRepository } from '../../../infrastructure/employees/repositories/EmployeeRepository';
import { GetEmployeesUseCase } from '../../../application/employees/useCases/GetEmployeesUseCase';

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const employeeRepository = new EmployeeRepository();
        const getEmployeesUseCase = new GetEmployeesUseCase(employeeRepository);
        const employeesData = await getEmployeesUseCase.execute();
        setEmployees(employeesData);
      } catch (err) {
        setError('Error al cargar los empleados');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, []);

  const handleAddEmployee = () => {
    console.log('Agregar empleado');
  };

  const handleEditEmployee = (employee) => {
    console.log('Editar empleado:', employee);
  };

  const handleDeleteEmployee = (id) => {
    console.log('Eliminar empleado:', id);
  };

  if (loading) {
    return (
      <Layout>
        <div className="container-fluid py-4">
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="container-fluid py-4">
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-fluid py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h4 mb-0">Empleados</h1>
          <AddEmployeeButton onClick={handleAddEmployee} />
        </div>
        <EmployeeTable
          employees={employees}
          onEdit={handleEditEmployee}
          onDelete={handleDeleteEmployee}
        />
      </div>
    </Layout>
  );
};

export default EmployeesPage;