//import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//styles
const classNameLabel = "mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white";
const classNameWrapped = "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none";
const classNameInput = "block w-[50vw] p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-m_gold focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const SearchField = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState('');

  const searchMovies = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      navigate(`/search-results/${query}`);
    } 
  }

  return(
    <form onSubmit={searchMovies}>   
    <label className={classNameLabel}>Search</label>
    <div className="relative">
        <div className={classNameWrapped}>
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input 
          type="text" 
          id="default-search" 
          placeholder="Search for Movies..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
          className={classNameInput}/>
        <button type="submit" className="text-white absolute end-1.5 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-m_darkGrey text-m_gold ml-2 bg-blue-500 rounded btn-outline flex justify-center items-center gap-1">Search</button>
    </div>
</form>
  )
}

export default SearchField;




