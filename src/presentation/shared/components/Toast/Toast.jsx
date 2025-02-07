import { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose, show }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Cierra automáticamente después de 3 segundos

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const bgClass = type === 'success' ? 'bg-success' : 'bg-danger';

  return (
    <div className="toast-container position-fixed top-0 end-0 p-3" style={{ zIndex: 1500 }}>
      <div 
        className={`toast show ${bgClass} text-white`}
        role="alert" 
        aria-live="assertive" 
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">
            {message}
          </div>
          <button 
            type="button" 
            className="btn-close btn-close-white me-2 m-auto" 
            onClick={onClose}
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Toast; 