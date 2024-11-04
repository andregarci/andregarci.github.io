import "./Portafolio.css";
import React from "react";
import HeroSection from "./HeroSection";
import HabilidadesSection from "./HabilidadesSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ResumeSection from "./ResumeSection";
import Footer from "./Footer";

const Portafolio = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <HabilidadesSection /> 
      <SkillsSection />
      <ResumeSection />
      <Footer />
    </>
  );
};

export default Portafolio;