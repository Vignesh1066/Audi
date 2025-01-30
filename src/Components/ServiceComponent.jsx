import React from "react";
import { motion } from "framer-motion";
import BookTestDrive from "../assets/Service-AudiHero.avif"
import ApprovedPlus from "../assets/Service-ApprovedPlus.avif"
import OnlineService from "../assets/Service-BookServices.avif"
import PressReleases from "../assets/Service-AudiRSQ8.avif"

const servicesData = [
  {
    id: 1,
    title: "Book a Test Drive",
    description: "Experience the thrill of driving an Audi. Book your test drive today!",
    image: BookTestDrive,
    buttonText: "Book Now",
  },
  {
    id: 2,
    title: "Audi Approved Plus",
    description: "Discover certified pre-owned Audi vehicles with premium quality and warranty.",
    image: ApprovedPlus,
    buttonText: "Explore More",
  },
  {
    id: 3,
    title: "Book Online Service",
    description: "Schedule your Audi service online for a seamless experience.",
    image: OnlineService,
    buttonText: "Schedule Now",
  },
  {
    id: 4,
    title: "Press Releases",
    description: "Stay updated with the latest news and announcements from Audi.",
    image: PressReleases,
    buttonText: "Read More",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 2, ease: "easeOut" } 
  }
};

const ServicesSection = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-8">
      <div className="max-w-screen-xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="relativ backdrop-blur-lg border bg-white border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-fit max-h-80 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300 "
              />
              <div className="py-3 px-0 sm:p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-4">{service.description}</p>
                <button className="relative bg-gradient-to-r from-gray-200 to-gray-400 hover:bg-gradient-to-l text-black font-semibold py-2 px-5 rounded-lg transition-all duration-300 transform hover:scale-105">
                  {service.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
