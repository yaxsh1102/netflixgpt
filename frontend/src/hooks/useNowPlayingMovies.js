import { tmdb_url } from '../utils/constants'
import { options } from '../utils/constants'
import { useEffect } from 'react';
import { useDispatch  } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
const useNowPlayingMovies = () =>{
const dispatch= useDispatch()
useEffect(() => {
  fetchApi()
}, [])

async function fetchApi() {
  const data = await fetch(tmdb_url, options)
  const res = await data.json()
  console.log(res)

  dispatch(addNowPlayingMovies(res.results))
}

}

export default useNowPlayingMovies ;

