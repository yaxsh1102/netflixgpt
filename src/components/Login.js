import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { addUser } from '../utils/userSlice';
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BACKGROUND_URL } from '../utils/constants';


const Login = () => {

  
    const [isSignInForm , setIsSignInForm] = useState(true) ;
    const email = useRef(null) ;
    const password = useRef(null) ;
    const name = useRef(null) ;
    const [errorMessage , setErrorMessage] = useState()
    const dispatch = useDispatch()
   const user = useSelector((state)=>state.user)

    function toggleSignInForm(){
        setIsSignInForm(!isSignInForm)
 }
 
 

 function handleButtonClick() {
  const userEmail = email.current.value;
  const userPassword = password.current.value;
  const userName = name.current.value;

  const validationError = checkValidData(userEmail, userPassword);
  setErrorMessage(validationError);

  if (validationError) return;

  dispatch(addUser({ email: userEmail, password: userPassword  , displayName:userName}));
}

  return (
    <div>
        <Header></Header>
        <div className='absolute h-full'>
        <img src={BACKGROUND_URL} alt='logo'></img>

        </div>

        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 opacity-[0.90]' onSubmit={(e)=>e.preventDefault()}>
        <h1 className='font-bold text-3xl py-4 text-white'>{ isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {isSignInForm===false  && (<input type='text' placeholder='Name' className='p-4 my-4 w-full bg-[#444444] text-white' ref={name}></input>
)}
            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-[#444444] text-white' ref={email}></input>
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-[#444444] text-white' ref={password}></input>
           {errorMessage &&  <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>}
            <button className='p-4 my-6 bg-red-700 w-full text-white font-medium rounded-md' onClick={handleButtonClick}>{ isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p onClick={toggleSignInForm} className='text-white cursor-pointer'>{ isSignInForm ? "New to Netflix? Sign Up" : "Already a User? Register Now"}</p>
        </form>

    </div>
  )
}

export default Login;