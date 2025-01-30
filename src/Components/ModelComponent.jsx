import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AudiQ7 from "../assets/Audi-Q7.webp";
import AudiQ3 from "../assets/Audi-Q3.webp";
import AudiQ5 from "../assets/Audi-Q5.webp";
import AudiQ8 from "../assets/Audi-Etron-Q8.webp";
import etron from "../assets/Audi-E-tron.webp";

const models = [
  { image: AudiQ7, title: "Q7" },
  { image: AudiQ3, title: "Q3" },
  { image: etron, title: "e-tron GT" },
  { image: AudiQ5, title: "Q5" },
  { image: AudiQ8, title: "Q8 e-tron" },
];

const ModelsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === models.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? models.length - 1 : prevIndex - 1));
  };

  return (
    <section id="models" className="w-full py-10 sm:py-16 bg-gray-50">
      <div className="w-full py-8 text-center">
        <h1 className="text-3xl sm:text-5xl font-medium text-gray-700">Our New Models</h1>
      </div>

      <div className="relative w-full h-[500px] sm:h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <motion.img
            key={currentIndex}
            src={models[currentIndex].image}
            alt={models[currentIndex].title}
            className="w-full h-full object-contain sm:object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          <div className="absolute inset-0 flex flex-col justify-end items-start sm:pb-10 bg-black bg-opacity-50 text-white px-6 sm:px-12 py-6 sm:py-0">
            <motion.h2
              key={currentIndex}
              className="text-2xl sm:text-4xl mb-4 font-medium sm:mb-6"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {models[currentIndex].title}
            </motion.h2>
            <motion.div
              className="flex space-x-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <button className="px-5 py-2 sm:px-6 sm:py-2.5 bg-white text-black font-semibold rounded hover:bg-gray-200 transition duration-300 ease-in-out">
                Learn More
              </button>
              <button className="px-5 py-2 sm:px-6 sm:py-2.5 bg-gray-500 text-white font-semibold rounded hover:bg-gray-50 transition duration-300 ease-in-out">
                Configure
              </button>
            </motion.div>
          </div>
        </div>

        <button
          className="absolute top-1/2 left-4 sm:left-8 transform -translate-y-1/2 bg-gray-800 p-2 sm:p-3 rounded-full text-white hover:bg-gray-700 transition"
          onClick={prevSlide}
        >
          <FaArrowLeft size={24} />
        </button>

        <button
          className="absolute top-1/2 right-4 sm:right-8 transform -translate-y-1/2 bg-gray-800 p-2 sm:p-3 rounded-full text-white hover:bg-gray-700 transition"
          onClick={nextSlide}
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default ModelsSection;
