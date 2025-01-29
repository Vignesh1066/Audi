  import React, { useState } from "react";
  import { FaBars } from "react-icons/fa";
  import logo from "../assets/logo.png";
import { FaXmark } from "react-icons/fa6";

  const Navbar = () => {
    const [activeLink, setActiveLink] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (link) => {
      setActiveLink(link);
      setIsMenuOpen(false);
    };

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
      <nav className="bg-gray-950 w-full text-white py-5 px-8 flex justify-between items-center shadow-lg">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Audi Logo" className="h-14" />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <FaBars size={24} className="text-white" />
          </button>
        </div>
        <ul className="hidden md:flex space-x-8">
          {["models", "used-cars", "customer-area", "innovation", "quick-links"].map((link) => (
            <li key={link}>
              <span
                // href={`#${link}`}
                href=""
                className={`hover:text-gray-400 ${activeLink === link ? "text-gray-50" : ""}`}
                onClick={() => handleLinkClick(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1).replace("-", " ")}
              </span>
            </li>
          ))}
        </ul>

        <button className="text-white border border-gray-500 px-4 py-2 rounded hover:text-black hover:bg-gradient-to-r from-gray-200 to-gray-400 hidden md:block">
          Book a Test Drive
        </button>

        <div
          className={`fixed z-20 top-0 left-0 w-full h-full bg-black text-white transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="flex justify-between items-center p-6">
            <img src={logo} alt="Audi Logo" className="h-10" />
            <button onClick={toggleMenu} className="text-white">
              <FaXmark size={24} />
            </button>
          </div>

          <ul className="space-y-6 px-6">
            {["models", "used-cars", "customer-area", "innovation", "quick-links"].map((link) => (
              <li key={link}>
                <a
                  // href={`#${link}`}
                  className={`block text-lg hover:text-gray-400 ${activeLink === link ? "text-gray-200" : ""}`}
                  onClick={() => handleLinkClick(link)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1).replace("-", " ")}
                </a>
              </li>
            ))}
          </ul>

          <div className="px-6 mt-10">
            <button className="w-full py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-gradient-to-r from-gray-200 to-gray-400 transition">
              Book a Test Drive
            </button>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;
