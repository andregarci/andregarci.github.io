const ResumeSection = () => {
  return (
    <section id="resume" className="resume section">
    <div className="container section-title">
      <h2>Perfil Profesional</h2>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-lg-6">
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

        <div className="col-lg-6">
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
  );
};

export default ResumeSection;