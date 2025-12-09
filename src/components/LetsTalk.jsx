import React from "react";
import letsBg from "../assets/letsBg.jpg"; // your background image

const LetsTalk = () => {
  return (
    <section className="relative w-full">

      {/* Top Blue Section */}
      <div className="relative min-h-[75vh] flex items-center px-6 sm:px-14 md:px-24 bg-[#0C2A66]">

        {/* Background Image (blurred / dim like screenshot) */}
        <img 
          src={letsBg}
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />

        {/* Content */}
        <div className="relative z-10 max-w-3xl">

          {/* Large faint text behind main heading */}
          <h1
  className="absolute -top-10 sm:-top-16 md:-top-10 left-0 ml-2 
             text-[70px] sm:text-[800px] md:text-[90px] 
             font-extrabold leading-none select-none stroke-text"
>
            LET'S CHAT
          </h1>

          {/* Main heading */}
          <h2 className="text-white font-extrabold text-[30px] sm:text-[42px] md:text-[50px] mb-6">
            LATS TALK WITH US
          </h2>

          {/* Paragraph */}
          <p className="text-white/80 text-sm md:text-[14px] leading-relaxed w-full max-w-xl">
            Molit anim laborum. Duais aute irure dolor in reprehenderit in voluptate velit 
            esse cillumlore eu quife nulla pariatur. Excepteur sint awesginat occaecat cupidatat 
            non proident duais aute irure dolor in reprehenderit. Molit anim laborum.
          </p>

          {/* Button */}
          <button className="mt-8 border border-white text-white text-xs md:text-sm px-8 py-2 transition
                             hover:bg-white hover:text-[#0C2A66]">
            READ MORE
          </button>

        </div>
      </div>

     
      {/* Orange Stats POP-UP Strip */}
<div className="w-full flex justify-center -mt-10 absolute"> 
<div className="bg-orange-500 rounded-md shadow-lg 
                w-[90%] max-w-[1200px]
                flex flex-col sm:flex-row items-center justify-between 
                px-10 md:px-20 py-6 gap-10">


    <div className="text-white text-center">
      <span className="text-[10px] tracking-widest block">MACHINERY</span>
      <h3 className="text-3xl font-extrabold leading-none">34</h3>
      <p className="text-sm mt-1">Tools</p>
    </div>

    <div className="text-white text-center">
      <span className="text-[10px] tracking-widest block">MACHINERY</span>
      <h3 className="text-3xl font-extrabold leading-none">76</h3>
      <p className="text-sm mt-1">Tools</p>
    </div>

    <div className="text-white text-center">
      <span className="text-[10px] tracking-widest block">MACHINERY</span>
      <h3 className="text-3xl font-extrabold leading-none">08</h3>
      <p className="text-sm mt-1">Tools</p>
    </div>

  </div>
</div>

    </section>
  );
};

export default LetsTalk;
