import React, { useState } from "react";

const testimonials = [
  {
    text: `Molit anim laborum. Duis aute irsudfr oihjkolor in re voluprate velit
    esseillumolore eu qui re nulls pariatur. Excepteur efswaighjont coeos
    cupidataet non aute irsudfr dhjinlujdaspe erunt mollit enimcididunt not.
    Blu kyaiobore mollit anim. Molit amin laborum. Duis aute irsudfr oihjkolor 
    in re voluprate velit esseillumolore eu qui re nulls pariatur. Excepteur efswaighjon.`,
    author: "Jesaya Inn",
    role: "Co Founder"
  },
  {
    text: `Second testimonial text example for slider. Duis aute irsudfr oihjkolor 
    in re voluprate velit esseillumolore eu qui re nulls pariatur.`,
    author: "Michael Ross",
    role: "Project Manager"
  },
  {
    text: `Third testimonial goes here. Lorem ipsum content Molit anim laborum
    Duis aute irsudfr dhjinlujdaspe erunt mollit enim.`
    ,
    author: "David Miller",
    role: "Team Lead"
  }
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative bg-[#031E54] text-white py-24 px-6 md:px-24 overflow-hidden">

      {/* Background stroke text */}
      <h1 className="absolute top-10 left-6 md:left-24 text-[80px] md:text-[120px] 
                     font-extrabold opacity-10 leading-none select-none stroke-text mt-9">
        FEEDBACK
      </h1>

      {/* Title */}
      <h2 className="relative z-10 text-[30px] md:text-[48px] font-extrabold mt-9">
        TESTIMONIAL
      </h2>

      <div className="max-w-4xl transition-all duration-500">

        {/* Quote */}
        <div className="text-orange-500 text-[100px] leading-none">“</div>
        {/* Dynamic Text */}
        <p className="text-sm md:text-[15px] text-gray-200 leading-7">
          {testimonials[index].text}
        </p>

        {/* Author */}
        <div className="mt-8">
          <span className="block w-16 h-[2px] bg-orange-500 mb-3"></span>
          <h4 className="font-bold text-white">{testimonials[index].author}</h4>
          <p className="text-gray-400 text-sm">{testimonials[index].role}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute right-10 bottom-24 flex items-center gap-4">
        <button
          onClick={prev}
          className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center text-lg hover:bg-white hover:text-black duration-300"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center text-lg hover:bg-white hover:text-black duration-300"
        >
          ›
        </button>
      </div>

      {/* Bottom Pattern Strip */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-[url('https://i.ibb.co/4RQcw5k/diagonal-stripe.png')] opacity-30"></div>
    </section>
  );
};

export default Testimonial;
