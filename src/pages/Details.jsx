import { useParams } from 'react-router-dom';
import apiConfig from '../data/apiConfig';
import { useEffect, useState } from 'react';
import { TbPointFilled } from "react-icons/tb";
import { SiImdb } from "react-icons/si";
import { FaGlobe, FaImdb } from "react-icons/fa";
import Trailer from '../components/Trailer';
import Cast from '../components/Cast';

export default function Details() {
  let { id } = useParams();

  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const loadDetails = async () => {

      let movie = await apiConfig.getMovieForId(id);
      setMovieDetails(movie[0].info)
      console.log(movie)

    }
    loadDetails();
  }, [id])

  //console.log(movieDetails)

  // format duration to 0h 0m format
  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
  
    return `${hours}h ${remainingMinutes}m`;
  };

  const formatDate = (tmdbDate) => {
    const dateObject = new Date(tmdbDate);
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1; // Months are zero-based
    const year = dateObject.getFullYear();
  
    return `${day}/${month}/${year}`;
  };

  let releaseYear = new Date(movieDetails.release_date);

  let genres = [];
    for(let i in movieDetails.genres) {
      genres.push(movieDetails.genres[i].name);
    }


  //crew information
  let productionName = [];
  for(let i in movieDetails?.credits?.crew){
    productionName.push( movieDetails.credits.crew[i].name);
  }

  return (

    <div>
      <div>
        <div className=" flex items-end bg-gray-800 text-white h-[80vh]" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`, backgroundSize: 'cover'}}>
          <div className='w-full h-full flex flex-col justify-start md:flex-row items-start md:items-end p-10 gap-5 bg-m_black/80'>
            {/* <h2> Details about {movieDetails.title}</h2> */}
            <div className='w-[30%] md:w-[300px] h-auto'><img className=' block w-full h-full object-cover' src={`https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`} alt={movieDetails.title}/></div>
            <div className=' flex items-end gap-4 w-[80%] justify-between'>
              <div className=' w-[55%]'>
                <h1>{movieDetails.title}<span className=' font-thin'> ({releaseYear.getFullYear()})</span></h1>
                <p className=' flex items-center gap-1 text-sm mb-3'>{`${formatDate(movieDetails.release_date)}`} <TbPointFilled /> {genres.join(', ')} <TbPointFilled /> {` ${formatRuntime(movieDetails.runtime)}`}</p>
              
                {/* <div> popularity: {movieDetails.popularity}</div> */}
                <div className=' mt-3'>
                  <h3 className=' text-xl font-bold'>Overview</h3>
                  <p className=' text-md'>{movieDetails.overview}</p>
                </div>
               <div><Trailer videoKey={movieDetails?.videos?.results?.[0]?.key} /></div>
              </div>
              <div className=' rounded-md border-2 border-m_gold bg-m_black/80 p-6 flex flex-col gap-3 w-[25%]'>
                <div>
                  <h4 className=' text-base font-bold'>Status:</h4>
                  <p className=' text-sm'>{movieDetails.status}</p>
                </div>
                <div>
                  <h4 className=' text-base font-bold'>Original Language:</h4>
                  <p className=' text-sm'>{movieDetails.original_language}</p>
                </div>
                <div>
                  <h4 className=' text-base font-bold'>Budget:</h4>
                  <p className=' text-sm'>{movieDetails.budget}</p>
                </div>
                <div>
                  <h4 className=' text-base font-bold'>Revenue:</h4>
                  <p className=' text-sm'>100000000</p>
                </div>
                <div>
                  <h4 className=' text-base font-bold'>Useful Links:</h4>
                  <div className=' flex gap-2 mt-3'>
                    <a href={`https://www.imdb.com/title/${movieDetails.imdb_id}/`} target="_blank" rel="noopener noreferrer"><FaImdb size={35} /></a>
                    <a href={movieDetails.homepage} target="_blank" rel="noopener noreferrer"><FaGlobe size={35} /></a>
                  </div>
                </div>
                
              </div>
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
          <div>
            <p>Cast:</p>
            {
              movieDetails?.credits?.cast.map((actor)=>{
                return(
                  <Cast
                    key={actor.id}
                    name={actor.name} 
                    character={actor.character} 
                    image={actor.profile_path}/>
                )
              })
            }
          </div>
          <div> Production: 
          {
              movieDetails?.credits?.crew.map((crew)=>{
                return(
                  <Cast
                    key={crew.id}
                    name={crew.name} 
                    character={crew.character} 
                    image={crew.profile_path}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>

  );
}