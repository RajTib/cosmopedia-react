import { PLANETS } from "../data/planets";
import PlanetCard from "../components/PlanetCard";
import SolarSystemCanvas from "../components/SolarSystemCanvas";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

    // 🔥 STATE
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const navigate = useNavigate();

    // 🔥 FILTER LOGIC
    const filteredPlanets = PLANETS.filter((planet) => {
        const matchesSearch = planet.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesFilter =
            filter === "all" || planet.type === filter;

        return matchesSearch && matchesFilter;
    });

    return (
        <div className="page page--home">

            {/* HERO */}
            <section className="hero">

                {/* LEFT */}
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

                    {/* ✅ WORKING BUTTONS */}
                    <div className="hero__actions">

                        <button
                            className="btn btn--primary"
                            onClick={() => {
                                document.getElementById("planets").scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                        >
                            🚀 Start Exploring
                        </button>

                        <button
                            className="btn btn--outline"
                            onClick={() => navigate("/solar-system")}
                        >
                            🪐 Solar System View
                        </button>

                    </div>

                </div>

                {/* RIGHT */}
                <div className="hero__visual" id="solar">
                    <SolarSystemCanvas />
                </div>

            </section>

            {/* PLANETS */}
            <section className="section" id="planets">

                <div className="section__header">
                    <h2 className="section__title">The Eight Planets</h2>
                    <p className="section__subtitle">
                        Click any planet to explore in detail
                    </p>
                </div>

                {/* 🔍 SEARCH + FILTER */}
                <div className="filter-bar">

                    <div className="search-wrapper">
                        <span className="search-icon">🔍</span>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search planets..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="filter-pills">

                        <button
                            className={`filter-pill ${filter === "all" ? "active" : ""}`}
                            onClick={() => setFilter("all")}
                        >
                            All
                        </button>

                        <button
                            className={`filter-pill ${filter === "rocky" ? "active" : ""}`}
                            onClick={() => setFilter("rocky")}
                        >
                            🪨 Rocky
                        </button>

                        <button
                            className={`filter-pill ${filter === "gas_giant" ? "active" : ""}`}
                            onClick={() => setFilter("gas_giant")}
                        >
                            💨 Gas Giants
                        </button>

                        <button
                            className={`filter-pill ${filter === "ice_giant" ? "active" : ""}`}
                            onClick={() => setFilter("ice_giant")}
                        >
                            ❄️ Ice Giants
                        </button>

                    </div>

                </div>

                {/* 🌍 PLANETS GRID */}
                <div className="planets-grid">
                    {filteredPlanets.map((planet) => (
                        <PlanetCard key={planet.id} planet={planet} />
                    ))}
                </div>

            </section>

        </div>
    );
}
