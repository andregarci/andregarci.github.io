import{r,j as e}from"./index-DEvUqGj7.js";import{A as s,C as i}from"./AdSpace-hZBvhL1I.js";function t(){return r.useEffect(()=>{document.title="Despliegue de Vite"},[]),e.jsxs("div",{className:"container my-5",children:[e.jsx("div",{className:"row justify-content-center",children:e.jsxs("div",{className:"col-md-10",children:[e.jsx("h1",{className:"text-center mb-4 page-title",children:"Desplegar una Aplicación Vite en GitHub Pages"}),e.jsx(s,{position:"top"}),e.jsxs("ol",{className:"list-group",children:[e.jsxs("li",{className:"list-group-item",children:[e.jsx("h5",{children:"Configurar el proyecto Vite para GitHub Pages"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Abre el archivo ",e.jsx("code",{children:"vite.config.js"})," y ajusta la propiedad ",e.jsx("code",{children:"base"}),":"]}),e.jsxs("li",{children:["Si el proyecto está en la raíz (por ejemplo,"," ",e.jsx("code",{children:"https://tu-usuario.github.io/"}),"), configura así:",e.jsx("pre",{className:"alert alert-dark",children:`// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Esto indica que el proyecto está en la raíz
});
`})]}),e.jsxs("li",{children:["Si el proyecto está en un subdirectorio (por ejemplo,"," ",e.jsx("code",{children:"https://tu-usuario.github.io/tu-repo/"}),"), configura así:",e.jsx("pre",{className:"alert alert-dark",children:`// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/tu-repo/', // Esto indica que el proyecto está en un subdirectorio
});
`})]}),e.jsx("li",{children:"Actualiza el repositorio"})]})]}),e.jsxs("li",{className:"list-group-item",children:[e.jsx("h5",{children:"Instalar gh-pages"}),e.jsx("ul",{children:e.jsxs("li",{children:["Ejecuta el siguiente comando para instalar"," ",e.jsx("code",{children:"gh-pages"})," como dependencia de desarrollo:",e.jsx(i,{command:"npm install gh-pages --save-dev"})]})})]}),e.jsxs("li",{className:"list-group-item",children:[e.jsxs("h5",{children:["Actualizar ",e.jsx("code",{children:"package.json"})]}),e.jsx("ul",{children:e.jsxs("li",{children:["Agrega los siguientes scripts en ",e.jsx("code",{children:"package.json"}),":",e.jsx("pre",{className:"alert alert-dark",children:`"scripts": {
  ....
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist",
  ...
},`})]})})]}),e.jsxs("li",{className:"list-group-item",children:[e.jsx("h5",{children:"Ejecutar el despliegue"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Ejecuta el siguiente comando:",e.jsx(i,{command:"npm run deploy"})]}),e.jsx("li",{children:"Esto realizará el despliegue de tu aplicación en GitHub Pages."})]})]}),e.jsxs("li",{className:"list-group-item",children:[e.jsx("h5",{children:"Configura GitHub Pages en el repositorio"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["En tu repositorio de GitHub, ve a"," ",e.jsx("strong",{children:"Settings > Pages"}),". En la sección"," ",e.jsx("strong",{children:"Source"}),", selecciona la rama"," ",e.jsx("code",{children:"gh-pages"})," y la carpeta raíz (",e.jsx("code",{children:"/root"}),")."]}),e.jsx("li",{children:"GitHub procesará el despliegue, y después de unos minutos tu aplicación debería estar disponible en unos minutos."})]})]})]})]})}),e.jsx(s,{position:"bottom"})]})}export{t as default};
