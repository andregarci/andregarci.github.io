import React from "react";
import iconsSVG from "../hooks/IconsSVG";


const SkillsSection = () => {
  return (
    <section id="skills" className="skills section">
          <div className="container section-title" >
            <h2>Conocimientos</h2>
            <p>
              Experiencia y conocimientos en desarrollo web, movil y tecnologías
              de la nube.
            </p>
          </div>

          <div className="container">
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
  );
};

export default SkillsSection;