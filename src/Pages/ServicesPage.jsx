import React, { useEffect, useState } from 'react';
import banner from "../assets/banner.jpg";
import ServicesSection from '../components/ServiceSection';
import Loader from '../components/Loader';

const ServicesPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full bg-white text-gray-800">

      {/* ======= HERO SECTION ========= */}
      <div
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-start"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0  bg-opacity-35" />

        <div className="relative ml-4 sm:ml-6 md:ml-18">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide">
            Services
          </h1>
          <p className="text-orange-600 text-base sm:text-lg md:text-2xl mt-2">
            ___ Home / Services
          </p>
        </div>
      </div>

      <ServicesSection />
      
    </div>
  );
};

export default ServicesPage;
