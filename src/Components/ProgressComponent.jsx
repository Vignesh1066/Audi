import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaPaintBrush, FaCode, FaTachometerAlt } from "react-icons/fa";
import progress1 from "../assets/Progress-1.avif";
import progress2 from "../assets/Progress-2.avif";
import progress3 from "../assets/Progress-3.avif";
import progress4 from "../assets/Progress-4.avif";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
};

const ProgressSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full bg-gray-50 py-16 px-8"
    >
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-3xl sm:text-5xl text-center font-medium text-gray-700 mb-12"
        >
          Progress Times Four
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            {
              img: progress1,
              icon: <FaLeaf />,
              title: "Take Responsibility",
              desc: "Act more sustainably and completely reshape your thinking in the process. From the supply chain to an inclusive company structure. When it comes to sustainability, every contribution counts.",
            },
            {
              img: progress2,
              icon: <FaPaintBrush />,
              title: "Create Tomorrow",
              desc: "For us, design means much more than designing vehicles. We want to open up spaces for new, fascinating experiences – and simplify everyday life for people in the process.",
            },
            {
              img: progress3,
              icon: <FaCode />,
              title: "Digitalize Mobility",
              desc: "Digitalization is the key to tomorrow’s mobility. Many things will become possible via digital channels – opening up fascinating paths to the future.",
            },
            {
              img: progress4,
              icon: <FaTachometerAlt />,
              title: "Push Boundaries",
              desc: "What seemed impossible for a long time can suddenly become reality – when people question boundaries and dare to try something new.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-gray-400 text-2xl mr-3">
                    {card.icon}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    {card.title}
                  </h3>
                </div>
                F <p className="text-gray-600 mb-4">{card.desc}</p>
                <button className="text-gray-400 font-semibold hover:underline">
                  Learn more →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProgressSection;
