import { useParams } from "react-router-dom";
import { PLANETS } from "../data/planets";

export default function PlanetPage() {
    const { id } = useParams();
    const planet = PLANETS.find(p => p.id === id);

    if (!planet) return <h2>Planet not found</h2>;

    return (
        <div className="planet-page">

            {/* HERO */}
            <section className="planet-hero">
                <div className="planet-hero__content">
                    <h1>{planet.name}</h1>
                    <p>{planet.tagline}</p>
                </div>

                <div
                    className="planet-hero__image"
                    style={{
                        backgroundImage: `url(/${planet.image})`
                    }}
                />
            </section>

            {/* DETAILS */}
            <section className="planet-details">
                <div className="planet-stats">
                    {Object.entries(planet.stats).map(([key, value]) => (
                        <div className="stat" key={key}>
                            <strong>{key}:</strong> {value}
                        </div>
                    ))}
                </div>

                <p className="planet-description">
                    {planet.description || "No description yet"}
                </p>

                <div className="planet-fun-fact">
                    {planet.funFact}
                </div>

            </section>

        </div>
    );
}
