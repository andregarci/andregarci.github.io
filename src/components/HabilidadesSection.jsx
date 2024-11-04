import React from "react";

const HabilidadesSection = () => {
  return (
    <section id="habilidades" className="habilidades section">
          <div className="container section-title">
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
  );
};

export default HabilidadesSection;