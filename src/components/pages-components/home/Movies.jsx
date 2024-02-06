
import { useState, useContext } from 'react';
import { MovieContext } from '../../../context/MovieContextProvider';
import { useNavigate } from "react-router-dom";
import BtnDetails from "../../ui-components/BtnDetails";
//import {FaHeart, FaRegHeart } from 'react-icons/fa';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import Loading from '../../ui-components/Loading';

const Movies = ({title, items}) => {
  const {slideLeft, slideRight} = useContext(MovieContext); 
  //const [like, setLike] = useState(false);
  const [sliderId] = useState(`slider-${Math.random().toString(36).substring(7)}`);

  const navigate = useNavigate();

  const navigateToMovie = (movieId) => {
    navigate(`/movie/${movieId}`)
  }


  // const slideLeft = () => {
  //   let slider = document.getElementById(sliderId);
  //   slider.scrollLeft = Math.max(slider.scrollLeft - 500);
  // }

  // const slideRight = () => {
  //   let slider = document.getElementById(sliderId);
  //   slider.scrollLeft = Math.max(slider.scrollLeft + 500);
  // }

  return items ? 
  (

    <div className=' px-8'>
      <h2 className="p-4 mt-10">{title}</h2>
      <div className=" relative flex items-center group">
        <IoIosArrowDropleftCircle onClick={() => { slideLeft(sliderId)}} className=' absolute left-0 text-m_white opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
        <div id={sliderId} className=' w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {items.results.length > 0 && items.results.map((item, key)=>(
            <div className=" w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 shadow-lg" key={key}>
              <img className=" w-full h-auto block" src={`https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`} alt={item.original_title}/>
              <div className=" absolute top-0 left-0 w-full h-full hover:bg-m_black/80 opacity-0 hover:opacity-100 text-m_white">
              <div className='flex flex-col justify-center items-center gap-2 h-full text-center'>
                <p className=" text-m_white whitespace-normal font-open_sans text-xs md:text-sm font-bold ">{item.title || item.name}</p>
                <BtnDetails onClick={() => {navigateToMovie(item.id)}} />
              </div>
              {/* <p>
                {like ? <FaHeart className=' absolute top-4 left-4 text-m_white' /> : <FaRegHeart className=' absolute top-4 left-4 text-m_white' onClick={()=>setLike(!like)}/>}
              </p> */}
              </div>
            </div>
          ))}
        </div>
        <IoIosArrowDroprightCircle onClick={() => { slideRight(sliderId)}} className=' absolute right-0 text-m_white opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />

      </div>
    </div>
  ) : (<Loading/>)
}

export default Movies;