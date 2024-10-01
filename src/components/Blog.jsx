import React from 'react';
import "./Portafolio.css";

const Blog = () => {
  return (
    <section id="hero" className="hero section light-background">
          <img
            src="https://w.wallhaven.cc/full/9d/wallhaven-9dk7mk.png"
            alt=""
          />

          <div className="container" data-aos="zoom-out">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <p>
                  <span
                    className="typed"
                    data-typed-items="Designer, Developer, Freelancer, Photographer"
                  >
                    Pronto...
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

export default Blog;