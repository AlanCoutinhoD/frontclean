const AddEmployeeButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn btn-dark d-flex align-items-center gap-2"
    >
      <span>+</span>
      <span>Agregar Empleado</span>
    </button>
  );
};

export default AddEmployeeButton; 