import { useParams } from 'react-router-dom';
import apiConfig from '../data/apiConfig';
import { useEffect, useState } from 'react';
import Trailer from '../components/Trailer';


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

  console.log(movieDetails)

  let releaseYear = new Date(movieDetails.release_date);

  let genres = [];
    for(let i in movieDetails.genres) {
      genres.push(movieDetails.genres[i].name);
    }

  let cast = [];
    for(let i in movieDetails?.credits?.cast){
      cast.push( movieDetails.credits.cast[i].name);
    }

  return (
    <div>
      <div>
        <div className=" flex items-end bg-gray-800 text-white h-[80vh] pt-20" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`, backgroundSize: 'cover'}}>
          <div>
            <h2> Details about {movieDetails.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`} alt={movieDetails.title}/>
            <div>
              <h3>{movieDetails.title}</h3>
              <div> Release: {releaseYear.getFullYear()}</div> 
              <div> Status: {movieDetails.status}</div>
              <div> Genres: {genres.join(', ')}</div>
              <div> popularity: {movieDetails.popularity}</div>
              <p>{movieDetails.overview}</p>
            </div>
            <div>
              <Trailer/>
            </div>
          </div>
        </div>
        <div>
          <a href={`https://www.imdb.com/title/${movieDetails.imdb_id}/`} target={`_blank`}>Access IMDB</a>
          <div> home Page: {movieDetails.homepage}</div>
          <div> Original Language: {movieDetails.original_language}</div>
          <div> Budget: {movieDetails.budget}</div>
          <div> Revenue: {movieDetails.revenue}</div>
        </div>
        <div>
        <div> Genres: {cast.join(', ')}</div>
        <div> popularity: {movieDetails.popularity}</div>
        <div> popularity: {movieDetails.popularity}</div>
        <div> popularity: {movieDetails.popularity}</div>
        <div> popularity: {movieDetails.popularity}</div>
        <div> popularity: {movieDetails.popularity}</div>
        <div> popularity: {movieDetails.popularity}</div>
        <div> popularity: {movieDetails.popularity}</div>
        {/*cast*/}
          {/*image*/}
          {/*name*/}
          {/*Character*/}
        {/*Production*/}
          {/*Director*/}
            {/*image*/}
            {/*name*/}
            {/*Character*/}
          {/*"Writing*/}
            {/*image*/}
            {/*name*/}
            {/*Character*/}


        </div>
      </div>
    </div>
  );
}