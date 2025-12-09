import React, { useEffect, useState } from "react";
import { FaUser, FaComment, FaSearch } from "react-icons/fa";
import banner from "../assets/banner.jpg"
import blog_1 from "../assets/blog_1.png"
import blog_2 from "../assets/blog_2.png"
import blog_3 from "../assets/blog_3.png"
import blog_4 from "../assets/blog_4.png"
import blog_5 from "../assets/blog_4.png"
import post_1 from "../assets/post_1.png"
import post_2 from "../assets/post_2.png"
import post_3 from "../assets/post_3.png"
import post_4 from "../assets/post_4.png"
import Loader from "../components/Loader";
const Blog = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //loading delay (1 seconds)
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }
  const posts = [
    { img: blog_1, title: "Google inks pact for new 35-storey office" },
    { img: blog_2, title: "Google inks pact for new 35-storey office" },
    { img: blog_3, title: "Google inks pact for new 35-storey office" },
    { img: blog_4, title: "Google inks pact for new 35-storey office" },
    { img: blog_5, title: "Google inks pact for new 35-storey office" },

  ];
  const postimg = [post_1, post_2, post_3, post_4];

  return (
    <div className="w-full bg-white text-gray-800">

      {/*HERO SECTION */}
<div
  className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-start"
  style={{ backgroundImage: `url(${banner})` }}
>
  <div className="absolute inset-0  bg-opacity-35" />

  <div className="relative ml-4 sm:ml-6 md:ml-18">
    <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide">
      BLOG
    </h1>
    <p className="text-orange-600 font-bold text-base sm:text-lg md:text-2xl mt-2">
      ___ Home / Blog
    </p>
  </div>
</div>


      {/* ========= MAIN CONTENT ========= */}
      <div className="max-w-7xl mx-auto py-20 grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

        {/* LEFT BLOG LIST 2-COL WIDE */}
        <div className="md:col-span-2 flex flex-col gap-10">
          {posts.map((post, i) => (
            <div key={i} className="shadow-md rounded-md overflow-hidden bg-white">
              {/* Image */}
              <div className="relative">
                <img src={post.img} className="w-full h-72 object-cover" alt="blog" />

                <div className="absolute bg-orange-500 left-6 -bottom-6 text-white text-center px-3 py-2 rounded">
                  <h3 className="text-lg font-bold leading-none">15</h3>
                  <span className="text-[12px]">JAN</span>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-10">
                <h2 className="text-xl font-bold hover:text-orange-500 cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 mt-3 leading-6">
                  That dominion stars lights dominion divide years for fourth have don't stars is
                  that he earth it first without heaven in place seed it second morning saying.
                </p>

                {/* Meta */}
                <div className="flex gap-6 text-gray-500 text-[13px] mt-4">
                  <span className="flex items-center gap-1"><FaUser /> Travel, Lifestyle</span>
                  <span className="flex items-center gap-1"><FaComment /> 03 Comments</span>
                </div>
              </div>
            </div>
          ))}

          {/* PAGINATION */}
          <div className="flex justify-center gap-3">
            <button className="px-4 py-2 border rounded text-gray-600 hover:bg-orange-500 hover:text-white">1</button>
            <button className="px-4 py-2 border rounded text-gray-600 hover:bg-orange-500 hover:text-white">2</button>
            <button className="px-4 py-2 border rounded text-gray-600 hover:bg-orange-500 hover:text-white">›</button>
          </div>
        </div>

        {/* ======= RIGHT SIDEBAR ======= */}
        <div className="space-y-10">

          {/* SEARCH BOX */}
          <div className=" p-6 bg-[#FBF9FF] shadow-md">
            <div className="border border-[#c4b9de] flex items-center overflow-hidden rounded">
              <input type="text" placeholder="Search keyword"
                className="w-full px-3 py-2 outline-none text-sm bg-white" />
              <button className="bg-orange-500 p-3"><FaSearch className="text-white" /></button>
            </div>
            <button className="mt-4 text-center border border-[#FF5F13] w-full py-2 text-sm  hover:bg-orange-500 text-orange-500 hover:text-white duration-300">
              SEARCH
            </button>
          </div>

          {/* CATEGORY */}
          <div className=" p-6 bg-[#FBF9FF] shadow-md text-sm">
            <h3 className="font-semibold mb-4">Category</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="border-b border-[#c4b9de] pb-1 hover:text-orange-500">Restaurant food (37)</li>
              <li className="border-b border-[#c4b9de] pb-1 hover:text-orange-500">Travel news (10)</li>
              <li className="border-b border-[#c4b9de] pb-1 hover:text-orange-500">Modern technology (03)</li>
              <li className="border-b border-[#c4b9de] pb-1 hover:text-orange-500">Product (11)</li>
              <li className="border-b border-[#c4b9de] pb-1 hover:text-orange-500">Inspiration (21)</li>
              <li className="hover:text-orange-500">Health Care (18)</li>
            </ul>
          </div>

          {/* RECENT POSTS */}
          <div className=" p-6 bg-[#FBF9FF] shadow-md text-sm">
            <h3 className="font-semibold border-b border-[#c4b9de] mb-4">Recent Post</h3>

            {postimg.map((img, i) => (
  <div key={i} className="flex gap-4 items-center pb-3 mb-3">
    <img src={img} className="w-14 h-14 rounded object-cover" />
    
    <div>
      <p className="hover:text-orange-500 cursor-pointer">The Amazing Hubble</p>
      <span className="text-gray-400 text-xs">02 hours ago</span>
    </div>
  </div>
))}
          </div>

          {/* TAG CLOUDS */}
          <div className="p-6 bg-[#FBF9FF] shadow-md">
            <h3 className="font-semibold mb-4">Tag Clouds</h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {["project","love","technology","travel","restaurant","life style","design","illustration"]
                .map(t => <span key={t} className="border border-[#c4b9de] px-3 py-1 hover:bg-orange-500 hover:text-white cursor-pointer">{t}</span>)}
            </div>
          </div>

          {/* INSTAGRAM GRID */}
          <div className="p-6 bg-[#FBF9FF] shadow-md">
            <h3 className="font-semibold mb-4">Instagram Feeds</h3>
            <div className="grid grid-cols-3 gap-2">
            {posts.map((item, index) => (
  <img
    key={index}
    src={item.img}
    className="w-full h-20 object-cover rounded"
    alt=""
  />
))}

            </div>
          </div>

          {/* NEWSLETTER */}
          <div className=" p-6 bg-[#FBF9FF] shadow-md">
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <input type="email" placeholder="Enter email"
              className="border border-[#c4b9de] w-full px-3 py-2 text-sm outline-none" />
            <button className="w-full border py-2 mt-3 text-sm border-[#FF5F13] text-orange-500 hover:bg-orange-500 hover:text-white">
              SUBSCRIBE
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;
