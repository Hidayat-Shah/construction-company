import React from "react";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
const team = [
  {
    name: "Ethan Welch",
    role: "UX Designer",
    img: team1
  },
  {
    name: "Ethan Welch",
    role: "UX Designer",
    img: team2
  },
  {
    name: "Ethan Welch",
    role: "UX Designer",
    img: team3,
  }
];

const OurTeam = () => {
  return (
    <section className="px-6 md:px-20 py-48">

      {/* Heading */}
      <h1 className="text-[45px] md:text-[55px] font-extrabold text-[#0d1b2a] mb-8">
        OUR TEAM
      </h1>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {team.map((p, i) => (
          <div key={i} className="text-center group">

            {/* Image */}
            <div className="overflow-hidden h-[350px] w-full">
              <img
                src={p.img}
                alt={p.name}
                className="object-cover w-full h-full duration-300 group-hover:scale-105"
              />
            </div>

            {/* Job & Name */}
            <div className="mt-3">
              <p className="text-[12px] uppercase tracking-wider text-gray-600 flex items-center justify-center gap-2">
                <span className="w-5 h-[2px] bg-orange-500 block"></span>
                {p.role}
              </p>

              <h3 className="text-[20px] font-extrabold text-[#0d1b2a] mt-1">
                {p.name}
              </h3>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default OurTeam;
