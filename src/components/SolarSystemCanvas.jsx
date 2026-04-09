import { useEffect, useRef } from "react";
import { SolarSystem } from "./SolarSystem";

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
