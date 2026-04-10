import { useEffect, useRef } from "react";
import { SolarSystem } from "./SolarSystem";
import { useNavigate } from "react-router-dom";

export default function SolarSystemCanvas() {
    const canvasRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;

        // 🌌 REAL SYSTEM
        const system = new SolarSystem(canvas, (id) => {
            navigate(`/planet/${id}`);
        });
        system.start();

        // 🖱️ CLICK HANDLER (REAL — not hack)
        const handleClick = (e) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            // 🔥 IMPORTANT: this must exist in SolarSystem.js
            system.planets.forEach((planet) => {
                const dx = mouseX - planet.x;
                const dy = mouseY - planet.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < planet.radius) {
                    navigate(`/planet/${planet.id}`);
                }
            });
        };

        canvas.addEventListener("click", handleClick);

        return () => {
            system.stop();
            canvas.removeEventListener("click", handleClick);
        };

    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: "100%",
                height: "800px",
                cursor: "pointer",
            }}
        />
    );
}
