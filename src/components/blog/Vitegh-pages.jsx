import React, { useEffect } from "react";
import "./BlogStyle.css";
import ConsoleView from "./ConsoleView";
import AdSpace from "./AdSpace";
import { useImages } from "../../hooks/useImages";

function ViteDeployment() {
  const images = useImages();

  useEffect(() => {
    document.title = "Despliegue de Vite";
  }, []);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h1 className="text-center mb-4 page-title">
            Desplegar una Aplicación Vite en GitHub Pages
          </h1>
          <AdSpace position="top" />
          <ol className="list-group">
            {/* Configuración de vite.config.js */}
            <li className="list-group-item">
              <h5>Configurar el proyecto Vite para GitHub Pages</h5>
              <ul>
                <li>
                  Abre el archivo <code>vite.config.js</code> y ajusta la
                  propiedad <code>base</code>:
                </li>
                <li>
                  Si el proyecto está en la raíz (por ejemplo,{" "}
                  <code>https://tu-usuario.github.io/</code>), configura así:
                  <pre className="alert alert-dark">
                    {`// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Esto indica que el proyecto está en la raíz
});
`}
                  </pre>
                </li>
                <li>
                  Si el proyecto está en un subdirectorio (por ejemplo,{" "}
                  <code>https://tu-usuario.github.io/tu-repo/</code>), configura
                  así:
                  <pre className="alert alert-dark">
                    {`// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/tu-repo/', // Esto indica que el proyecto está en un subdirectorio
});
`}
                  </pre>
                </li>
                <li>Actualiza el repositorio</li>
              </ul>
            </li>
            {/* Instalar gh-pages */}
            <li className="list-group-item">
              <h5>Instalar gh-pages</h5>
              <ul>
                <li>
                  Ejecuta el siguiente comando para instalar{" "}
                  <code>gh-pages</code> como dependencia de desarrollo:
                  <ConsoleView command="npm install gh-pages --save-dev" />
                </li>
              </ul>
            </li>

            {/* Actualizar package.json */}
            <li className="list-group-item">
              <h5>
                Actualizar <code>package.json</code>
              </h5>
              <ul>
                <li>
                  Agrega los siguientes scripts en <code>package.json</code>:
                  <pre className="alert alert-dark">
                    {`"scripts": {
  ....
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist",
  ...
},`}
                  </pre>
                </li>
              </ul>
            </li>

            {/* Ejecutar el despliegue */}
            <li className="list-group-item">
              <h5>Ejecutar el despliegue</h5>
              <ul>
                <li>
                  Ejecuta el siguiente comando:
                  <ConsoleView command="npm run deploy" />
                </li>
                <li>
                  Esto realizará el despliegue de tu aplicación en GitHub Pages.
                </li>
              </ul>
            </li>
            {/* Configura GitHub Pages en el repositorio */}
            <li className="list-group-item">
              <h5>Configura GitHub Pages en el repositorio</h5>
              <ul>
                <li>
                  En tu repositorio de GitHub, ve a{" "}
                  <strong>Settings &gt; Pages</strong>. En la sección{" "}
                  <strong>Source</strong>, selecciona la rama{" "}
                  <code>gh-pages</code> y la carpeta raíz (<code>/root</code>).
                </li>
                <li>
                  GitHub procesará el despliegue, y después de unos minutos tu
                  aplicación debería estar disponible en unos minutos.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
      <AdSpace position="bottom" />
    </div>
  );
}

export default ViteDeployment;
