import React, { Suspense, lazy } from "react";

// El componente HeroSection se carga de forma estática (eager) porque es
// lo primero que el usuario ve.
import HeroSection from "./components/HeroSection";

// El resto de los componentes se importan de forma dinámica (lazy loading)
// para no bloquear la carga inicial de la página.
const AboutSection = lazy(() => import("./components/AboutSection"));
const HabilidadesSection = lazy(() => import("./components/HabilidadesSection"));
const SkillsSection = lazy(() => import("./components/SkillsSection"));
const ResumeSection = lazy(() => import("./components/ResumeSection"));
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const Footer = lazy(() => import("./components/Footer"));

// Componentes que se cargan inmediatamente
const eagerSections = [{ Component: HeroSection, id: "hero" }];

// Componentes que se cargarán solo cuando sean necesarios
const lazySections = [
  { Component: AboutSection, id: "about" },
  { Component: HabilidadesSection, id: "habilidades" },
  { Component: SkillsSection, id: "skills" },
  { Component: ProjectsSection, id: "projects" },
  { Component: ResumeSection, id: "resume" },
  { Component: Footer, id: "footer" },
];

const App = () => {
  return (
    <>
      <main>
        {/* Renderiza los componentes estáticos inmediatamente */}
        {eagerSections.map(({ Component, id }, index) => (
          <Component key={id || index} />
        ))}

        {/* Suspense envuelve los componentes lazy. Muestra un fallback
            mientras espera que se descargue el código del componente. */}
        <Suspense fallback={<div>Cargando...</div>}>
          {lazySections.map(({ Component, id }, index) => (
            <Component key={id || index} />
          ))}
        </Suspense>
      </main>
    </>
  );
};

export default App;
