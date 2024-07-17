import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) {
    return <div>Loading...</div>;
  }

  const mainMovie = movies[1];
  console.log(mainMovie)

  return (
    <div className="pt-[30%] md:pt-0 bg-black">
      <VideoTitle title={mainMovie?.original_title} overview={mainMovie?.overview} />
      <VideoBackground movieId={mainMovie.id}/>
    </div>
  );
};

export default MainContainer;
