import React from 'react'
import lang from '../utils/languageConstants'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { options } from '../utils/constants';
import {useDispatch} from 'react-redux'
import { setRecommendedMovies } from '../utils/gptSlice';

const GptSearchBar = () => {
  const currentLang = useSelector(store => store.language.currentLang);
  const searchText = useRef(null)
  const dispatch = useDispatch()
  const  submitHandler = async()=> {
    const genAI = new GoogleGenerativeAI("AIzaSyCNsQkeai39OfYFfMRYaaAWEmwHyhDrb5Q");

      const model = genAI.getGenerativeModel({ model: "gemini-pro" }); 
      console.log(searchText.current.value)

      const prompt = ` Act like a movie recommendation system and Give me names of 5 movies of the given category in query separated by comma and not in form of text in a single line : ${searchText.current.value}`;

      try {
        const searchMovieTMDB = async(part)=>{
          const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${part}}&api_key=API_KEY` , options );
          const res = await data.json()
          // await dispatch()
          return res.results
        
        }
        

        const result = await model.generateContent(prompt);
        const response =  result.response;
        console.log(response)
        const data = response.candidates[0].content.parts[0].text.split(",");
        const promiseArray = data.map((movie)=>searchMovieTMDB(movie))
        const tmdbResults =  await Promise.all(promiseArray)
        console.log("", tmdbResults)
        dispatch(setRecommendedMovies({movies:tmdbResults , movieNames:data}))


       
        
       

   
      } catch (error) {
        console.error('Error:', error);
      }
    

   

  }

  return (
    <div>
      <form action="" className='text-center' onSubmit={e => e.preventDefault()}>
        <input type="text" className='bg-slate-800 sm:w-3/4 w-11/12 text-gray-50 px-4 py-2 mt-4 rounded-s-full rounded-e-full border-cyan-600 border-2 caret-cyan-500 ' placeholder={lang[currentLang].searchBarPlaceholder} ref={searchText} />


        <button className='bg-cyan-600 px-3 ml-5 py-2 fw-bold mt-5 sm:w-auto w-3/4  text-white rounded border-cyan-300 border-2' onClick={submitHandler}>
          {lang[currentLang].search}
        </button>

      </form>
    </div>
  )
}

export default GptSearchBar
