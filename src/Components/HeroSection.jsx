import React from "react";
import desktopImage from "../assets/AudiRSQ8.avif"; 
import mobileImage from "../assets/Audi-E-tronHub.webp"; 

const HeroSection = () => (
  <section className="relative bg-black text-white h-[80vh] sm:h-screen flex">
    <div 
      className="absolute inset-0 bg-cover bg-right sm:block hidden"
      style={{ backgroundImage: `url(${desktopImage})` }}
    ></div>

    <div 
      className="absolute inset-0 bg-cover bg-left sm:hidden block"
      style={{ backgroundImage: `url(${mobileImage})` }}
    ></div>

    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-70"></div>
    <div className="z-10 absolute top-0 right-0 sm:p-12 p-7 text-left lg:text-right max-w-4xl">
      <h1 className="text-3xl sm:text-5xl font-medium mb-2 sm:mb-4  text-gray-100 sm:text-gray-600">
        Redefining Luxury and Performance
      </h1>
      <p className="text-xl mb-3 sm:mb-6 text-gray-950 sm:text-gray-600 md:text-gray-400">
        Step into the future with Audi's state-of-the-art technology and timeless design.
      </p>
      <div className="w-full flex justify-start lg:justify-end items-end">
        <button className="bg-white text-black px-6 py-3 rounded hover:bg-gradient-to-r from-gray-200 to-gray-400 transition-all duration-300 transform hover:scale-105">
          Explore Models
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
