import React from "react";

const HeroSection = () => {
  return (
    <section id="hero" className="hero section light-background">
      <img
        src="https://w.wallhaven.cc/full/3k/wallhaven-3kr5y6.png"
        alt=""
      />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2>Andre Garcia</h2>
            <p>
              <span
                className="typed"
                data-typed-items="Designer, Developer, Freelancer, Photographer"
              >
                Programador
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