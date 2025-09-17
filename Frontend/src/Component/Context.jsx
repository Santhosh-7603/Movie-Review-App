import React, { createContext, useContext } from 'react';

const MovieContext = createContext();

const moviesData = {
  movies: [  ]
};

export const MovieProvider = ({ children }) => {
  return (
    <MovieContext.Provider value={moviesData}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);

