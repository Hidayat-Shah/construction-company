import React from "react";
import sampleImg from "../assets/sampleImg.jpg"; 

const LeftImageSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-1 py-12">
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* IMAGE LEFT */}
        <div className="w-full md:w-1/2">
          <img
            src={sampleImg} 
            alt="Construction"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* TEXT RIGHT */}
        <div className="w-full md:w-600">
          <h2 className="text-xl font-semibold mb-4">Left Aligned Image</h2>
          <p className="text-gray-600 leading-7 mb-4">
            This section demonstrates a left-aligned image with descriptive
            text placed on the right side. It helps maintain a visually balanced
            layout while presenting both visual and written content clearly. Use this style when you want to draw equal attention to an image and
            its related text.It is commonly used in service descriptions,
            product details, and feature explanations. 
          </p>
        </div>

      </div>
    </section>
  );
};

export default LeftImageSection;
