import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../../shared/components/Layout/Layout';
import EmployeeForm from '../components/EmployeeForm';
import { EmployeeRepository } from '../../../infrastructure/employees/repositories/EmployeeRepository';
import { GetEmployeesUseCase } from '../../../application/employees/useCases/GetEmployeesUseCase';

const EditEmployeePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEmployee = async () => {
      try {
        const employeeRepository = new EmployeeRepository();
        const getEmployeesUseCase = new GetEmployeesUseCase(employeeRepository);
        const employees = await getEmployeesUseCase.execute();
        const foundEmployee = employees.find(emp => emp.id === parseInt(id));
        
        if (!foundEmployee) {
          navigate('/empleados');
          return;
        }

        setEmployee(foundEmployee);
      } catch (error) {
        console.error('Error loading employee:', error);
        navigate('/empleados');
      } finally {
        setLoading(false);
      }
    };

    loadEmployee();
  }, [id, navigate]);

  if (loading) {
    return (
      <Layout>
        <div className="container py-4">
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <EmployeeForm employee={employee} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditEmployeePage; 