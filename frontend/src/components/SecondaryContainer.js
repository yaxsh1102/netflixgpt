import React from 'react' 
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store)=>store.movies.nowPlayingMovies)
    if(!movies) return 

    console.log(movies[0])
  return (
    <div className= 'bg-black '>
        <div className='relative pl-4 md:pl-8 mt-0 md:-mt-72'>
        <MovieList title={"Now Playing"} movies={movies}></MovieList>
        <MovieList title={"Horror"} movies={movies}></MovieList>
        <MovieList title={"Romatic"} movies={movies}></MovieList>
        <MovieList title={"Sci-Fi"} movies={movies}></MovieList>
        </div>
      
    </div>
  )
}

export default SecondaryContainer