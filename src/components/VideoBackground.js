import React from 'react'
import {  useSelector} from 'react-redux' ;
import useMovieTrailer from '../hooks/useMovieTrailer'


const VideoBackground = ({moviedId}) => {
const trailer = useSelector((store)=>store.movies.trailerVideo) ;
useMovieTrailer()

   
    return(
        <div className='sm:pt-0 pt-16'>
        <iframe
            className="w-full aspect-video"
            src={
                "https://www.youtube.com/embed/" +
                trailer?.key +
                "?&autoplay=1&loop=1&mute=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         ></iframe>
    </div>
    )

}

export default VideoBackground