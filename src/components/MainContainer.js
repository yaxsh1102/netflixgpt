import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) {
    // Render a loading state or an empty div while movies are being fetched
    return <div>Loading...</div>;
  }

  const mainMovie = movies[1];
  console.log(mainMovie)

  return (
    <div>
      <VideoTitle title={mainMovie?.original_title} overview={mainMovie?.overview} />
      <VideoBackground movieId={mainMovie.id}/>
    </div>
  );
};

export default MainContainer;
