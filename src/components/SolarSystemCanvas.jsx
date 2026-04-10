import { useEffect, useRef } from "react";
import { SolarSystem } from "./SolarSystem";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate;

export default function SolarSystemCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const system = new SolarSystem(canvasRef.current);
        system.start();

        return () => system.stop(); // cleanup
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                width: "100%",
                height: "800px",
            }}
        />
    );
}
