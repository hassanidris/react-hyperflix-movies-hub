import Details from "../pages/Details";
import Trailer from "./Trailer";

const HeroBanner = ({items}) => {

  console.log(items)

  return(
    <div className="bg-slate-900 text-white">
      <div>
        <h2>{items.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w200${items.poster_path}`} alt={items.title}/>
        <p>{items.overview}</p>
        <div>{/* release data, genre, vote_average*/}
        </div>
        <div>
          <Trailer/><Details/>
        </div>
      </div>
      
      <img src={`https://image.tmdb.org/t/p/w500${items.backdrop_path}`} alt={items.title}/>
    </div>
  )
}

export default HeroBanner;