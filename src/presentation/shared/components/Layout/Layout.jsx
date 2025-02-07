import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <div className="min-vh-100 bg-white">
      <Navigation />
      <main className="container-fluid px-4">
        {children}
      </main>
    </div>
  );
};

export default Layout; 