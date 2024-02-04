import { useParams } from 'react-router-dom';
import apiConfig from '../data/apiConfig';
import { useEffect, useState } from 'react';
import { TbPointFilled } from "react-icons/tb";
import { FaGlobe, FaImdb } from "react-icons/fa";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import Trailer from '../components/Trailer';
import Cast from '../components/Cast';

export default function Details() {
  let { id } = useParams();

  const [movieDetails, setMovieDetails] = useState({});
  const [sliderId] = useState(`slider-${Math.random().toString(36).substring(7)}`);

  const slideLeft = () => {
    let slider = document.getElementById(sliderId);
    slider.scrollLeft = Math.max(slider.scrollLeft - 500);
  }

  const slideRight = () => {
    let slider = document.getElementById(sliderId);
    slider.scrollLeft = Math.max(slider.scrollLeft + 500);
  }

  useEffect(() => {
    const loadDetails = async () => {

      let movie = await apiConfig.getMovieForId(id);
      setMovieDetails(movie)
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

  const formatMoney = (amount) => {
    return amount.toLocaleString('en-US');
  };

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
          <div className='w-full h-full flex flex-col justify-start md:flex-row items-start md:items-end p-5 sm:p-10 gap-5 bg-m_black/80'>
            <div className='w-[30%] md:w-[300px] h-auto'><img className=' block w-full h-full object-cover' src={`https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`} alt={movieDetails.title}/></div>
            <div className=' flex flex-col sm:flex-row items-end gap-4 w-full sm:w-[80%] justify-between'>
              <div className='w-full sm:w-[55%]'>
                <h1 className=''>{movieDetails.title}<span className=' font-thin'> ({releaseYear.getFullYear()})</span></h1>
                <p className=' flex items-center gap-1 text-sm mb-3'>{`${formatDate(movieDetails.release_date)}`} <TbPointFilled /> {genres.join(', ')} <TbPointFilled /> {` ${formatRuntime(movieDetails.runtime)}`}</p>
              
                {/* <div> popularity: {movieDetails.popularity}</div> */}
                <div className=' my-4'>
                  <h3 className=' text-xl font-bold'>Overview</h3>
                  <p className=' text-sm sm:text-md'>{movieDetails.overview}</p>
                  <div>
                    <p>{movieDetails?.credits?.crew.some(crewMember => crewMember.known_for_department === 'Writing') ? `Written by ${productionName.join(', ')}` : 'Hi'}</p>
                  </div>
                </div>
               <div><Trailer videoKey={movieDetails?.videos?.results?.[0]?.key} /></div>
              </div>
              <div className=' rounded-md border-[1px] border-m_gold bg-m_black/80 p-3 sm:p-6 flex flex-row sm:flex-col justify-between gap-3 w-full sm:w-[25%]'>
                <div>
                  <div>
                    <h4 className='text-sm sm:text-base font-bold'>Status:</h4>
                    <p className=' text-sm mb-2 sm:mb-0'>{movieDetails.status}</p>
                  </div>
                  <div>
                    <h4 className='text-sm sm:text-base font-bold'>Original Language:</h4>
                    <p className=' text-sm'>{movieDetails.original_language}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <h4 className='text-sm sm:text-base font-bold'>Budget:</h4>
                    <p className=' text-sm mb-2 sm:mb-0'>{movieDetails.budget}</p>
                  </div>
                  <div>
                    <h4 className='text-sm sm:text-base font-bold'>Revenue:</h4>
                    <p className=' text-sm'>{movieDetails.revenue}</p>
                  </div>
                </div>
                <div>
                  <h4 className='text-sm sm:text-base font-bold'>Useful Links:</h4>
                  <div className=' flex gap-4 mt-3'>
                    <a href={`https://www.imdb.com/title/${movieDetails.imdb_id}/`} target="_blank" rel="noopener noreferrer"><FaImdb size={35} /></a>
                    <a href={movieDetails.homepage} target="_blank" rel="noopener noreferrer"><FaGlobe size={35} /></a>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className=' p-8'>
            <h2 className=' mb-2'>Cast:</h2>
            <div className=" relative flex items-center group">
        <IoIosArrowDropleftCircle onClick={slideLeft} className=' absolute left-0 text-m_white opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
        <div id={sliderId} className=' w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative mx-10'>
            {movieDetails?.credits?.cast.map((actor) => {
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
            <IoIosArrowDroprightCircle onClick={slideRight} className=' absolute right-0 text-m_white opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />

      </div>
          </div>
          <div> 
            <p>Production: </p>
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