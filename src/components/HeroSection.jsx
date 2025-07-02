const heroData = {
  backgroundImage: "https://w.wallhaven.cc/full/3k/wallhaven-3kr5y6.png",
  name: "Andre Garcia",
  typedItems: ["Designer", "Developer", "Freelancer", "Photographer"],
  currentRole: "Programador"
};

// Componente HeroSection para la sección inicial del portafolio
const HeroSection = () => {
  return (
    <section id="hero" className="hero section light-background">
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
    </section>
  );
};

export default HeroSection;