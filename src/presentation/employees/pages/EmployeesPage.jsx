import { useState } from 'react';
import Layout from '../../shared/components/Layout/Layout';
import EmployeeTable from '../components/EmployeeTable';
import AddEmployeeButton from '../components/AddEmployeeButton';

const EmployeesPage = () => {
  const [employees] = useState([
    { id: 1, nombre: 'Juan Pérez' },
    { id: 2, nombre: 'María García' },
    { id: 3, nombre: 'Carlos Rodríguez' },
  ]);

  const handleAddEmployee = () => {
    console.log('Agregar empleado');
  };

  const handleEditEmployee = (employee) => {
    console.log('Editar empleado:', employee);
  };

  const handleDeleteEmployee = (id) => {
    console.log('Eliminar empleado:', id);
  };

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