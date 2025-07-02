import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

// Componentes
import Navbar from "./components/Navbar.jsx";
import App from "./App.jsx";

// Estilos
import "./styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Main = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const body = document.body;
    const menuTrigger = document.querySelector(".menu-trigger");

    // Verificar el estado inicial del menú
    const updateMenuState = () => {
      const isActive = body.classList.contains("menu-active");
      setIsMenuActive(isActive);
    };

    // Alternar menú al hacer clic
    const toggleMenu = () => {
      body.classList.toggle("menu-active");
      updateMenuState();
    };

    // Agregar event listeners
    updateMenuState();
    window.addEventListener("resize", updateMenuState);
    
    if (menuTrigger) {
      menuTrigger.addEventListener("click", toggleMenu);
    }

    // Limpieza
    return () => {
      window.removeEventListener("resize", updateMenuState);
      if (menuTrigger) {
        menuTrigger.removeEventListener("click", toggleMenu);
      }
    };
  }, []);

  return (
    <StrictMode>
      <Navbar isActive={isMenuActive} />
      <main id="content">
        <div className="menu-trigger">
          <i className="bi bi-arrow-bar-left"></i>
        </div>
        <App />
      </main>
    </StrictMode>
  );
};

// Montar la aplicación en el DOM
createRoot(document.getElementById("root")).render(<Main />);
