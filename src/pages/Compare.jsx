import { useState } from "react";
import { PLANETS } from "../data/planets";

export default function Compare() {
    const [planetA, setPlanetA] = useState("");
    const [planetB, setPlanetB] = useState("");

    const pA = PLANETS.find(p => p.id === planetA);
    const pB = PLANETS.find(p => p.id === planetB);

    return (
        <div className="page page--compare">

            <section className="section">

                {/* HEADER */}
                <div className="section__header">
                    <h2 className="section__title">⚖️ Planet Comparison Tool</h2>
                    <p className="section__subtitle">
                        Select two planets to compare their properties
                    </p>
                </div>

                {/* SELECTORS */}
                <div className="compare-selectors">

                    <div className="compare-selector">
                        <label>Planet A</label>
                        <select
                            className="planet-select"
                            value={planetA}
                            onChange={(e) => setPlanetA(e.target.value)}
                        >
                            <option value="">-- Choose Planet --</option>
                            {PLANETS.map(p => (
                                <option key={p.id} value={p.id}>
                                    {p.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="compare-vs">VS</div>

                    <div className="compare-selector">
                        <label>Planet B</label>
                        <select
                            className="planet-select"
                            value={planetB}
                            onChange={(e) => setPlanetB(e.target.value)}
                        >
                            <option value="">-- Choose Planet --</option>
                            {PLANETS.map(p => (
                                <option key={p.id} value={p.id}>
                                    {p.name}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>

                {/* RESULT */}
                {pA && pB && (
                    <div className="compare-result">

                        {/* PLANET CARDS */}
                        <div className="compare-cards">

                            <div
                                className="compare-planet"
                                style={{ "--planet-color": pA.color }}
                            >
                                <div
                                    className="compare-planet__img"
                                    style={{
                                        backgroundImage: `url(${pA.image})`
                                    }}
                                />
                                <h3>{pA.name}</h3>
                            </div>

                            <div
                                className="compare-planet"
                                style={{ "--planet-color": pB.color }}
                            >
                                <div
                                    className="compare-planet__img"
                                    style={{
                                        backgroundImage: `url(${pB.image})`
                                    }}
                                />
                                <h3>{pB.name}</h3>
                            </div>

                        </div>

                        {/* COMPARISON TABLE */}
                        <div className="compare-table">

                            <div className="compare-row">
                                <div className="compare-cell compare-cell--a">
                                    {pA.stats.diameter}
                                </div>
                                <div className="compare-cell compare-cell--label">
                                    Diameter
                                </div>
                                <div className="compare-cell compare-cell--b">
                                    {pB.stats.diameter}
                                </div>
                            </div>

                            <div className="compare-row">
                                <div className="compare-cell compare-cell--a">
                                    {pA.stats.gravity}
                                </div>
                                <div className="compare-cell compare-cell--label">
                                    Gravity
                                </div>
                                <div className="compare-cell compare-cell--b">
                                    {pB.stats.gravity}
                                </div>
                            </div>

                            <div className="compare-row">
                                <div className="compare-cell compare-cell--a">
                                    {pA.stats.temperature}
                                </div>
                                <div className="compare-cell compare-cell--label">
                                    Temperature
                                </div>
                                <div className="compare-cell compare-cell--b">
                                    {pB.stats.temperature}
                                </div>
                            </div>

                            <div className="compare-row">
                                <div className="compare-cell compare-cell--a">
                                    {pA.stats.moons}
                                </div>
                                <div className="compare-cell compare-cell--label">
                                    Moons
                                </div>
                                <div className="compare-cell compare-cell--b">
                                    {pB.stats.moons}
                                </div>
                            </div>

                        </div>

                    </div>
                )}

            </section>
        </div>
    );
}
