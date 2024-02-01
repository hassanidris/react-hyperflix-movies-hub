import { useParams } from 'react-router-dom';
import apiConfig from '../data/apiConfig';
import { useEffect, useState } from 'react';

export default function Details() {
  let { id } = useParams();

  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const loadDetails = async () => {

      let movie = await apiConfig.getMovieForId(id);
      setMovieDetails(movie[0].info)

    }
    loadDetails();
  }, [id])

  //console.log(movieDetails)

  return (
    <div>
      {movieDetails.title}
    </div>
  );
}