import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmployeeRepository } from '../../../infrastructure/employees/repositories/EmployeeRepository';
import { CreateEmployeeUseCase } from '../../../application/employees/useCases/CreateEmployeeUseCase';
import { UpdateEmployeeUseCase } from '../../../application/employees/useCases/UpdateEmployeeUseCase';
import Toast from '../../shared/components/Toast/Toast';

const EmployeeForm = ({ employee = null }) => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const navigate = useNavigate();
  const isEditing = !!employee;

  useEffect(() => {
    if (employee) {
      setName(employee.nombre);
    }
  }, [employee]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const employeeRepository = new EmployeeRepository();

      if (isEditing) {
        const updateEmployeeUseCase = new UpdateEmployeeUseCase(employeeRepository);
        await updateEmployeeUseCase.execute(employee.id, name);
        setToast({
          show: true,
          message: '¡Empleado actualizado exitosamente!',
          type: 'success'
        });
      } else {
        const createEmployeeUseCase = new CreateEmployeeUseCase(employeeRepository);
        await createEmployeeUseCase.execute(name);
        setToast({
          show: true,
          message: '¡Empleado creado exitosamente!',
          type: 'success'
        });
      }

      setTimeout(() => {
        navigate('/empleados');
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
      setToast({
        show: true,
        message: `Error al ${isEditing ? 'actualizar' : 'crear'} el empleado`,
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const closeToast = () => {
    setToast({ ...toast, show: false });
  };

  return (
    <>
      <Toast 
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={closeToast}
      />
      
      <div className="card shadow-sm">
        <div className="card-body p-4">
          <h2 className="text-center mb-4">
            {isEditing ? 'Editar Empleado' : 'Añadir Nuevo Empleado'}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Ingrese el nombre del empleado"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-dark w-100"
              disabled={loading}
            >
              {loading ? (
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              ) : null}
              {isEditing ? 'Actualizar' : 'Añadir'} Empleado
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmployeeForm; 