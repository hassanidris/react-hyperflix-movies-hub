import Details from "../pages/Details";
import Trailer from "./Trailer";

const HeroBanner = ({itemBanner}) => {

 
  let releaseYear = new Date(itemBanner.release_date);

  let genres = [];
    for(let i in itemBanner.genres) {
        genres.push( itemBanner.genres[i].name );
    }

  console.log(itemBanner)
  // flex items-end bg-gray-800 text-white h-[90vh] pt-20
  return(
    <div className="w-full h-[90vh] text-white font-open_sans" >
      <div className=" h-full w-full flex items-end" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${itemBanner.backdrop_path || itemBanner.poster_path})`, backgroundSize: 'cover'}}>
        <div className=" flex items-end p-10 gap-5">
          <div className=" w-80">
            <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/w200${itemBanner.poster_path}`} alt={itemBanner.title}/>
          </div>
          <div className=" text-m_white font-open_sans font-medium">
            <div>
              <h2 className=" text-m_white font-amaranth text-5xl">{itemBanner.title}</h2>
              <p className=" font-open_sans text-m_white italic text-sm mb-3">
                <span>{releaseYear.getFullYear()}</span> .
                <span> {genres.join(', ')}</span>
              </p>
              <p className=" w-1/2">{itemBanner.overview}</p>
            </div>
            <div>
              <Trailer/><Details/>
            </div>
          </div>
        </div>
      </div>
      
      {/* <img src={`https://image.tmdb.org/t/p/original${itemBanner.backdrop_path}`} alt={itemBanner.title}/> */}
    </div>
  )
}

export default HeroBanner;

/*
    <div className='w-full h-[600px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
        <img
          className='w-full h-full object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
            <div className='my-4'>
              <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
                Play
              </button>
              <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
                Watch Later
              </button>
            </div>
            <p className='text-gray-400 text-sm'>
              Released: {movie?.release_date}
            </p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
              {truncateString(movie?.overview, 150)}
            </p>
        </div>
      </div>
    </div>

*/