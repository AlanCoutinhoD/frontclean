import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="nav nav-pills mt-3 ms-3">
      <Link 
        to="/empleados" 
        className={`nav-link ${location.pathname === '/empleados' ? 'active' : 'text-dark'}`}
      >
        Empleados
      </Link>
      <Link 
        to="/productos" 
        className={`nav-link ${location.pathname === '/productos' ? 'active' : 'text-dark'}`}
      >
        Productos
      </Link>
    </nav>
  );
};

export default Navigation; 