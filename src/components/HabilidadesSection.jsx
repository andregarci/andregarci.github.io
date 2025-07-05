import { motion } from "framer-motion";

const softSkills = [
  {
    icon: "bi-clock",
    title: "Gestión del Tiempo",
    description:
      "Capacidad para priorizar tareas y gestionar el tiempo de manera efectiva.",
  },
  {
    icon: "bi-puzzle",
    title: "Adaptabilidad",
    description: "Capacidad para adaptarse a cambios y nuevas situaciones.",
  },
  {
    icon: "bi-people",
    title: "Colaboración Efectiva",
    description: "Habilidad para trabajar en equipo y colaborar con otros.",
  },
];

// Componente para mostrar una habilidad individual
const SkillItem = ({ icon, title, description }) => (
  <div className="col-lg-4 col-md-6 habilidad-item d-flex">
    <div className="icon flex-shrink-0">
      <i className={`bi ${icon}`}></i>
    </div>
    <div>
      <h4 className="title">{title}</h4>
      <p className="description">{description}</p>
    </div>
  </div>
);

const HabilidadesSection = () => {
  return (
    <motion.section
      id="habilidades"
      className="habilidades section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container section-title">
        <h2>Habilidades Blandas</h2>
      </div>

      <div className="container">
        <div className="row gy-4">
          {softSkills.map((skill, index) => (
            <SkillItem
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HabilidadesSection;