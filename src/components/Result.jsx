import { useState, useEffect } from 'react';
import apiConfig from '../data/apiConfig';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchMovies = async () => {
      try {
        let data = await apiConfig.getSearchMovie(query);
        setResults(data.results)
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (query.trim() !== '') {
      searchMovies();
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {results?.length > 0 && (
          <select>
            {results.map((movie) => (
              <option key={movie.id}>{movie.title}</option>
              
            ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
