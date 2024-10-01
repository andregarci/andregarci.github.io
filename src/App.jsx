import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import './loader.css'

const Home = lazy(() => import('./components/Home'));
const Blog = lazy(() => import('./components/Blog'));
const Portafolio = lazy(() => import('./components/Portafolio'));

function App() {
  return (
    <Suspense fallback={<div className="loader"></div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portafolio" element={<Portafolio />} />
      </Routes>
    </Suspense>
  );
}

export default App;