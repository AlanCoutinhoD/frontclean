import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeesPage from '../employees/pages/EmployeesPage';
import ProductsPage from '../products/pages/ProductsPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeesPage />} />
        <Route path="/empleados" element={<EmployeesPage />} />
        <Route path="/productos" element={<ProductsPage />} />
        {/* Aquí irán las demás rutas */}
      </Routes>
    </Router>
  );
};

export default AppRoutes; 