import React from "react";

const VideoShimmer = () => {
  return (
    <div className="relative z-0">
      <div className="absolute pl-4 lg:pl-12 pt-[25%] lg:pt-[25%] bg-gradient-to-r animate-pulse from-slate-400 h-[100%] w-[55%] lg:w-2/5 text-white">
        <p className="hidden lg:block text-xs xl:text-base mt-5"></p>
      </div>
      <div className="w-[100%] aspect-video bg-slate-200 -mt-6 lg:-mt-16 overflow-hidden"></div>
    </div>
  );
};

export default VideoShimmer;
