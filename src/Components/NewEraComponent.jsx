import React from "react";
import { motion } from "framer-motion";
import AudiRSQ from "../assets/Motor-Sport.webp";

const MotorsportSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full py-16 bg-gray-50 text-black"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <img src={AudiRSQ} alt="Audi RS Q e-tron" className="rounded-lg shadow-lg" />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl sm:text-5xl text-gray-700 font-medium mb-4">A New Era in Motor Sport</h2>
          <p className="text-lg text-gray-600 mb-6">
            Motor sport not only writes history – but also the future. We test limits and push boundaries in competition. Many technical concepts can be tested on race tracks for possible future use in series production. This is what we mean by progress – for the Audi brand and also for Audi Sport.
          </p>
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="px-6 py-3 bg-gradient-to-r from-gray-200 to-gray-400 hover:bg-gradient-to-l text-black font-semibold rounded-md hover:bg-gray-200 transition"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MotorsportSection;
