import { motion } from "framer-motion";

const ResumeSection = () => {
  return (
    <motion.section
      id="resume"
      className="resume section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container section-title">
        <h2>Perfil Profesional</h2>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Logros Destacados</h3>
            <div className="resume-item">
              <h4>Aplicación Parking Hub </h4>
              <p>
                <em>
                  Desarrollada con Flutter, permite compartir
                  estacionamientos no utilizados con otros usuarios,
                  optimizando el uso del espacio y facilitando la búsqueda
                  de estacionamientos disponibles.
                </em>
              </p>
            </div>
              <div className="resume-item">
              <h4>Smart Parking </h4>
              <p>
                <em>
                  Creación de una interfaz web para visualizar la
                  disponibilidad de espacios de estacionamiento en tiempo
                  real, mejorando la gestión del espacio y la experiencia
                  del usuario.
                </em>
              </p>
              </div>
              <div className="resume-item">
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

          <div className="col-lg-6">
            <h3 className="resume-title">Experiencia profesional</h3>
            <div className="resume-item">
              <h4>Programador Web</h4>
              <h5>Febrero 2025 - Abril 2025</h5>
              <p>
                <em>2 & 4 E.I.R.L</em>
              </p>
              <ul>
                <li>
                  Jornada parcial, modalidad híbrida
                </li>
                <li>
                  Desarrollo con React.js y otras tecnologías web
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Analista de Producción</h4>
              <h5>Noviembre 2024 - Enero 2025</h5>
              <p>
                <em>Caja Arequipa</em>
              </p>
              <ul>
                <li>
                  Jornada completa, modalidad presencial
                </li>
                <li>
                  Trabajo con PowerShell y Directorio activo
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Programador Full Stack</h4>
              <h5>Junio 2024 - Septiembre 2024</h5>
              <p>
                <em>Health Care Peru EIRL</em>
              </p>
              <ul>
                <li>
                  Contrato de prácticas, modalidad presencial
                </li>
                <li>
                  Desarrollo con Flutter, Node.js y otras tecnologías
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Pasante de Software</h4>
              <h5>Julio 2023 - Agosto 2023</h5>
              <p>
                <em>Grinding Perú</em>
              </p>
              <ul>
                <li>
                  Jornada completa, modalidad presencial
                </li>
                <li>
                  Desarrollo y mantenimiento de aplicaciones
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ResumeSection;