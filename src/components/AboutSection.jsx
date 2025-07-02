const AboutSection = () => {
  return (
    <section id="about" className="about section">
          <div className="container section-title">
            <h2>Acerca de</h2>
            <p>
              Estudiante de Diseño y Desarrollo de Software con experiencia en desarrollo backend y soluciones en la nube. Hábil en la resolución de problemas y adaptación a nuevas tecnologías.
            </p>
          </div>

          <div className="container">
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
  );
};

export default AboutSection;