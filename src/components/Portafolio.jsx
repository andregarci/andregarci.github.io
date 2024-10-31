import React, { useEffect } from "react";

import "./Portafolio.css";
import iconsSVG from "../hooks/IconsSVG";

const Portafolio = () => {
  useEffect(() => {
    document.title = "Andre Garcia";
  }, []);
  return (
    <>
      <div className="main">
        <section id="hero" className="hero section light-background">
          <img
            src="https://w.wallhaven.cc/full/3k/wallhaven-3kr5y6.png"
            alt=""
          />

          <div className="container" data-aos="zoom-out">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <h2>Andre Garcia</h2>
                <p>
                  <span
                    className="typed"
                    data-typed-items="Designer, Developer, Freelancer, Photographer"
                  >
                    Programador
                  </span>
                  <span
                    className="typed-cursor typed-cursor--blink"
                    aria-hidden="true"
                  ></span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Acerca de</h2>
            <p>
              Estudiante de Diseño y Desarrollo de Software con experiencia en desarrollo backend y soluciones en la nube. Hábil en la resolución de problemas y adaptación a nuevas tecnologías.
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4">
                <img src="(link unavailable)" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-8 content">
                <h2>Backend & DevOps</h2>
                <p className="fst-italic py-3">
                  Enfocado en el desarrollo backend y soluciones en la nube, con
                  experiencia en despliegue de aplicaciones y servicios en la
                  nube.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong>Sitio web:</strong>
                        <span>
                          <a href="https://andregarci.github.io/">
                            andregarci.github.io
                          </a>
                        </span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong>Ciudad:</strong> <span>Arequipa - Peru</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      {/*<li>
                        <i className="bi bi-chevron-right"></i>
                        <strong>Título académico:</strong> <span>Egresado</span>
                      </li>*/}
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong>Email:</strong>
                        <span>andre-garci@outlook.com</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="py-3">
                  Con más de 2 años de experiencia en desarrollo de software web
                  y móvil, entregando soluciones de calidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="habilidades" className="habilidades section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Habilidades Blandas</h2>
          </div>

          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6 habilidad-item d-flex"
                data-aos="fade-up"
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-clock"></i>
                </div>
                <div>
                  <h4 className="title">Gestión del Tiempo</h4>
                  <p className="description">
                    Capacidad para priorizar tareas y gestionar el tiempo de
                    manera efectiva.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 habilidad-item d-flex"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-puzzle"></i>
                </div>
                <div>
                  <h4 className="title">Adaptabilidad</h4>
                  <p className="description">
                    Capacidad para adaptarse a cambios y nuevas situaciones.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 habilidad-item d-flex"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-people"></i>
                </div>
                <div>
                  <h4 className="title">Colaboración Efectiva</h4>
                  <p className="description">
                    Habilidad para trabajar en equipo y colaborar con otros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section">
          <div className="container section-title" data-aos="fade-right">
            <h2>Conocimientos</h2>
            <p>
              Experiencia y conocimientos en desarrollo web, movil y tecnologías
              de la nube.
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row skills-content skills-animation">
              <div className="wrapper-container">
                <ul className="wrapper">
                  <li className="skill-item">
                    <img
                      src={iconsSVG["html5.svg"]}
                      alt="HTML5"
                      className="icon-container"
                    />
                    <span className="skill-name">HTML5</span>
                  </li>
                  <li className="skill-item">
                    <img
                      src={iconsSVG["css.svg"]}
                      alt="CSS3"
                      className="icon-container"
                    />
                    <span className="skill-name">CSS3</span>
                  </li>
                  <li className="skill-item">
                    <img
                      src={iconsSVG["javascript.svg"]}
                      alt="JavaScript"
                      className="icon-container"
                    />
                    <span className="skill-name">JavaScript</span>
                  </li>
                  <li className="skill-item">
                    <img
                      src={iconsSVG["typescript.svg"]}
                      alt="TypeScript"
                      className="icon-container"
                    />
                    <span className="skill-name">TypeScript</span>
                  </li>
                  <li className="skill-item">
                    <img
                      src={iconsSVG["flutter.svg"]}
                      alt="Flutter"
                      className="icon-container"
                    />
                    <span className="skill-name">Flutter</span>
                  </li>
                  <li className="skill-item">
                    <img
                      src={iconsSVG["kotlin.svg"]}
                      alt="Kotlin"
                      className="icon-container"
                    />
                    <span className="skill-name">Kotlin</span>
                  </li>
                  <li className="skill-item">
                    <img
                      src={iconsSVG["react.svg"]}
                      alt="React"
                      className="icon-container"
                    />
                    <span className="skill-name">React</span>
                  </li>
                  <li className="skill-item">
                    <img
                      src={iconsSVG["nodejs.svg"]}
                      alt="Node.js"
                      className="icon-container"
                    />
                    <span className="skill-name">Node.js</span>
                  </li>
                  <li className="skill-item">
                    <img
                      src={iconsSVG["docker.svg"]}
                      alt="Docker"
                      className="icon-container"
                    />
                    <span className="skill-name">Docker</span>
                  </li>
                  <li className="skill-item">
                    <img
                      src={iconsSVG["aws.svg"]}
                      alt="AWS"
                      className="icon-container"
                    />
                    <span className="skill-name">AWS</span>
                  </li>
                  <li className="skill-item">
                    <img
                      src={iconsSVG["google-cloud.svg"]}
                      alt="Google Cloud"
                      className="icon-container"
                    />
                    <span className="skill-name">Google Cloud</span>
                  </li>
                  <li className="skill-item">
                    <img
                      src={iconsSVG["mongodb.svg"]}
                      alt="MongoDB"
                      className="icon-container"
                    />
                    <span className="skill-name">MongoDB</span>
                  </li>
                  <li className="skill-item">
                    <img
                      src={iconsSVG["mysql.svg"]}
                      alt="MySQL"
                      className="icon-container"
                    />
                    <span className="skill-name">MySQL</span>
                  </li>
                  <li className="skill-item">
                    <img
                      src={iconsSVG["sqlite.svg"]}
                      alt="SQLite"
                      className="icon-container"
                    />
                    <span className="skill-name">SQLite</span>
                  </li>
                  <li className="skill-item">
                    <img
                      src={iconsSVG["java.svg"]}
                      alt="Java"
                      className="icon-container"
                    />
                    <span className="skill-name">Java</span>
                  </li>
                  <li className="skill-item">
                    <img
                      src={iconsSVG["csharp.svg"]}
                      alt="C#"
                      className="icon-container"
                    />
                    <span className="skill-name">C#</span>
                  </li>
                  <li className="skill-item">
                    <img
                      src={iconsSVG["django.svg"]}
                      alt="Django"
                      className="icon-container"
                    />
                    <span className="skill-name">Django</span>
                  </li>
                  <li className="skill-item">
                    <img
                      src={iconsSVG["vitejs.svg"]}
                      alt="Vite"
                      className="icon-container"
                    />
                    <span className="skill-name">Vite</span>
                  </li>
                  <li className="skill-item">
                    <img
                      src={iconsSVG["linux.svg"]}
                      alt="Linux"
                      className="icon-container"
                    />
                    <span className="skill-name">Linux</span>
                  </li>
                  <li className="skill-item">
                    <img
                      src={iconsSVG["windows.svg"]}
                      alt="Windows"
                      className="icon-container"
                    />
                    <span className="skill-name">Windows</span>
                  </li>
                  <li className="skill-item">
                    <img
                      src={iconsSVG["virtualbox-icon.svg"]}
                      alt="VirtualBox"
                      className="icon-container"
                    />
                    <span className="skill-name">VirtualBox</span>
                  </li>
                  <li className="skill-item">
                    <img
                      src={iconsSVG["vmware-1.svg"]}
                      alt="VMware"
                      className="icon-container"
                    />
                    <span className="skill-name">VMware</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="resume section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Perfil Profesional</h2>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Logros Destacados</h3>

                <div className="resume-item pb-0">
                  <h4>Aplicación Parking Hub </h4>
                  <p>
                    <em>
                      Desarrollada con Flutter, permite compartir
                      estacionamientos no utilizados con otros usuarios,
                      optimizando el uso del espacio y facilitando la búsqueda
                      de estacionamientos disponibles.
                    </em>
                  </p>
                  <br />
                  <h4>Smart Parking </h4>
                  <p>
                    <em>
                      Creación de una interfaz web para visualizar la
                      disponibilidad de espacios de estacionamiento en tiempo
                      real, mejorando la gestión del espacio y la experiencia
                      del usuario.
                    </em>
                  </p>
                  <br />
                  <h4>Monitoreo de Planta Piloto</h4>
                  <p>
                    <em>
                      Implementación de un sistema para analizar y monitorear
                      las vibraciones de una planta piloto, contribuyendo a la
                      optimización de procesos y mantenimiento predictivo.
                    </em>
                  </p>
                </div>

                <h3 className="resume-title">Educación</h3>
                <div className="resume-item">
                  <h4>Tecsup</h4>
                  <h5>Diseño y Desarrollo de Software</h5>
                  <p>
                    <em>2021 - 2024</em>
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Universidad Católica de Santa María </h4>
                  <h5>Ingenieria de Sistemas</h5>
                  <p>
                    <em>2019 - 2021</em>
                  </p>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <h3 className="resume-title">Experiencia profesional</h3>
                <div className="resume-item">
                  <h4>Desarrollador de Software</h4>
                  <h5>Junio 2024 - Septiembre 2024</h5>
                  <p>
                    <em>Health Care Peru EIRL</em>
                  </p>
                  <ul>
                    <li>
                      Mejoré y amplié funcionalidades de la aplicación móvil
                      basada en Flutter.
                    </li>
                    <li>
                      Realicé mantenimiento y actualizaciones en la aplicación
                      de escritorio desarrollada en Visual Basic .NET.
                    </li>
                  </ul>
                </div>

                <div className="resume-item">
                  <h4>Desarrollador Web</h4>
                  <h5>Julio 2023 - Agosto 2023</h5>
                  <p>
                    <em>Grinding Perú</em>
                  </p>
                  <ul>
                    <li>
                      Colaboré en el desarrollo y diseño de la página web
                      informativa de la empresa
                    </li>
                    <li>
                      Fui responsable de la migración del hosting y la
                      publicación de la página web
                    </li>
                  </ul>
                </div>

                <div className="resume-item">
                  <h4>Desarrollador Web</h4>
                  <h5>Noviembre 2022 - Marzo 2023</h5>
                  <p>
                    <em>2&4 SG</em>
                  </p>
                  <ul>
                    <li>Diseñé y desarrollé su página web informativa</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="footer" className="footer position-relative light-background">
        <div className="container">
          <h3 className="sitename">Andre Garcia</h3>
          <p>Nunca es demasiado tarde para hacer lo que amas</p>
        </div>
        <p>
          <em>Actualizado 2024-10-01</em>
        </p>
      </div>
    </>
  );
};

export default Portafolio;
