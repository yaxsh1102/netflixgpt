import React, { useRef, useState } from 'react';
import Header from './Header';
import { addUser } from '../utils/userSlice';
import { useDispatch, } from 'react-redux';
import { BACKGROUND_URL } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const[loading , setLoading] = useState(false)
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  function toggleSignInForm() {
    setIsSignInForm(!isSignInForm);
  }

  async function handleLogin(userEmail, userPassword) {
    try {
      setLoading(true)
      const response = await fetch('https://netflixgpt-zofh.onrender.com/api/v1/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: userEmail, password: userPassword })
      });

      const res = await response.json();
      console.log(res);
      return res;
    } catch (error) {
      console.error('Error:', error);
      return { success: false, message: error.message };
    }finally{
      setLoading(false)
    }
  }

  async function handleSignup(userName, userEmail, userPassword) {
    try {
      setLoading(true)
      const response = await fetch('https://netflixgpt-zofh.onrender.com/api/v1/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: userName, email: userEmail, password: userPassword })
      });

      const res = await response.json();
      console.log(res);
      return res;
    } catch (error) {
      console.error('Error:', error);
      return { success: false, message: error.message };
    }finally{
      setLoading(false)
    }
  }

  async function handleButtonClick() {
    const userEmail = email.current.value;
    const userPassword = password.current.value;
    let userName = name.current ? name.current.value : '';

   

    let res;
    if (isSignInForm) {
      if(!userEmail || !userPassword){
        setErrorMessage("Empty Fields")
        return 
      }
      res = await handleLogin(userEmail, userPassword);
    } else {
      if(!userEmail || !userPassword || !userName){
        setErrorMessage("Empty Fields")
        return 
      }
      res = await handleSignup(userName, userEmail, userPassword);
    }

    if (res.success === false) {
      console.log(res)
      setErrorMessage(res.message);
    } else {
      dispatch(addUser({ email: userEmail, password: userPassword, displayName: userName }));
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="min-h-screen w-[100vw]" src={BACKGROUND_URL} alt="bg" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-[full] md:w-1/4 bg-black bg-opacity-80 py-14 px-8 absolute my-36 right-0 left-0 mx-auto text-white rounded-md"
      >
        <h1 className="font-bold text-3xl py-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 text-sm my-4 w-full bg-gray-600 rounded-md focus:outline-none"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 text-sm my-4 w-full bg-gray-600 rounded-md focus:outline-none"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 text-sm my-4 w-full bg-gray-600 rounded-md focus:outline-none"
        />
        <p className="text-red-600">{errorMessage}</p>
        <button onClick={handleButtonClick} className="p-3 my-6 bg-red-700 w-full rounded-md" disabled={loading}>
       { !loading  ?  (isSignInForm ? "Sign In" : "Sign Up") :"Loading..."  }
        </button>
        <p className="py-2 text-sm cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <div>
              New to Netflix? <span className="text-red-600 font-semibold">Sign Up Now!</span>
            </div>
          ) : (
            <div>
              Already a User? <span className="text-red-600 font-semibold">Sign In Now!</span>
            </div>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
