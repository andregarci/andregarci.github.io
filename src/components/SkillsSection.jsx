import iconsSVG from "../hooks/IconsSVG";

// Datos de habilidades organizados por categorías
const skillsData = [
  { name: "HTML5", icon: "html5.svg" },
  { name: "CSS3", icon: "css.svg" },
  { name: "JavaScript", icon: "javascript.svg" },
  { name: "TypeScript", icon: "typescript.svg" },
  { name: "React", icon: "react.svg" },
  { name: "Node.js", icon: "nodejs.svg" },
  { name: "Java", icon: "java.svg" },
  { name: "C#", icon: "csharp.svg" },
  { name: "Django", icon: "django.svg" },
  { name: "Kotlin", icon: "kotlin.svg" },
  { name: "Flutter", icon: "flutter.svg" },
  { name: "MongoDB", icon: "mongodb.svg" },
  { name: "MySQL", icon: "mysql.svg" },
  { name: "SQLite", icon: "sqlite.svg" },
  { name: "Docker", icon: "docker.svg" },
  { name: "AWS", icon: "aws.svg" },
  { name: "Google Cloud", icon: "google-cloud.svg" },
  { name: "Linux", icon: "linux.svg" },
  { name: "Windows", icon: "windows.svg" },
  { name: "VMware", icon: "vmware-1.svg" },
  { name: "VirtualBox", icon: "virtualbox-icon.svg" },
  { name: "Vite", icon: "vitejs.svg" },
];

// Componente para mostrar una habilidad individual
const SkillItem = ({ name, icon }) => (
  <li className="skill-item">
    <img
      src={iconsSVG[icon]}
      alt={name}
      className="icon-container"
    />
    <span className="skill-name">{name}</span>
  </li>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container section-title">
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
              {skillsData.map((skill, index) => (
                <SkillItem 
                  key={index}
                  name={skill.name} 
                  icon={skill.icon} 
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;