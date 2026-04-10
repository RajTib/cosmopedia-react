import SolarSystemCanvas from "../components/SolarSystemCanvas";

export default function SolarSystem() {
    return (
        <div className="page page--solar">

            <div className="section__header">
                <h2 className="section__title">Interactive Solar System</h2>
                <p className="section__subtitle">
                    Click on any planet to explore it
                </p>
            </div>

            <div className="solar-fullscreen">
                <SolarSystemCanvas />
            </div>

        </div>
    );
}
