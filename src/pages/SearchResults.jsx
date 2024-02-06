import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import apiConfig from '../data/apiConfig';
import BtnDetails from '../components/ui-components/BtnDetails';
import defaultMovie from '../assets/movie-nf.png'


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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSearchResults();
  }, [query]);
    return (
      <div className='mt-32 ml-2'>
        <h2 className='mb-2'>Search Results for {query}</h2>
        {resultsQuery.length > 0 ? (
        <ul>
          {resultsQuery.map((movie) => (
            <li className='flex items-start gap-10 border-[1px] border-m_gold rounded-xl p-8 mb-6 mr-2' key={movie.id}>
              <img className='w-[10%]' src={movie.poster_path ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : defaultMovie} alt={movie.title} />
              <div className='flex flex-col justify-center items-center gap-1 h-[50%] w-[90%] text-center'>
                <h3 className="text-m_white whitespace-normal font-open_sans text-xs md:text-xl font-bold">{movie.title || movie.name}</h3>
                <p>{movie.overview}</p>
                <BtnDetails onClick={() => navigateToMovie(movie.id)} /> 
              </div>         
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


