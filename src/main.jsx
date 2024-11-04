import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Main() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const body = document.body;
    const menuTrigger = document.querySelector(".menu-trigger");

    const toggleMenuClass = () => {
      const isActive = body.classList.contains("menu-active");
      body.className = isActive ? "menu-active" : "";
      setIsMenuActive(isActive);
    };

    toggleMenuClass();
    window.addEventListener("resize", toggleMenuClass);

    const toggleMenu = () => {
      body.classList.toggle("menu-active");
      setIsMenuActive((prev) => !prev);
    };

    if (menuTrigger) {
      menuTrigger.addEventListener("click", toggleMenu);
    }

    return () => {
      window.removeEventListener("resize", toggleMenuClass);
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
}

createRoot(document.getElementById("root")).render(<Main />);
