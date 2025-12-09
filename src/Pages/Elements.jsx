import React, { useEffect, useState } from 'react';
import TextSample from '../components/TextSample';
import banner from "../assets/banner.jpg";
import SampleButtons from '../components/SampleButtons';
import LeftImageSection from '../components/LeftImageSection';
import RightImageSection from '../components/RightImageSection';
import Loader from '../components/Loader';
import DefinitionSection from '../components/DefinitionSection';
import TableSection from '../components/TableSection ';
import BlockQuote from '../components/BlockQuote';
import ImageGallerySection from '../components/ImageGallerySection';
import TypographyLists from '../components/TypographyLists';
import FormElements from '../components/FormElements';

const Elements = () => {
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

      {/*HERO SECTION  */}
      <div
        className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-start"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-opacity-35" />

        <div className="relative ml-4 sm:ml-6 md:ml-18">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide">
          Our Element
          </h1>
          <p className="text-orange-600 font-bold text-base sm:text-lg md:text-2xl mt-2">
            ___ Home / Elements
          </p>
        </div>
      </div>

      <TextSample />
      <SampleButtons />
      <LeftImageSection />
      <RightImageSection />
      <DefinitionSection />
      <BlockQuote />
      <TableSection />
      <ImageGallerySection />
      <TypographyLists />
      <FormElements />
    </div>
  );
};

export default Elements;
