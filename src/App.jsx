import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import './loader.css'



const Home = lazy(() => import('./components/Home'));
const Blog = lazy(() => import('./components/Blog'));
const Portafolio = lazy(() => import('./components/Portafolio'));

{/* Post Blog*/}
const Arch = lazy(() => import('./components/blog/Arch'));
const Vite_ghpages = lazy(() => import('./components/blog/Vitegh-pages'));


function App() {
  return (
    <Suspense fallback={<div className="loader"></div>}>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Blog />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/blog/arch" element={<Arch />} />
        <Route path="/blog/vite_gh-pages" element={<Vite_ghpages />} />
      </Routes>
    </Suspense>
  );
}

export default App;