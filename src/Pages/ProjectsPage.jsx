import React, { useEffect, useState } from "react";
import banner from "../assets/banner.jpg";
import Projects from "../components/Projects";
import Loader from "../components/Loader";

const ProjectsPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="w-full bg-white text-gray-800">

      {/* HERO SECTION  */}
      <div
        className="relative w-full h-[280px] sm:h-[360px] md:h-[500px] bg-cover bg-center flex items-center px-6 md:px-20"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text */}
        <div className="relative z-10">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide">
            Our Projects
          </h1>

          <p className="text-orange-500 text-sm sm:text-base md:text-xl mt-2">
            ___ Home / Projects
          </p>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <Projects />
    </div>
  );
};

export default ProjectsPage;
