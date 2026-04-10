import { PLANETS } from "../data/planets";
import PlanetCard from "../components/PlanetCard";

export default function Explore() {
    return (
        <div className="page">

            <div className="container">

                <div className="section__header">
                    <h2 className="section__title">🚀 Explore All Planets</h2>
                    <p className="section__subtitle">
                        Your complete guide to the solar system
                    </p>
                </div>

                <div className="planets-grid">
                    {PLANETS.map((planet) => (
                        <PlanetCard key={planet.id} planet={planet} />
                    ))}
                </div>

            </div>

        </div>
    );
}
