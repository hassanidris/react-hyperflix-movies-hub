const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null; // Don't render anything if the modal is closed
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Modal Title</h2>
        <p> Modal content goes here...</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;