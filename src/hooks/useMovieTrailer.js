import {options} from '../utils/constants'
import {useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'


const useMovieTrailer = ()=>{
    

const dispatch = useDispatch() ;

    async function getMovies (){
    
        const data = await fetch( 'https://api.themoviedb.org/3/movie/976573/videos?language=en-US' , options
        )
        const json = await data.json()
        const filteredData = json.results.filter((video)=>video.type === "Trailer")
        const trailerData = filteredData.length ? filteredData[0] :json.results[0]
        dispatch(addTrailerVideo(trailerData))
  }

    useEffect(()=>{
       getMovies()
    } , [])
}

export default useMovieTrailer ;