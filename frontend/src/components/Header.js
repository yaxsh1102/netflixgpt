import { useDispatch } from 'react-redux' ;
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  AVATAR, LOGO } from '../utils/constants';
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
    
    if (user) {
      navigate("/browse");
    } else {
      
      navigate("/login");
    }
  }, [user]); 
  return (

    <div className="absolute w-screen flex flex-col md:flex-row items-center md:justify-between md:items-center md:px-8 px-2 py-2 bg-gradient-to-b from-black z-10">
    <img className="w-48" src={LOGO} alt="logo" />
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
            src={AVATAR}
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