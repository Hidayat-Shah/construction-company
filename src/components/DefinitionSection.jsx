import React from "react";

const DefinitionSection = () => {
  const items = [
    {
      title: "Definition 01",
      text: "Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks…",
    },
    {
      title: "Definition 02",
      text: "Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks…",
    },
    {
      title: "Definition 03",
      text: "Recently, the US Federal government banned online casinos from operating in America by making it illegal to transfer money to them through any US bank or payment system. As a result of this law, most of the popular online casino networks…",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-xl font-semibold mb-6">Definition</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index}>
            <h3 className="text-[15px] font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-6">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DefinitionSection;
