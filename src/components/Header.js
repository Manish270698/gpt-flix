import React from "react";
import logo from "../images/logo.png"

const Header = () => {
  return (
    <div className="z-10 w-[100%] h-24 bg-gradient-to-b from-black">
      <img
        className="my-2 w-28 lg:w-48 absolute top-2 left-3 xl:left-36"
        src={logo}
        alt="logo"
      />
    </div>
  );
};

export default Header;
