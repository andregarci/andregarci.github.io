import React, { lazy, Suspense } from "react";
import "./loader.css";

const Portafolio = lazy(() => import("./components/Portafolio"));

function App() {
  return (
    <Suspense fallback={<div className="loader"></div>}>
      <Portafolio />
    </Suspense>
  );
}

export default App;
