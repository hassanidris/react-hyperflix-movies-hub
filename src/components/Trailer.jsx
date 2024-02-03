import { useState } from "react";
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
      <button onClick={openModal}>See trailer</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Trailer"
      >
        <div style={{color: 'red', marginTop: 200 }}>
          <div>
            <iframe src={`https://www.youtube.com/embed/${videoKey}`}></iframe>
          </div>
        </div>
       
      </Modal>
    </div>
  ): null
}

export default Trailer;