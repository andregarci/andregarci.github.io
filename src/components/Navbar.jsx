import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ isActive }) => {
  return (
    <nav id="slide-menu" className={isActive ? "active" : ""}>
      <div id="logo">
        <h1 className="text-center">
          <img
            className="rounded-circle"
            src="https://robohash.org/123"
            alt="Foto de Andre Garcia"
            width="200"
            height="200"
          />
          <span className="title">Andre Garcia</span>
          <span className="tagline">
            Programador
            <br />
          </span>
        </h1>
      </div>
      <div id="main-menu" role="navigation">
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">Portafolio</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades Blandas</a>
          </li>
          <li>
            <a href="#skills">Conocimientos</a>
          </li>
          <li>
            <a href="#resume">Perfil Profesional</a>
          </li>
        </ul>
      </div>
      <div className="social">
        <ul>
          <li>
            <a
              href="https://twitter.com/andregarcia_pe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/andregarcia_pe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/andregarcia-pe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.threads.net/@andregarcia_pe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
            >
              <i className="bi bi-threads"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/andregarci"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Navbar;
