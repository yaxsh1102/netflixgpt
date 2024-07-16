import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    //     <>
    //     <div className="fixed -z-10 w-full">
    //       <img className="h-screen w-full" src={BACKGROUND_URL} alt="logo"  />
    //     </div>
    //     <div className="">
    //       <GptSearchBar />
    //       <GptMovieSuggestions />
    //     </div>
    //   </>
    <div className='bg-slate-950 w-full min-h-screen '>
      <div className='pt-36'>


        <GptSearchBar />
        <GptMovieSuggestions />


        {/* {
                    message && <MessageDiv message={message} />
                } */}
      </div>
    </div>
  )
}

export default GptSearch
