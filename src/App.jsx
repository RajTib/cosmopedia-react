import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
import Stars from "./components/Stars"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
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
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
