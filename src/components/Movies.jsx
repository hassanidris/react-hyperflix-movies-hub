import { useNavigate } from "react-router-dom";
import BtnDetails from "./BtnDetails";

const Movies = ({title, items}) => {
  console.log(items)
  const navigate = useNavigate();

  const navigateToMovie = (movieId) => {
    navigate(`/movie/${movieId}`)
  }

  return(
    <div>
      <h2>{title}</h2>
      <div>
        {items.results.length > 0 && items.results.map((item, key)=>(
          <div key={key}>
            <p>{item.title || item.name}</p>
            <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.original_title}/>

            <BtnDetails onClick={() => navigateToMovie(item.id)} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Movies;