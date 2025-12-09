import { FaArrowUp } from "react-icons/fa";
import Logo from "../assets/Logo.png"
import map from "../assets/world-map.png"
const Footer = () => {
  return (
    <footer className="bg-[#0D1117] text-[#c7c7c7] pt-20 pb-6 relative">
      
      {/* MAIN ROW */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 px-6">
        
        {/* LOGO + TEXT */}
        <div>
          <img src={Logo} alt="logo" className="w-56 mb-6" />
          <p className="leading-7 text-sm w-[85%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6">Contact</h3>

          <p className="text-sm leading-7">
            198 West 21th Street, Suite 721 New York, NY 10010
          </p>

          <p className="mt-4 text-sm">Phone: +95 (0)123 456 789</p>
          <p className="text-sm mt-1">Cell: +95 (0)123 456 789</p>
        </div>

        {/* NEWSLETTER + MAP */}
        <div>
          <div className="flex">
            <input type="email" placeholder="Email Address"
              className="w-full bg-[#11151D] border border-gray-600 py-3 px-4 text-sm outline-none" />
            <button className="bg-[#11151D] text-white px-2 text-sm border border-gray-600">
              SIGN UP
            </button>
          </div>

          <img
            src={map}
            className="mt-6 w-full opacity-90"
            alt="map"
          />
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 mt-14 pt-6 text-center text-sm">
        Copyright ©2025 All rights reserved |
        This template is made with <span className="text-orange-500">❤</span> by Colorlib
      </div>

      {/* SCROLL TO TOP BTN */}
      <button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="bg-orange-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white text-base sm:text-lg
    fixed bottom-4 sm:bottom-8 right-4 sm:right-10 shadow-lg cursor-pointer hover:bg-orange-600 z-50"
>
  <FaArrowUp />
</button>

    </footer>
  );
}
export default Footer;
