import { motion } from "framer-motion";

const heroData = {
  backgroundImage: "https://w.wallhaven.cc/full/3k/wallhaven-3kr5y6.png",
  name: "Andre Garcia",
  typedItems: ["Designer", "Developer", "Freelancer", "Photographer"],
  currentRole: "Programador"
};

// Componente HeroSection para la sección inicial del portafolio
const HeroSection = () => {
  return (
    <motion.section
      id="hero"
      className="hero section light-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={heroData.backgroundImage}
        alt="Hero background"
      />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2>{heroData.name}</h2>
            <p>
              <span
                className="typed"
                data-typed-items={heroData.typedItems.join(", ")}
              >
                {heroData.currentRole}
              </span>
              <span
                className="typed-cursor typed-cursor--blink"
                aria-hidden="true"
              ></span>
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;