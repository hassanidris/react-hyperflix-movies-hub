import React from 'react'

const SearchResults = ({ results, navigateToMovie }) => {
    return (
      <div>
        <h2>Search Results</h2>
        <ul>
          {results.map((movie) => (
            <li className={'flex'} key={movie.id} onClick={() => navigateToMovie(movie.id)}>
              <img src={`https://image.tmdb.org/t/p/w45${movie.poster_path}`} alt={movie.title} />
              <p>{movie.title}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SearchResults;