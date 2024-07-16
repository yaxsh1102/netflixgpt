import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  console.log(posterPath)
  if(!posterPath) return ;
  return (
    <div className="w-36 md:w-44 pr-6 shadow-lg   transform transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor">
      <img
        className="rounded-lg"
        src={IMG_CDN_URL + posterPath}
        alt="MoviePoster"
      />
    </div> 
  );
};

export default MovieCard;
