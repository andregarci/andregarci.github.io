import { motion } from "framer-motion";
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

// Variantes de animación para el contenedor de la lista
const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Aplica un retraso de 0.1s entre cada hijo
    },
  },
};

// Variantes de animación para cada item de la lista
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Componente para mostrar una habilidad individual
const SkillItem = ({ name, icon }) => (
  <motion.li className="skill-item" variants={itemVariants}>
    <img
      src={iconsSVG[icon]}
      alt={name}
      className="icon-container"
    />
    <span className="skill-name">{name}</span>
  </motion.li>
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
        <div className="row skills-content">
          <div className="wrapper-container">
            <motion.ul
              className="wrapper"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skillsData.map((skill, index) => (
                <SkillItem 
                  key={index}
                  name={skill.name} 
                  icon={skill.icon} 
                />
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;