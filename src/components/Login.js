import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true) ;
    function toggleSignInForm(){
        setIsSignInForm(!isSignInForm)
 }
 
  return (
    <div>
        <Header></Header>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg' alt='logo'></img>

        </div>

        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0'>
        <h1 className='font-bold text-3xl py-4 text-white'>{ isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {isSignInForm===false  && (<input type='text' placeholder='Name' className='p-4 my-4 w-full bg-[#444444] text-white'></input>
)}
            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-[#444444] text-white'></input>
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-[#444444] text-white'></input>
            <button className='p-4 my-6 bg-red-700 w-full text-white font-medium rounded-md'>{ isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p onClick={toggleSignInForm} className='text-white cursor-pointer'>{ isSignInForm ? "New to Netflix? Sign Up" : "Already a User? Register Now"}</p>
        </form>

    </div>
  )
}

export default Login;