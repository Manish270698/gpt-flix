import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <div className="flex flex-wrap justify-start">
        <img
          className="-z-20 w-[1519px] h-[1193px] object-cover fixed left-0 right-0"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
        <div className="-z-10 w-[1519px] h-[600px] fixed bg-gradient-to-b from-black"></div>
      </div>
      <div className="relative">
        <Header />
        <div className="absolute w-[100%]">
          <form className="flex flex-wrap justify-center py-12 bg-black/70 w-4/12 my-32 m-auto text-white  rounded-md">
            <h1 className="text-3xl font-bold w-[70%] ml-2 mb-6">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && <input
              type="test"
              placeholder="Full Name"
              className="m-2 p-4 w-[70%] bg-slate-700/70 rounded-md border-[1px] border-slate-300"
            />}
            <input
              type="email"
              placeholder="Email or mobile number"
              className="m-2 p-4 w-[70%] bg-slate-700/70 rounded-md border-[1px] border-slate-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="m-2 p-4 w-[70%] bg-slate-700/70 rounded-md border-[1px] border-slate-300"
            />
            <button
              type="submit"
              className="my-4 mx-2 p-2 bg-red-700 w-[70%] rounded-md"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="w-[70%] ml-2 mb-6 text-slate-300">
              {isSignInForm ? "New to Netflix? " : "Already Registered? "}
              <span
                className="hover:underline text-white cursor-pointer"
                onClick={toggleSignIn}
              >
                {isSignInForm ? "Sign up now" : "Sign In now"}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
