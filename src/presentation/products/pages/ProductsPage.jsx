import { useState, useEffect } from 'react';
import Layout from '../../shared/components/Layout/Layout';
import ProductTable from '../components/ProductTable';
import AddProductButton from '../components/AddProductButton';
import { ProductRepository } from '../../../infrastructure/products/repositories/ProductRepository';
import { GetProductsUseCase } from '../../../application/products/useCases/GetProductsUseCase';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productRepository = new ProductRepository();
        const getProductsUseCase = new GetProductsUseCase(productRepository);
        const productsData = await getProductsUseCase.execute();
        setProducts(productsData);
      } catch (err) {
        setError('Error al cargar los productos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleAddProduct = () => {
    console.log('Agregar producto');
  };

  const handleEditProduct = (product) => {
    console.log('Editar producto:', product);
  };

  const handleDeleteProduct = (id) => {
    console.log('Eliminar producto:', id);
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
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-fluid py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h4 mb-0">Productos</h1>
          <AddProductButton onClick={handleAddProduct} />
        </div>
        <ProductTable
          products={products}
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
        />
      </div>
    </Layout>
  );
};

export default ProductsPage; 