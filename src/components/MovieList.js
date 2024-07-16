import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl py-4 text-white z-index-20 transform scale-100 px-4" >{title}</h1>
      <div className="overflow-x-scroll no-scrollbar ">
        <div className="inline-flex space-x-4 transform scale-100 transition-all duration-200">
          {movies.map((movie) => (
            <MovieCard posterPath={movie.poster_path} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
