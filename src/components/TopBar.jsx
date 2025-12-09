import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full bg-[#1A1F3F] text-gray-300 py-2 text-sm border-b-[0.5px] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2 px-4 sm:px-6">

        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm">
          <span>+ (123) 1234-567-8901</span>
          <span className="hidden sm:inline">info@domain.com</span>
          <span className="hidden md:inline">Mon - Sat 8:00 - 17:30, Sunday - CLOSED</span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 text-white text-[14px]">
          {[FaTwitter, FaFacebookF, FaLinkedinIn, FaGoogle].map((Icon, i) => (
            <Icon
              key={i}
              className="cursor-pointer transition duration-300 hover:text-orange-500 hover:-scale-x-100"
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default TopBar;