import { PLANETS } from "../data/planets";
import PlanetCard from "../components/PlanetCard";

export default function Home() {
    return (
        <div className="page page--home">

            {/* HERO (you were missing this completely) */}
            <section className="hero">
                <div className="hero__content">
                    <h1 className="hero__title">
                        Explore the <span className="gradient-text">Cosmos</span>
                    </h1>
                    <p className="hero__subtitle">
                        Journey through our solar system.
                    </p>
                </div>
            </section>

            {/* PLANETS */}
            <section className="section">
                <div className="section__header">
                    <h2 className="section__title">The Eight Planets</h2>
                    <p className="section__subtitle">
                        Click any planet to explore in detail
                    </p>
                </div>

                <div className="planets-grid">
                    {PLANETS.map((planet) => (
                        <PlanetCard key={planet.id} planet={planet} />
                    ))}
                </div>
            </section>

        </div>
    );
}
