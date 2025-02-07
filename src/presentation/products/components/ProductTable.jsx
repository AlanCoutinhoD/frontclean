import { motion } from 'framer-motion';

const ProductTable = ({ products, onEdit, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th className="text-muted" style={{ fontWeight: '500' }}>ID</th>
            <th className="text-muted" style={{ fontWeight: '500' }}>Nombre</th>
            <th className="text-muted" style={{ fontWeight: '500' }}>Precio</th>
            <th className="text-muted" style={{ fontWeight: '500' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nombre}</td>
              <td>${product.precio.toFixed(2)}</td>
              <td>
                <div className="d-flex gap-3">
                  <button
                    onClick={() => onEdit(product)}
                    className="btn btn-link p-0 text-dark"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => onDelete(product.id)}
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

export default ProductTable; 