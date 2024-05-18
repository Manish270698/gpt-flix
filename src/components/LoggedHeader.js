import React, { useState } from "react";
import logo from "../images/logo.png";
import downArrow from "../images/downArrow.png";

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { NOTIFICATION, PROFILE_PIC, SEARCH } from "../utils/constants";

const LoggedHeader = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showBrowse, setShowBrowse] = useState(false);
  // const [showSignOut, setShowSignOut] = useState(false);
  // const [isFocused, setIsFocused] = useState(false);

  // const handleMouseEnter = () => {
  //   setShowSignOut(true); // Show sign out on enter
  // };

  // const handleMouseLeave = () => {
  //   const timeout = setTimeout(() => {
  //     if (isFocused === false) {
  //       setShowSignOut(false);
  //       clearTimeout(timeout);
  //     }
  //   }, 500);
  //   // console.log("isFocused: :", isFocused);
  // };
  // const handleSignOutEnter = () => setIsFocused(true);
  // const handleSigOutLeave = () => setIsFocused(false);

  const handleClick = () => {
    setShow(!show);
    setShowBrowse(false);
  };

  const handleBrowseClick = () => {
    setShowBrowse(!showBrowse);
    setShow(false);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="z-30 w-[100%] flex flex-wrap top-0 fixed justify-between bg-gradient-to-b from-black text-white">
      <div className=" items-center flex flex-wrap pl-4 lg:pl-12 h-14 lg:h-20 ">
        <div>
          <img className="w-16 md:w-24 lg:w-32" src={logo} alt="logo" />
        </div>
        <ul className="hidden md:flex text-xs lg:text-sm font-semibold flex-wrap ml-8 lg:ml-10 gap-5 lg:gap-7">
          <li className="cursor-pointer"> Home</li>
          <li className="cursor-pointer">TV Shows</li>
          <li className="cursor-pointer">Movies</li>
          <li className="cursor-pointer">New & Popular</li>
          <li className="cursor-pointer">My List</li>
        </ul>
        <div className="cursor-pointer w-7 ml-8 text-[10px] md:hidden font-semibold">
          <div className="flex items-center gap-1" onClick={handleBrowseClick}>
            <p>Browse</p>
            <img
              className={`w-3 h-3 ${
                showBrowse && "rotate-180"
              } ease-in duration-100`}
              src={downArrow}
              alt="options"
            />
          </div>
          {showBrowse && (
            <div className="relative md:hidden">
              <img
                className="w-3 h-3 rotate-180 absolute left-1/2"
                src={downArrow}
                alt="options"
              />
              <ul className="w-32 bg-black/70 absolute top-4 font-normal rounded-md text-sm p-3">
                <li className="cursor-pointer hover:underline mb-3"> Home</li>
                <li className="cursor-pointer hover:underline mb-3">
                  TV Shows
                </li>
                <li className="cursor-pointer hover:underline mb-3">Movies</li>
                <li className="cursor-pointer hover:underline mb-3">
                  New & Popular
                </li>
                <li className="cursor-pointer hover:underline">My List</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="pr-4 lg:pr-20 flex flex-wrap items-center gap-5 lg:gap-7">
        <svg
          xmlns={SEARCH}
          fill="#FFFFFF"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          role="img"
          data-icon="MagnifyingGlassStandard"
          aria-hidden="true"
          className="w-7 cursor-pointer"
          alt="search"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
          ></path>
        </svg>

        <svg
          xmlns={NOTIFICATION}
          fill="#FFFFFF"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          role="img"
          data-icon="BellStandard"
          aria-hidden="true"
          className="w-7 cursor-pointer"
          alt="notification"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z"
          ></path>
        </svg>
        <div className="">
          <div className="w-8 cursor-pointer ">
            <button
              className="group flex items-center gap-1"
              onClick={handleClick}
            >
              <img className="rounded-sm" src={PROFILE_PIC} alt="profilePic" />
              <img
                className={`hidden lg:block w-3 h-3 cursor-pointer ${
                  show && "rotate-180"
                } ease-in duration-100`}
                src={downArrow}
                alt="options"
              />
            </button>
          </div>
          {show && (
            <div className="right-4 lg:right-[64px] absolute my-3">
              <img
                className="w-3 h-3 rotate-180 absolute right-2 lg:right-6 -top-3"
                src={downArrow}
                alt="options"
              />
              <button
                className="group p-3 rounded-md bg-black/70"
                onClick={handleSignOut}
              >
                <p className="group-hover:underline text-sm">Sign Out</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoggedHeader;
