import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductRepository } from '../../../infrastructure/products/repositories/ProductRepository';
import { CreateProductUseCase } from '../../../application/products/useCases/CreateProductUseCase';
import Toast from '../../shared/components/Toast/Toast';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: ''
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const productRepository = new ProductRepository();
      const createProductUseCase = new CreateProductUseCase(productRepository);
      await createProductUseCase.execute(formData.name, formData.price);
      
      setToast({
        show: true,
        message: '¡Producto creado exitosamente!',
        type: 'success'
      });

      setTimeout(() => {
        navigate('/productos');
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
      setToast({
        show: true,
        message: 'Error al crear el producto',
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
          <h2 className="text-center mb-4">Añadir Nuevo Producto</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Ingrese el nombre del producto"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Precio</label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                placeholder="Ingrese el precio del producto"
                value={formData.price}
                onChange={handleChange}
                step="0.01"
                min="0"
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
              Añadir Producto
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProductForm; 