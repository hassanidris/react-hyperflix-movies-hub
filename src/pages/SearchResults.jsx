import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import apiConfig from '../data/apiConfig';
import BtnDetails from '../components/ui-components/BtnDetails';
import defultImage from '../assets/default-user.png';
import defaultMovie from '../assets/movie-nf.png';
import { FiInfo } from "react-icons/fi";


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

  const handleResultClick = (movieId) => {
    navigateToMovie(movieId);
    // Clear the search query when navigating to a movie
    // You might want to clear it after a delay to ensure it's cleared after navigation
    setTimeout(() => setResultsQuery([]), 100);
  };

    return (
      <div className=' pt-[120px]'>
        <h2 className=' p-4'>Search Results</h2>
        <div className=' px-8'>
          {resultsQuery.length > 0 ? (
          <ul className=' flex flex-wrap gap-4'>
            {resultsQuery.map((movie) => (
              <li className=' p-3 hover:bg-m_darkGrey cursor-pointer' key={movie.id}>
                <Link to={{ pathname: `/movie/${movie.id}` }}>
                <div className='w-[90vw] sm:w-[40vw] md:w-[28vw] lg:w-[19vw] h-[220px] inline-block overflow-hidden '>
                  <img className='w-full h-full block object-cover' src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultMovie} alt={movie.title} />
                </div>
                <div className=' flex justify-between'>
                  <p className=' text-sm'>{movie.title}</p>
                  {/* <BtnDetails onClick={() => navigateToMovie(movie.id)} /> */}
                  <FiInfo />
                </div>
                </Link>
              </li>
            ))}
          </ul>
          ) : (
          <p>No results found</p>
                )}
        </div>
      </div>
    );
  };
  
  export default SearchResults;


