import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 h-60 flex-shrink-0">
      <img src={IMG_CDN_URL+posterPath} alt="Movie Poster" className="w-full h-full object-cover" />
    </div>
  );
};

export default MovieCard;
