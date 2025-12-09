import React from "react";
import logo from "../assets/loder-logo.png";

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#f5f5f5]">
      <div className="relative w-24 h-24 flex items-center justify-center">
        
        {/* Spinning border */}
        <div className="absolute w-24 h-24 rounded-full border-2 border-red-400 border-t-transparent animate-spin"></div>

        {/* Logo stays still */}
        <img
          src={logo}
          alt="loading"
          className="w-12 h-12 object-contain opacity-90 relative z-10"
        />
      </div>
    </div>
  );
};

export default Loader;