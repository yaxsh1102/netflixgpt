import React from 'react'
import GptSearchBar from './GptSearchBar'
import GPTSuggetions from './GptSuggestions'
import { BACKGROUND_URL } from '../utils/constants'

const GptSearch = () => {

  return (
 
    <>
    <div className="fixed -z-20">
      <img
        className="min-h-screen w-[100vw]"
        src={BACKGROUND_URL}
        alt="bg"
      />
    </div>
    <div>
      <GptSearchBar />
      <GPTSuggetions />
    </div>
  </>
  )
}

export default GptSearch
