import { useNavigate } from 'react-router-dom';

const AddProductButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/productos/nuevo')}
      className="btn btn-dark d-flex align-items-center gap-2"
    >
      <span>+</span>
      <span>Agregar Producto</span>
    </button>
  );
};

export default AddProductButton; 