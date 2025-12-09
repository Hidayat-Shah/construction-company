import React, { useEffect, useState } from "react";
import project6 from "../assets/project6.png";
import banner from "../assets/banner.jpg"; // you forgot to import this
import Loader from "../components/Loader";

const ServiceDetails = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //loading delay (1 seconds)
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="w-full bg-white text-gray-800">

      {/* ===== HERO SECTION ===== */}
<div
  className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] bg-cover bg-center flex items-center justify-start"
  style={{ backgroundImage: `url(${banner})` }}
>
  <div className="absolute inset-0 bg-opacity-30" />

  <div className="relative ml-4 sm:ml-6 md:ml-20">
    <h1 className="text-white text-xl sm:text-2xl md:text-4xl tracking-wide font-extrabold">
      Engineering techniques<br /> & implementation
    </h1>
  </div>
</div>


      {/* ===== MAIN CONTENT ===== */}
      <div className="w-full text-[#1A1F3F] pt-28 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* IMAGE */}
          <div className="flex justify-center w-full mb-12">
            <img
              src={project6}
              alt="service"
              className="w-[1000px] max-w-full rounded-md shadow-lg"
            />
          </div>

          {/* FIRST TEXT BLOCK */}
          <div className="max-w-[1000px] mx-auto text-[16px] text-gray-700 leading-[30px] space-y-6">
            <p>
              Mollit anim laborum. Ducis aute iruxvfg dhjoklohr in re voluptate velit essecilumllore
              eu quife nulla pariatur. Excepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjnulpadeserunt
              mollitmmenth incididunt ut:o5tù layobore mollit anim.Mollit anim laborum.Ducvis aute iruxvfg.
            </p>

            <p>
              Mollit anim laborum. Ducvis aute iruxvfg dhjoklohr in re voluptate velit essecilumllore
              eu quife nulla pariatur. Excepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjnulpadeserunt
              mollitmmenth incididunt ut:o5tù layobore mollit anim.Mollit anim laborum.Ducvis aute iruxvfg.
            </p>
          </div>

          {/* SECOND SECTION */}
          <div className="max-w-[1000px] mx-auto mt-14 space-y-6">
            <h2 className="text-[28px] font-bold text-[#1A1F3F]">
              How can we help?
            </h2>

            <p className="text-[16px] text-gray-700 leading-[30px]">
              Mollit anim laborum.Ducvis aute iruxvfg dhjoklohr'in re voluptate velit essecilumllore
              eu quife nulla pariatur. Exchqc epeur sfswijgnt occa cupidatat non aute iruxvfg dhjnpuladeserunt
              molltmmenth incididunt ut:o5tù layobore mollit anim.
            </p>

            <p className="text-[16px] text-gray-700 leading-[30px]">
              Mollit anim laborum.Ducvis aute iruxvfg dhjoklohr in re voluptate velit essecilumllore
              eu quife nulla pariatur. Exchqc epeur sfswijgnt occa cupidatat non aute iruxvfg dhjnpuladeserunt
              molltmmenth incididunt ut:o5tù layobore mollit anim.Ducvis aute iruxvfg.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
