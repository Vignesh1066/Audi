import React from "react";
import { motion } from "framer-motion";
import ElectricCar from "../assets/Audi-E-tronHub.webp";

const ElectricSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      className="relative w-full h-[70vh] sm:h-screen text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${ElectricCar})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="relative z-10 w-full h-full flex flex-col justify-center md:justify-start items-start p-6 sm:p-12 bg-gray-900 bg-opacity-80"
      >
        <div className="max-w-lg">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-medium bg-gradient-to-r from-gray-400 to-gray-700 text-transparent bg-clip-text mb-4"
          >
            The Home of Electric
          </motion.h1>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl sm:text-3xl font-medium mb-4"
          >
            Discover the Future
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.6 }}
            className="text-base sm:text-lg mb-6"
          >
            Seeing the world with different eyes is what drives us. Discover
            more about our vision of the future of mobility. Learn more about
            the technology in the Audi e-tron along with the charging options,
            range calculations, and its benefits.
          </motion.p>
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="px-5 py-2 sm:px-6 sm:py-3 bg-white text-black font-semibold rounded-md hover:bg-gradient-to-r from-gray-200 to-gray-400 transition"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ElectricSection;
