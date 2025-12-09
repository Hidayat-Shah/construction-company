import React from "react";
import project1 from "../assets/project2.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

const Projects = () => {
  const projects = [
    { img: project1, title: "Floride Chemicals", subtitle: "Factory" },
    { img: project2, title: "Floride Chemicals", subtitle: "Factory" },
    { img: project3, title: "Floride Chemicals", subtitle: "Factory" },
    { img: project4, title: "Floride Chemicals", subtitle: "Factory" },
    { img: project5, title: "Floride Chemicals", subtitle: "Factory" },
    { img: project6, title: "Floride Chemicals", subtitle: "Factory" },
  ];

  const menu = ["Show All", "Interior", "Recent", "Big Building", "Park"];

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <h2 className="text-4xl font-extrabold text-[#0c1b2a] tracking-wide">
            OUR PROJECTS
          </h2>

          {/* Menu */}
          <div className="flex gap-6 text-sm mt-4 md:mt-0">
            {menu.map((item, index) => (
              <button
                key={index}
                className={`${
                  index === 0 ? "text-orange-500 font-semibold" : "text-gray-700"
                } hover:text-orange-500`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="relative group border border-gray-200 overflow-hidden cursor-pointer"
            >
              {/* IMAGE */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-72 object-cover transform group-hover:scale-105 duration-300"
              />

              {/* PLUS ICON */}
              <div
                className="absolute bottom-4 top-70 right-4 
                w-8 h-8 bg-[#F54A00] text-white text-xl 
                font-bold rounded-sm flex items-center justify-center
                opacity-0 group-hover:opacity-100 
                transition duration-300 shadow-lg"
              >
                +
              </div>

              {/* CONTENT */}
              <div className="p-4 text-[#0c1b2a] group-hover:bg-[#00235B] group-hover:text-white duration-300">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-gray-600 text-sm group-hover:text-white">
                  {p.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
