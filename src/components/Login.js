import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { addUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { BACKGROUND_URL } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  function toggleSignInForm() {
    setIsSignInForm(!isSignInForm);
  }

  function handleButtonClick() {
    const userEmail = email.current.value;
    const userPassword = password.current.value;
    const userName = name.current.value;

    const validationError = checkValidData(userEmail, userPassword);
    setErrorMessage(validationError);

    if (validationError) return;

    dispatch(addUser({ email: userEmail, password: userPassword, displayName: userName }));
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
        <button onClick={handleButtonClick} className="p-3 my-6 bg-red-700 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 text-sm cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <div>
              New to Netflix? <span className="text-red-600 font-semibold"> Sign Up Now!</span>
            </div>
          ) : (
            <div>
              Already a User? <span className="text-red-600 font-semibold"> Sign In Now!</span>
            </div>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
