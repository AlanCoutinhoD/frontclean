import { useNavigate } from 'react-router-dom';

const AddEmployeeButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/empleados/nuevo')}
      className="btn btn-dark d-flex align-items-center gap-2"
    >
      <span>+</span>
      <span>Agregar Empleado</span>
    </button>
  );
};

export default AddEmployeeButton; 