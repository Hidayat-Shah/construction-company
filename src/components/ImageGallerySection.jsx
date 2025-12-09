import React from "react";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";
import g7 from "../assets/g7.jpg";

const ImageGallerySection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto my-16 px-4">
      <h2 className="text-[18px] font-semibold mb-6">Image Gallery</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[g1, g2, g3,g4,g5,g6,g7].map((img, index) => (
          <div key={index} className="overflow-hidden shadow-md">
            <img
              src={img}
              alt="gallery"
              className="w-full h-48 object-cover  hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallerySection;
