import React from 'react';
import { useMovies } from './MovieContext';

const PopularMovies = () => {
  const { movies } = useMovies();
  const popularMovies = movies.filter(movie => movie.status === 'popular');

  return (
    <div>
      <h2>Popular Movies</h2>
      {popularMovies.map(movie => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <img src={movie.poster} alt={movie.title} width="150" />
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PopularMovies;
