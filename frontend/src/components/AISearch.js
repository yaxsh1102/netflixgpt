import React from 'react'

import { BACKGROUND_URL } from '../utils/constants'
import AISearchBar from './AISearchBar'
import AISuggestions from './AISuggestions'

const AISearch = () => {

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
      <AISearchBar />
      <AISuggestions></AISuggestions>
    </div>
  </>
  )
}

export default AISearch
