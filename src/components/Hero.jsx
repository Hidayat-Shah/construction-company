import React from "react";
import h1_hero from "../assets/h1_hero.jpg";
import "./LiquidText.css";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden flex items-center">

      {/* Background Image */}
      <img
        src={h1_hero}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover brightness-[40%]"
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 sm:px-12 md:px-20">

        {/* Small Top Text */}
        <p className="uppercase tracking-[3px] text-white text-xs sm:text-sm flex items-center gap-3 mb-4">
          <span className="w-8 sm:w-10 h-[2px] bg-orange-500"></span>
          Hand Car Wash And Detailing Service
        </p>

        {/* Main Heading 1 */}
        <h1 className="text-[48px] sm:text-[70px] md:text-[100px] lg:text-[110px] font-extrabold text-orange-600 leading-[0.9] drop-shadow-xl">
          ADVANCED
        </h1>

        {/* Outlined Heading */}
        <h1
          className="
            liquid-text font-extrabold leading-[0.9] drop-shadow-xl
            text-[42px] sm:text-[60px] md:text-[90px] lg:text-[100px]
            sm:ml-60
            
          "
          data-text="CONSTRUCTION"
        >
          CONSTRUCTION
        </h1>

        {/* Bottom Text */}
        <p className="mt-8 sm:mt-10 uppercase tracking-[3px] text-white text-xs sm:text-sm flex items-center gap-3">
          <span className="w-8 sm:w-6 h-[2px] bg-orange-500"></span>
          Our Services
        </p>
      </div>
    </section>
  );
};

export default Hero;
