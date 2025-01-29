import React from "react";
import ElectricCar from "../assets/Audi-E-tronHub.webp";

const ElectricSection = () => {
  return (
    <section className="relative w-full h-[70vh] sm:h-screen text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${ElectricCar})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col justify-center md:justify-start items-start p-6 sm:p-12 bg-gray-900 bg-opacity-80">
        <div className="max-w-lg">
          <h1 className="text-4xl sm:text-5xl font-medium bg-gradient-to-r from-gray-400 to-gray-700 text-transparent bg-clip-text mb-4">
            The Home of Electric
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium mb-4">Discover the Future</h2>
          <p className="text-base sm:text-lg mb-6">
            Seeing the world with different eyes is what drives us. Discover
            more about our vision of the future of mobility. Learn more about
            the technology in the Audi e-tron along with the charging options,
            range calculations, and its benefits.
          </p>
          <button className="px-5 py-2 sm:px-6 sm:py-3 bg-white text-black font-semibold rounded-md hover:bg-gradient-to-r from-gray-200 to-gray-400 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ElectricSection;
