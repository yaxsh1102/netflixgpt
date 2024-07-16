import React from 'react'
import lang from '../utils/languageConstant'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { options } from '../utils/constants';
import {useDispatch} from 'react-redux'
import { setRecommendedMovies } from '../utils/gptSlice';
import { useState } from 'react';

const GptSearchBar = () => {
  const [loading  , setLoading] = useState(false)

  const currentLang = useSelector(store => store.language.currentLang);
  const searchText = useRef(null)
  const dispatch = useDispatch()
  const  submitHandler = async()=> {
    if(searchText.current.value==="") return 
    setLoading(true)
    const genAI = new GoogleGenerativeAI("AIzaSyCNsQkeai39OfYFfMRYaaAWEmwHyhDrb5Q");

      const model = genAI.getGenerativeModel({ model: "gemini-pro" }); 
      console.log(searchText.current.value)

      const prompt = ` Act like a movie recommendation system and Give me names of 5 movies of the given category in query separated by comma and not in form of text in a single line : ${searchText.current.value}`;

      try {
        const searchMovieTMDB = async(part)=>{
          const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${part}}&api_key=API_KEY` , options );
          const res = await data.json()
          return res.results
        
        }
        

        const result = await model.generateContent(prompt);
        const response =  result.response;
        const data = response.candidates[0].content.parts[0].text.split(",");
        const promiseArray = data.map((movie)=>searchMovieTMDB(movie))
        const tmdbResults =  await Promise.all(promiseArray)
        dispatch(setRecommendedMovies({movies:tmdbResults , movieNames:data}))
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.error('Error: Try Again');
      }
    

   

  }

  return (
    <div>
    <div className="pt-[45%] md:pt-[10%] flex justify-center ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 mx-2 md:mx-0  bg-gray-950 grid grid-cols-12 rounded-md shadow-2xl"
      >
        <input
          ref={searchText}
          type="text"
          className="py-3 md:px-5 px-2 m-4 md:ml-8 ml-3 text-sm md:text-md col-span-9 rounded-md"
          placeholder={lang[currentLang].searchBarPlaceholder}
        />
         <button
            className={`col-span-3 my-4 md:mr-8 mr-3 py-3 md:px-4 text-sm md:text-md text-white rounded-md font-semibold ${
              loading ? 'bg-red-200' : 'bg-red-600'
            }`}
            onClick={submitHandler}
            disabled={loading}
          >
            {loading ? 'Loading...' : lang[currentLang].search}
          </button>
      </form>
    </div>
  </div>
  )
}

export default GptSearchBar
