import React, { useRef, useState } from "react";
import Header from "./Header";
import {
  validateEmail,
  validatePassword,
  validateName,
} from "../utils/validate";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [nameErrorMsg, setNameErrorMsg] = useState(null);
  const [emailErrorMsg, setEmailErrorMsg] = useState(null);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(null);
  const [firebaseError, setFirebaseError] = useState(null);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
    setFirebaseError(null);
    setEmailErrorMsg(null);
    setPasswordErrorMsg(null);
    setNameErrorMsg(null);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleValidation = () => {
    setEmailErrorMsg(validateEmail(email.current.value));
    setPasswordErrorMsg(validatePassword(password.current.value));
    setFirebaseError(null);
    console.log("passwordErrorMsg: ", validatePassword(password.current.value));
    console.log("emailErrorMsg: ", validateEmail(email.current.value));

    if (!isSignInForm) {
      setNameErrorMsg(validateName(name.current.value));
      if (
        validateName(name.current.value) ||
        validatePassword(password.current.value) ||
        validateEmail(email.current.value)
      )
        return;
      else {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            navigate("/browse");
            // console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("signup: ", errorCode, errorMessage);
            setFirebaseError(
              errorMessage
                .substring(
                  errorMessage.indexOf("/") + 1,
                  errorMessage.indexOf(")")
                )
                .replaceAll("-", " ")
            );
          });
      }
    } else {
      if (
        validatePassword(password.current.value) ||
        validateEmail(email.current.value)
      )
        return;
      else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/browse");
            // console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("signin: ", errorCode, errorMessage);
            console.log("emailErrorMsg: ", emailErrorMsg);
            console.log("passwordErrorMsg: ", passwordErrorMsg);
            setFirebaseError(
              errorMessage
                .substring(
                  errorMessage.indexOf("/") + 1,
                  errorMessage.indexOf(")")
                )
                .replaceAll("-", " ")
            );
          });
      }
    }
  };

  return (
    <div>
      <div>
        <img
          className="-z-20 w-[100%] h-[100%]  object-cover fixed "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
        {/* <div className="-z-10 w-[100%] h-[600px] fixed bg-gradient-to-b from-black"></div> */}
      </div>
      <div className="">
        <Header />
        <div className="h-screen w-[100%]">
          <form
            onClick={(e) => e.preventDefault()}
            className="flex flex-wrap justify-center py-12 bg-black/70 w-11/12 md:w-6/12 xl:w-4/12 my-32 m-auto text-white  rounded-md"
          >
            <h1 className="text-3xl font-bold w-[70%] ml-2 mb-6">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                ref={name}
                type="test"
                placeholder="Full Name"
                className="m-2 p-4 w-[70%] bg-slate-700/70 rounded-md border-[1px] border-slate-300"
              />
            )}
            {!isSignInForm && (
              <p className="ml-2 w-[70%] text-sm">
                {nameErrorMsg && (
                  <span className="text-red-700">{nameErrorMsg}</span>
                )}
              </p>
            )}
            <input
              ref={email}
              type="email"
              placeholder="Email or mobile number"
              className="m-2 p-4 w-[70%] bg-slate-700/70 rounded-md border-[1px] border-slate-300"
            />
            <p className="ml-2 w-[70%] text-sm">
              {emailErrorMsg && (
                <span className="text-red-700">{emailErrorMsg}</span>
              )}
            </p>
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="m-2 p-4 w-[70%] bg-slate-700/70 rounded-md border-[1px] border-slate-300"
            />
            <p className="ml-2 w-[70%] text-sm">
              {passwordErrorMsg && (
                <span className="text-red-700">{passwordErrorMsg}</span>
              )}
              {firebaseError && (
                <span className="text-red-700">{firebaseError}</span>
              )}
            </p>

            <button
              onClick={handleValidation}
              type="submit"
              className="my-4 mx-2 p-2 bg-red-700 w-[70%] rounded-md"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="w-[70%] ml-2 mb-6 text-slate-300">
              {isSignInForm ? "New to StreamGPT? " : "Already Registered? "}
              <span
                className="hover:underline text-white cursor-pointer"
                onClick={toggleSignIn}
              >
                {isSignInForm ? "Sign up now" : "Sign In now"}
              </span>
            </p>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
