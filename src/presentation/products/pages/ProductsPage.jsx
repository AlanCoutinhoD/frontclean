import { useState } from 'react';
import Layout from '../../shared/components/Layout/Layout';
import ProductTable from '../components/ProductTable';
import AddProductButton from '../components/AddProductButton';

const ProductsPage = () => {
  const [products] = useState([
    { id: 1, nombre: 'Producto A', precio: '19.99' },
    { id: 2, nombre: 'Producto B', precio: '29.99' },
    { id: 3, nombre: 'Producto C', precio: '39.99' },
  ]);

  const handleAddProduct = () => {
    console.log('Agregar producto');
  };

  const handleEditProduct = (product) => {
    console.log('Editar producto:', product);
  };

  const handleDeleteProduct = (id) => {
    console.log('Eliminar producto:', id);
  };

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