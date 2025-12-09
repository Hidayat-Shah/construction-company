import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import TopBar from "./TopBar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Pages", dropdown: true },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <TopBar />

      <nav className="w-full sticky top-[32px] flex items-center justify-between px-6 md:px-14 py-4 md:py-6 bg-[#1A1F3F] text-white z-50">
        
        {/* LOGO */}
        <NavLink to="/">
          <img src={logo} alt="logo" className="h-10 sm:h-6 md:h-12 cursor-pointer" />
        </NavLink>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-8 xl:gap-12 font-medium items-center">
          {navLinks.map((link) =>
            !link.dropdown ? (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : "hover:text-orange-500"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ) : (
              <li
                key="Pages"
                className="relative cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="hover:text-orange-500 flex items-center">
                  Pages ▾
                </span>

                {/* DESKTOP DROPDOWN */}
                <ul
                  className={`absolute left-0 top-6 w-44 bg-white text-black shadow-md rounded-md overflow-hidden transition-all duration-200 ${
                    dropdownOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible translate-y-2"
                  }`}
                >
                  <NavLink to="/elements" className="block px-4 py-2 hover:bg-gray-100">
                    Elements
                  </NavLink>
                  <NavLink to="/projectsdetails" className="block px-4 py-2 hover:bg-gray-100">
                    Projects Details
                  </NavLink>
                  <NavLink to="/servicesdetails" className="block px-4 py-2 hover:bg-gray-100">
                    Services Details
                  </NavLink>
                  <NavLink to="/testimonials" className="block px-4 py-2 hover:bg-gray-100">
                    Testimonials
                  </NavLink>
                </ul>
              </li>
            )
          )}
        </ul>

        {/* DESKTOP BUTTON */}
        <NavLink
          to="/contact"
          className="hidden md:block bg-orange-600 hover:bg-orange-700 px-6 py-2.5 rounded font-semibold text-sm"
        >
          CONTACT NOW
        </NavLink>

        {/* MOBILE ICON */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden text-2xl"
        >
          <FaBars />
        </button>
      </nav>

      {/* MOBILE MENU DRAWER */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#1A1F3F] text-white p-6 z-[999] transition-all duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-semibold">Menu</h2>
          <FaTimes className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
        </div>

        <ul className="flex flex-col gap-5 text-base font-medium">
          {navLinks.map((link) =>
            !link.dropdown ? (
              <NavLink
                key={link.name}
                to={link.path}
                className="hover:text-orange-400"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ) : (
              <div key="mobile-pages">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full flex justify-between items-center hover:text-orange-400"
                >
                  Pages <span>▾</span>
                </button>

                {/* MOBILE DROPDOWN */}
                <div
                  className={`pl-4 mt-2 space-y-2 text-sm ${
                    dropdownOpen ? "block" : "hidden"
                  }`}
                >
                  <NavLink to="/elements" onClick={() => setMenuOpen(false)} className="block hover:text-orange-400">Elements</NavLink>
                  <NavLink to="/projectsdetails" onClick={() => setMenuOpen(false)} className="block hover:text-orange-400">Projects Details</NavLink>
                  <NavLink to="/servicesdetails" onClick={() => setMenuOpen(false)} className="block hover:text-orange-400">Services Details</NavLink>
                  <NavLink to="/testimonials" onClick={() => setMenuOpen(false)} className="block hover:text-orange-400">Testimonials</NavLink>
                </div>
              </div>
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
