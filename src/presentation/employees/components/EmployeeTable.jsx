const EmployeeTable = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th className="text-muted" style={{ fontWeight: '500' }}>ID</th>
            <th className="text-muted" style={{ fontWeight: '500' }}>Nombre</th>
            <th className="text-muted" style={{ fontWeight: '500' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.nombre}</td>
              <td>
                <div className="d-flex gap-3">
                  <button
                    onClick={() => onEdit(employee)}
                    className="btn btn-link p-0 text-dark"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => onDelete(employee.id)}
                    className="btn btn-link p-0 text-dark"
                  >
                    🗑️
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable; 