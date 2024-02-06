import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiConfig from '../data/apiConfig';
import BtnDetails from '../components/reusable-components/BtnDetails';


const SearchResults = () => {
  const navigate = useNavigate();

  const navigateToMovie = (movieId) => {
    navigate(`/movie/${movieId}`)
  }
  const { query } = useParams();
  const [resultsQuery, setResultsQuery] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        let data = await apiConfig.getSearchMovie(query);
        setResultsQuery(data.results)
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSearchResults();
  }, [query]);
    return (
      <div>
        <h2>Search Results</h2>
        {resultsQuery.length > 0 ? (
        <ul>
          {resultsQuery.map((movie) => (
            <li className={'flex'} key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w45${movie.poster_path}`} alt={movie.title} />
              <p>{movie.title}</p>
              <BtnDetails onClick={() => navigateToMovie(movie.id)} />           
            </li>
          ))}
        </ul>
        ) : (
        <p>No results found</p>
      )}
      </div>
    );
  };
  
  export default SearchResults;


