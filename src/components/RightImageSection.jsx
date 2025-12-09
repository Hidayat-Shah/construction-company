import React from "react";
import sampleImg from "../assets/sampleImg.jpg"; 

const RightImageSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* TEXT LEFT */}
        <div className="w-full md:w-600">
          <h2 className="text-xl font-semibold mb-4">Right Aligned Image</h2>

          <p className="text-gray-600 leading-7 mb-4">
            This section demonstrates a right-aligned image with descriptive
            text placed on the left side. It provides a visually appealing
            layout commonly used for feature highlights and detailed content.
          </p>

          <p className="text-gray-600 leading-7">
            This design helps keep your page clean and professional, making it
            easy for users to understand the content while appreciating the
            visual element.
          </p>
        </div>

        {/* IMAGE RIGHT */}
        <div className="w-full md:w-1/2">
          <img
            src={sampleImg}
            alt="Construction Work"
            className="rounded-lg shadow-md"
          />
        </div>

      </div>
    </section>
  );
};

export default RightImageSection;
