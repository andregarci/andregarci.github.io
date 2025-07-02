import React from "react";

// Secciones
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import HabilidadesSection from "./components/HabilidadesSection";
import SkillsSection from "./components/SkillsSection";
import ResumeSection from "./components/ResumeSection";
import Footer from "./components/Footer";

// Array de secciones para facilitar la adición o eliminación de componentes
const sections = [
  { Component: HeroSection, id: "hero" },
  { Component: AboutSection, id: "about" },
  { Component: HabilidadesSection, id: "habilidades" },
  { Component: SkillsSection, id: "skills" },
  { Component: ResumeSection, id: "resume" },
  { Component: Footer, id: "footer" }
];

const App = () => {
  return (
    <>
      {sections.map(({ Component, id }, index) => (
        <Component key={id || index} />
      ))}
    </>
  );
};

export default App;
