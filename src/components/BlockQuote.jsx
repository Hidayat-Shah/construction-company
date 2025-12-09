import React from "react";

const BlockQuote = () => {
  return (
    <section className="w-full max-w-6xl mx-auto my-16 px-4">
      <h2 className="text-[18px] font-semibold mb-6">Block Quotes</h2>

      <div className="bg-[#f5f7ff] border-l-4 border-blue-500 p-6 rounded-md shadow-sm">
        <p className="text-gray-600 leading-7 text-sm">
          “Recently, the US Federal government banned online casinos from
          operating in America by making it illegal to transfer money to them
          through any US bank or payment system. As a result of this law, most
          of the popular online casino networks such as PartyGaming and
          Playtech left the United States. Overnight, online casino players
          found themselves being offered their favorite games. But after a
          fortnight, the online casino industry came up with a solution and new
          online casinos started taking root. These began to operate under
          different licenses as well as, in many cases, continued the transfer
          of money to and from the US legal. A major part of the law was
          redefining electronic banking systems that would accept this new
          clarification and start doing business with me. Listed in this article
          are the excellent banking.”
        </p>
      </div>
    </section>
  );
};

export default BlockQuote;
