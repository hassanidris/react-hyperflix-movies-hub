import Details from "../pages/Details";
import Trailer from "./Trailer";

const HeroBanner = ({itemBanner}) => {

  let releaseYear = new Date(itemBanner.release_date);

  let genres = [];
    for(let i in itemBanner.genres) {
        genres.push( itemBanner.genres[i].name );
    }

  console.log(itemBanner)

  return(
    <div className="bg-gray-800 text-white">
      <div>
        <h2>{itemBanner.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w200${itemBanner.poster_path}`} alt={itemBanner.title}/>
        <p>{itemBanner.overview}</p>
        <div>
        <div> Release: {releaseYear.getFullYear()}</div>
        <div> Genres: {genres.join(', ')}</div>
        </div>
        <div>
          <Trailer/><Details/>
        </div>
      </div>
      
      <img src={`https://image.tmdb.org/t/p/original${itemBanner.backdrop_path}`} alt={itemBanner.title}/>
    </div>
  )
}

export default HeroBanner;