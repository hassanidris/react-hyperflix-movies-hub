import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Modal from 'react-modal';

const Trailer = ({videoKey}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return videoKey ? (
    <div>
      <button className="btn-outline flex justify-center items-center gap-1" onClick={openModal}><FaPlay /> See trailer</button>
      <Modal 
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          },
          content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
          }
        }}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Trailer" 
        shouldCloseOnEsc={true}
      >
        <div>
          <div>
            <iframe allow="autoplay" className=" w-full h-[370px]" src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}></iframe>
          </div>
        </div>
      </Modal>
    </div>
  ): null
}

export default Trailer;