import { useDispatch } from 'react-redux' ;
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  LOGO } from '../utils/constants';
import { setRecommendedMovies, toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/langSlice';


const Header = () => {
  const dispatch = useDispatch() ;
  const GPTSearchStatus = useSelector(store=>store.gpt.showGptSearch)
  const user = useSelector((store) =>store.user)
  function handleClick(){
    dispatch(removeUser())
    navigate("/")
  

  }
  function handleGptSearchClick(){
    dispatch(toggleGptSearchView())
    dispatch(setRecommendedMovies([]))

  }
  const handleLangChange = (e) => {

    dispatch(changeLanguage(e.target.value))
  }
  const navigate = useNavigate()

  useEffect(() => {
    
    // Redirect based on user state
    if (user) {
      navigate("/browse");
    } else {
      
      navigate("/login");
    }
  }, [user]); 
  return (
    // <div className="absolute  px-8 py-2 bg-gradient-to-b from-black z-50 flex  w-screen justify-between">
    //     <img src="logo.png" className='w-44' alt='logo'></img>
    //     { user && 
    //       <div className='flex p-2 items-center gap-x-4'>
    //            {GPTSearchStatus &&
    //           <select name="" onChange={handleLangChange} id="" className="sm:px-2 px-1 capitalize py-0.5 mr-4 text-sm outline-none rounded bg-cyan-950  text-cyan-600  border-cyan-600 border-2">
    //               <option value={"english"} className="capitalize">English</option>
    //               <option value={"hindi"} className="capitalize">Hindi</option>
    //               <option value={"spanish"}  className="capitalize">Spanish</option>


    //           </select>
    //         }
    //         <button className="px-2 py-1 bg-cyan-950 text-cyan-600 border-cyan-600 border-2 mr-4 rounded text-sm sm:font-bold " onClick={handleGptSearchClick}>{GPTSearchStatus ? "Home" : "GPT Search"}</button>
    //         <button className="px-2 py-1 bg-red-600 text-white mr-4 rounded text-sm sm:font-bold " onClick={handleClick}>Sign Out</button>
    //       </div>

    //     }
        
   
    // </div>
    <div className="absolute w-screen flex flex-col md:flex-row items-center md:justify-between md:items-center md:px-8 px-2 py-2 bg-gradient-to-b from-black z-10">
    <img className="w-48" src="logo.png" alt="logo" />
    {user && (
      <div className="flex items-center gap-3">
        {GPTSearchStatus && (
          <select
            className="py-2 px-4 rounded-md text-white bg-black border-2 border-red-500 outline-none"
            onChange={handleLangChange}
          >
                    <option value={"english"} className="capitalize">English</option>
               <option value={"hindi"} className="capitalize">Hindi</option>
    /             <option value={"spanish"}  className="capitalize">Spanish</option>
          </select>
        )}
        <button
          className="bg-red-600 text-white py-2 px-4 mx-2 rounded-md"
          onClick={handleGptSearchClick}
        >
          {!GPTSearchStatus ? "Try AI Search" : "Homepage"}
        </button>
        <div className="flex gap-1 md:gap-3">
          <img
            className="w-9 h-9 rounded-sm shadow-lg "
            src={LOGO}
            alt="user"
          />
          <button className="text-white font-bold" onClick={handleClick}>
            Sign Out
          </button>
        </div>
      </div>
    )}
  </div>

  )
}

export default Header