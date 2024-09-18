import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative w-full h-screen bg-black">
      <Header />

      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-60"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_small.jpg"
          alt="background"
        />
      </div>

      <div className="relative flex flex-col justify-center items-center h-full ">
        <div className="bg-black/75 p-14 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-white text-3xl font-bold mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Full Name"
                style={{ backgroundColor: "rgba(22, 22, 22, 0.7)" }}
                className="block w-full p-3 text-white border border-gray-600 rounded-md focus:outline-none focus:border-red-500"
                required
              />
            )}
            <input
              ref={email}
              type="email"
              placeholder="Email Address"
              style={{ backgroundColor: "rgba(22, 22, 22, 0.7)" }}
              className="block w-full p-3 text-white border border-gray-600 rounded-md focus:outline-none focus:border-red-500"
              required
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              style={{ backgroundColor: "rgba(22, 22, 22, 0.7)" }}
              className="block w-full p-3 text-white border border-gray-600 rounded-md focus:outline-none focus:border-red-500"
              required
            />
            <p className="text-red-500 py-1 ">{errorMessage}</p>
            <button
              type="submit"
              onClick={handleButtonClick}
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition cursor-pointer">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <div className="flex justify-between items-center text-gray-400 mt-4 text-sm">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="ml-2">
                Remember me
              </label>
            </div>
            {/* <a href="#" className="hover:underline">
              Need help?
            </a> */}
          </div>

          <div className="text-gray-400 mt-6">
            <p onClick={toggleSignInForm} className=" cursor-pointer">
              {isSignInForm
                ? "New to Netflix? Sign Up"
                : "Already registered? Sign In"}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
