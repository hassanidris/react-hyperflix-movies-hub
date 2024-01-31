import Details from "../pages/Details";
import Trailer from "./Trailer";

const HeroBanner = ({itemBanner}) => {

  const originalImg = 'https://image.tmdb.org/t/p/original';
  let releaseYear = new Date(itemBanner.release_date);

  let genres = [];
    for(let i in itemBanner.genres) {
        genres.push( itemBanner.genres[i].name );
    }

  console.log(itemBanner)

  return(
    <div className=" flex items-end bg-gray-800 text-white h-[80vh] pt-20" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${itemBanner.backdrop_path})`, backgroundSize: 'cover'}}>
      <div>
        <img src={`https://image.tmdb.org/t/p/w200${itemBanner.poster_path}`} alt={itemBanner.title}/>
        <div>
        <h2>{itemBanner.title}</h2>
          <div> Release: {releaseYear.getFullYear()}</div>
          <div> Genres: {genres.join(', ')}</div>
        <p>{itemBanner.overview}</p>
        </div>
        <div>
          <Trailer/><Details/>
        </div>
      </div>
      
      {/* <img src={`https://image.tmdb.org/t/p/original${itemBanner.backdrop_path}`} alt={itemBanner.title}/> */}
    </div>
  )
}

export default HeroBanner;