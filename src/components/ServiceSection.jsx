import React from "react";
import service1 from "../assets/servicess1.png"; 
import service2 from "../assets/servicess2.png";
import service3 from "../assets/servicess3.png";

const ServicesSection = () => {
  const services = [
    {
      img: service1,
      title: "Engineering techniques & implementation",
    },
    {
      img: service2,
      title: "Engineering techniques & implementation",
    },
    {
      img: service3,
      title: "Engineering techniques & implementation",
    },
  ];

  return (
    <section className="py-16 px-10 w-full">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold tracking-wide text-[#0c1b2a] mb-10 sm:text-2xl">
        OUR SERVICES
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, index) => (
          <div
            key={index}
            className="bg-white shadow-md border-b-[5px] border-orange-500 hover:shadow-xl duration-300"
          >
            {/* Image */}
            <img src={s.img} alt="" className="w-full h-72 object-cover" />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#0c1b2a] leading-snug mb-4">
                {s.title}
              </h3>

              <button className="flex items-center gap-2 text-sm text-gray-700">
               <span className="hover:text-orange-600 "> Read More</span> <span className="text-lg hover:bg-[#F54A00] px-2 py-[1px] hover:text-white">+</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
