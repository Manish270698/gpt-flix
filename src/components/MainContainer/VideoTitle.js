import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pl-4 lg:pl-12 pt-[25%] lg:pt-[25%] bg-gradient-to-r from-black h-[100%] w-[55%] lg:w-2/5 text-white">
      <h1 className="md:text-2xl xl:text-4xl font-bold">{title}</h1>
      
      <p className="hidden lg:block text-xs xl:text-base mt-5">
        {overview.length <= 250 ? overview : overview.slice(0, 250) + "..."}
      </p>
      <div className="flex text-[7px] md:text-sm lg:text-xl font-semibold gap-2 mt-4 lg:mt-5">
        <button className="bg-white hover:bg-gray-300 flex gap-1 justify-center text-black items-center px-3 py-1 md:px-6 md:py-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            // width="26"
            // height="26"
            viewBox="0 0 24 24"
            role="img"
            data-icon="PlayStandard"
            aria-hidden="true"
            className="h-3 xl:h-6"
          >
            <path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z"></path>
          </svg>
          Play
        </button>
        <button className="bg-black/60 hover:bg-black/45 text-white flex gap-1 justify-center items-center px-3 py-1 md:px-6 md:py-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFFFFF"
            viewBox="0 0 24 24"
            role="img"
            data-icon="CircleIStandard"
            aria-hidden="true"
            className="h-3 xl:h-6"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
            ></path>
          </svg>
          <p>More Info</p>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
