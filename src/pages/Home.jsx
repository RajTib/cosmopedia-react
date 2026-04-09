import { PLANETS } from "../data/planets";
import PlanetCard from "../components/PlanetCard";
import SolarSystemCanvas from "../components/SolarSystemCanvas";

export default function Home() {
    console.log(PLANETS)
    return (
        <div className="page page--home">

            <section className="hero">

                {/* LEFT SIDE */}
                <div className="hero__content">

                    <div className="hero__eyebrow">
                        • SOLAR SYSTEM ENCYCLOPEDIA
                    </div>

                    <h1 className="hero__title">
                        Explore the <br />
                        <span className="gradient-text">Cosmos</span>
                    </h1>

                    <p className="hero__subtitle">
                        Journey through our solar system. Discover facts, listen to narrations,
                        compare planets, and explore the universe like never before.
                    </p>

                    {/* 🔥 BUTTONS (YOU WERE MISSING THIS) */}
                    <div className="hero__actions">
                        <button className="btn btn--primary">
                            🚀 Start Exploring
                        </button>

                        <button className="btn btn--outline">
                            🪐 Solar System View
                        </button>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="hero__visual">
                    <SolarSystemCanvas />
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

                {/* SEARCH + FILTER (UI only for now) */}
                <div className="filter-bar">

                    <div className="search-wrapper">
                        <span className="search-icon">🔍</span>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search planets..."
                        />
                    </div>

                    <div className="filter-pills">
                        <button className="filter-pill active">All</button>
                        <button className="filter-pill">🪨 Rocky</button>
                        <button className="filter-pill">💨 Gas Giants</button>
                        <button className="filter-pill">❄️ Ice Giants</button>
                    </div>

                </div>

                {/* PLANET GRID */}
                <div className="planets-grid">
                    {PLANETS.map((planet) => (
                        <PlanetCard key={planet.id} planet={planet} />
                    ))}
                </div>

            </section>
        </div>
    );
}
