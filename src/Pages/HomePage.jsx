import React from "react";
import HeroSection from "../Components/HeroSection";
import Footer from "../Components/FooterComponent";
import Navbar from "../Components/NavComponent";
import ModelsSection from "../Components/ModelComponent";
import ElectricSection from "../Components/ElectricComponent";


const LandingPage = () => (
  <div className="font-sans">
    <Navbar />
    <HeroSection />
    <ModelsSection />
    <ElectricSection/> 
    <Footer />
  </div>
);

export default LandingPage;
