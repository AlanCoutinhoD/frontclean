const ConfirmationModal = ({ show, onClose, onConfirm, title, message }) => {
  if (!show) return null;

  return (
    <>
      <div className="modal fade show" 
           style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} 
           tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" 
                      className="btn-close" 
                      onClick={onClose}
                      aria-label="Close">
              </button>
            </div>
            <div className="modal-body">
              <p>{message}</p>
            </div>
            <div className="modal-footer">
              <button type="button" 
                      className="btn btn-secondary" 
                      onClick={onClose}>
                Cancelar
              </button>
              <button type="button" 
                      className="btn btn-danger" 
                      onClick={onConfirm}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal; 