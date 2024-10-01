import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import Typed from "typed.js";
import "./Home.css";

const Home = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Web", "Linux", "Mobile"],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 2500,
      startDelay: 1000,
      loop: true,
      showCursor: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <div className="site-blocks-cover">
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-md-12" data-aos="fade-up" data-aos-delay="400">
            <div className="row justify-content-center mb-4">
              <div className="col-md-10 text-center">
                <h1>
                  Desarrollador <span ref={typedElement}></span>
                </h1>
                <p className="lead mb-5">
                Apasionado por crear soluciones innovadoras en aplicaciones web
                y móviles. Explora mi portafolio para conocer más.
                </p>
                <div className="enlaces">
                <Link to="/portafolio"><li className="btn btn-primary btn-md">Portafolio</li></Link>
                <Link to="/blog"><li className="btn btn-primary btn-md" >Blog</li></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
