import { motion } from 'framer-motion';

const AddProductButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn btn-dark d-flex align-items-center gap-2"
    >
      <span>+</span>
      <span>Agregar Producto</span>
    </button>
  );
};

export default AddProductButton; 