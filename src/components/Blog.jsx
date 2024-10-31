import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog";
  }, []);
  const blogPosts = [
    {
      category: "Linux",
      title: "Tutorial sobre Arch Linux",
      description: "Guía paso a paso para instalar Arch Linux en sistemas UEFI y BIOS.",
      image: "https://w.wallhaven.cc/full/8x/wallhaven-8x2d11.png",
      url: "/blog/arch",
    },
    {
      category: "Despliegue",
      title: "Despliegue de una aplicación Vite en GitHub Pages",
      description: "Guía paso a paso para desplegar una aplicación Vite en GitHub Pages.",
      image: "https://w.wallhaven.cc/full/47/wallhaven-47klv3.jpg",
      url: "/blog/vite_gh-pages"
      },
  ];

  const [searchText, setSearchText] = useState("");

  // Función para filtrar los posts
  const filterPosts = (posts, query) => {
    if (!query) {
      return posts;
    }
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.category.toLowerCase().includes(query.toLowerCase())
    );
  };

  // Aplicar el filtro a los posts
  const filteredPosts = filterPosts(blogPosts, searchText);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="col text-center mb-5">
            <h2 className="display-4 font-weight-bolder">Blog</h2>
            <p className="lead">Busca entre las publicaciones.</p>
            <br />
            {/* Barra de búsqueda */}
            <div className="form">
              <i className="fa fa-search"></i>
              <input
                type="text"
                className="form-control form-input"
                placeholder="Buscar..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card text-dark card-has-bg click-col">
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-body">
                      <small className="card-meta mb-2">{post.category}</small>
                      <h4 className="card-title mt-0">
                        <Link className="text-dark" to={post.url}>
                          {post.title}
                        </Link>
                      </h4>
                      <small>
                        <i className="far fa-clock"></i> {post.description}
                      </small>
                    </div>
                    <div className="card-footer">
                      <div className="media">
                        <img
                          className="mr-3 rounded-circle"
                          src={post.image}
                          alt="Generic placeholder"
                          style={{ maxWidth: "50px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col">
              <p>No se encontraron publicaciones.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
