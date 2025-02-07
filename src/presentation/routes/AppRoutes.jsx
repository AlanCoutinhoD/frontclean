import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeesPage from '../employees/pages/EmployeesPage';
import AddEmployeePage from '../employees/pages/AddEmployeePage';
import EditEmployeePage from '../employees/pages/EditEmployeePage';
import ProductsPage from '../products/pages/ProductsPage';
import AddProductPage from '../products/pages/AddProductPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeesPage />} />
        <Route path="/empleados" element={<EmployeesPage />} />
        <Route path="/empleados/nuevo" element={<AddEmployeePage />} />
        <Route path="/empleados/editar/:id" element={<EditEmployeePage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/productos/nuevo" element={<AddProductPage />} />
        {/* Aquí irán las demás rutas */}
      </Routes>
    </Router>
  );
};

export default AppRoutes; 