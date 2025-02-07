import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../shared/components/Layout/Layout';
import EmployeeTable from '../components/EmployeeTable';
import AddEmployeeButton from '../components/AddEmployeeButton';
import Toast from '../../shared/components/Toast/Toast';
import ConfirmationModal from '../../shared/components/Modal/ConfirmationModal';
import { EmployeeRepository } from '../../../infrastructure/employees/repositories/EmployeeRepository';
import { GetEmployeesUseCase } from '../../../application/employees/useCases/GetEmployeesUseCase';
import { DeleteEmployeeUseCase } from '../../../application/employees/useCases/DeleteEmployeeUseCase';

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [modal, setModal] = useState({ show: false, employeeId: null });
  const navigate = useNavigate();

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

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleDeleteClick = (id) => {
    setModal({ show: true, employeeId: id });
  };

  const handleDeleteConfirm = async () => {
    try {
      const employeeRepository = new EmployeeRepository();
      const deleteEmployeeUseCase = new DeleteEmployeeUseCase(employeeRepository);
      await deleteEmployeeUseCase.execute(modal.employeeId);
      
      setToast({
        show: true,
        message: 'Empleado eliminado exitosamente',
        type: 'success'
      });
      
      // Recargar la lista de empleados
      await loadEmployees();
    } catch (error) {
      setToast({
        show: true,
        message: 'Error al eliminar el empleado',
        type: 'error'
      });
    } finally {
      setModal({ show: false, employeeId: null });
    }
  };

  const closeToast = () => {
    setToast({ ...toast, show: false });
  };

  const closeModal = () => {
    setModal({ show: false, employeeId: null });
  };

  const handleEditClick = (employee) => {
    navigate(`/empleados/editar/${employee.id}`);
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
          <Toast 
            show={true}
            message={error}
            type="error"
            onClose={() => setError(null)}
          />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Toast 
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={closeToast}
      />
      
      <ConfirmationModal
        show={modal.show}
        onClose={closeModal}
        onConfirm={handleDeleteConfirm}
        title="Confirmar Eliminación"
        message="¿Está seguro que desea eliminar este empleado?"
      />

      <div className="container-fluid py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h4 mb-0">Empleados</h1>
          <AddEmployeeButton />
        </div>
        <EmployeeTable
          employees={employees}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
        />
      </div>
    </Layout>
  );
};

export default EmployeesPage;