import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { useEffect, useRef } from "react";
import Stars from "./components/Stars"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PlanetPage from "./pages/PlanetPage";
import SolarSystem from "./pages/SolarSystem";
import Compare from "./pages/Compare";
import Explore from "./pages/Explore";
import "./styles/main.css"

function App() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return;

    const stars = new Stars(canvasRef.current);
    stars.start();

    return () => stars.stop();
  }, []);
  return (
    <BrowserRouter>
      <canvas id="starsCanvas" ref={canvasRef}></canvas>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planet/:id" element={<PlanetPage />} />
        <Route path="/solar-system" element={<SolarSystem />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
