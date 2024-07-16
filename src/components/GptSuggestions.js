import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTSuggetions = () => {
    const { movieNames, recommendedMovies } = useSelector((store) => store.gpt);
    if (!movieNames) return null;

 

    return (
      <div className="px-3 md:px-6 py-10 m-4 bg-black opacity-90 text-white rounded-md">
        {movieNames &&
          movieNames.map((movieName, index) => (
            <MovieList
              key={movieName}
              title={movieName}
              movies={recommendedMovies[index]}
              
            />
          ))}
      </div>

  )
}

export default GPTSuggetions