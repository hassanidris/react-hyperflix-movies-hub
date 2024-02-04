//import { FaSearch } from "react-icons/fa";
import apiConfig from "../data/apiConfig";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BtnSubmitSearch from "./BtnSubimitSearch";

//styles
const classNameLabel = "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white";
const classNameWrapped = "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none";
const classNameInput = "block w-[50vw] p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-m_gold focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
const classNameButton = " text-m_white absolute end-2.5 bottom-2.5 bg-m_gold hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";



const SearchField = () => {
  
  const navigate = useNavigate();

  const navigateToMovie = (movieId) => {
    navigate(`/movie/${movieId}`)
  }

  //logic
  const [query, setQuery] = useState('');
  const [resultsQuery, setResultsQuery] = useState([]);

    useEffect(() => {
      const searchMovies = async () => {
        try {
          let data = await apiConfig.getSearchMovie(query);
          setResultsQuery(data.results)
          console.log(data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      if (query.trim() !== '') {
        searchMovies();
      } else {
        setResultsQuery([]);
      }
    }, [query]);

  return(
    <form>   
      <label className={classNameLabel}>Search</label>
      <div className="relative">
        <div className={classNameWrapped}>
            <svg className="w-4 h-4 text-m_gold dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" /*stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/ d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="text" id="default-search" className={classNameInput} placeholder="Search for Movies..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}/>
        <div>
        {resultsQuery?.length > 0 && (
          <ul className="py-2 text-sm text-white dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            {resultsQuery.map((movie) => (
              <li className={'flex'} key={movie.id} onClick={() => {
                navigateToMovie(movie.id)
                setQuery('')
              }}>
                <img src={`https://image.tmdb.org/t/p/w45${movie.poster_path}`} alt={movie.title}/>
                <p>{movie.title}</p>
              </li>
            ))}
          </ul> 
        )}
        </div> 
      </div>
    </form>
  )
}

export default SearchField;