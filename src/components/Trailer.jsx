import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import apiConfig from '../data/apiConfig';
import Modal from './Modal';

const Trailer = () => {
  let { id } = useParams();

  const [ movieTrailer, setMovieTrailer] = useState({
    results: []
  });

  useEffect(() => {
    const loadTrailer = async () => {
      let trailer = await apiConfig.getTrailerForId(id);
      setMovieTrailer(trailer[0].info)
      console.log(trailer)
    }
    loadTrailer();
  }, [id])

  console.log(movieTrailer)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div style={{color: 'red', marginTop:200 }}>
      {
        movieTrailer.results.map((trailers)=>{
          return(
            <div key={trailers.id}>
              <p>{trailers.name}</p>
              <iframe 
                src={`https://www.youtube.com/embed/${trailers.key}`}>
              </iframe>
            </div> 
          )
        })
      }
      <div>
        <button onClick={handleOpenModal}>Open Modal</button>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  );
}

export default Trailer;