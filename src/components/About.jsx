import React from "react";
import about from "../assets/about.png"; // your image

const About = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

        {/* LEFT SIDE */}
        <div>
          {/* Heading */}
          <h2 className="text-6xl font-extrabold text-[#0c1b2a] leading-tight sm:text-3xl">
            WHO WE ARE
          </h2>

          {/* Subtitle */}
          <p className="mt-10 font-semibold text-[#0c1b2a] leading-relaxed">
            Mollit anim laborum duis au dolor in voluptate velit ess cillum
            dolore eu lore dsu quality mollit anim laborumuis au dolor in
            voluptate velit cillu.
          </p>

          {/* Paragraph */}
          <p className="mt-8 text-gray-600 leading-relaxed">
            Mollit anim laborum.Dvcuis aute iruxvfg dhjkoloh r in re voluptate
            velit esscillumlore eu quife nrulla parihatur. Excepteur sfwsignjnt
            occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth
            incididbnt ut;o5tu layjobore mollit anim.
          </p>

          {/* Button */}
          <button className="mt-10 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 tracking-wide">
            READ MORE
          </button>
        </div>

        {/* RIGHT SIDE (Image + Badge) */}
        <div className="relative w-full">
          <img
            src={about}
            alt="about"
            className="w-full h-[420px] object-cover shadow-lg"
          />

          {/* Blue Badge */}
          <div className="absolute bottom-0 left-0 bg-[#1d2c7a] text-white px-10 py-10">
            <h3 className="text-4xl font-extrabold">1994</h3>
            <p className="tracking-[0.3em] mt-2 text-sm">SINCE</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
