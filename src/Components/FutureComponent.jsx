import React from "react";
import { motion } from "framer-motion";
import futureImage1 from "../assets/Future-1.avif";
import futureImage2 from "../assets/Future-2.avif";

const Future = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 text-white py-16 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 100, duration: 2 }}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          <img src={futureImage1} alt="Audi Concept 1" className="w-full rounded-lg shadow-lg" />
          <img src={futureImage2} alt="Audi Concept 2" className="w-full rounded-lg shadow-lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
          className="w-full lg:w-1/2 text-left"
        >
          <h2 className="text-3xl sm:text-5xl font-medium text-gray-200 mb-4">
            The Future is Taking Shape
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Would you like to take a look into the future? Do it. Our concept cars are developed with the aim of providing answers to the mobility questions of tomorrow.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            How does a vehicle become an interactive space, which innovations and which materials could come into focus – experience this for yourself with our concept cars.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded hover:bg-gradient-to-r from-gray-200 to-gray-400 transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Future;
