import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const observerRefValue = modalRef.current;
    disableBodyScroll(observerRefValue);
    return () => {
      if (observerRefValue) {
        enableBodyScroll(observerRefValue);
      }
    };
  }, [id]);

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
      <div>
        <div ref={modalRef} className="modal-wrapper" onClick={() => navigate('/')}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          CONTENT
        </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;