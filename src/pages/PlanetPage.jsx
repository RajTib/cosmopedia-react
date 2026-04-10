import { useParams } from "react-router-dom";
import { PLANETS } from "../data/planets";
import { useRef, useState } from "react";

function AudioPlayer({ src, name }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <div className={`audio-player ${isPlaying ? "is-playing" : ""}`}>

            <div className="audio-player__header">
                <span className="audio-player__icon">🔊</span>
                <span className="audio-player__title">
                    {name} — Audio Narration
                </span>
                <span className="audio-player__badge">NARRATION</span>
            </div>

            <div className="audio-player__controls">
                <button className="audio-btn" onClick={() => audioRef.current.currentTime -= 10}>
                    ⏪
                </button>

                <button className="audio-btn audio-btn--play" onClick={togglePlay}>
                    {isPlaying ? "⏸" : "▶"}
                </button>

                <button className="audio-btn" onClick={() => audioRef.current.currentTime += 10}>
                    ⏩
                </button>
            </div>

            {/* Hidden actual audio */}
            <audio ref={audioRef} src={`/${src}`} />

        </div>
    );
}

export default function PlanetPage() {
    const { id } = useParams();
    const planet = PLANETS.find(p => p.id === id);

    if (!planet) return <h2>Planet not found</h2>;

    return (
        <div
            className="planet-page"
            style={{
                "--planet-color": planet.color,
                "--planet-glow": planet.glowColor
            }}
        >

            {/* HERO */}
            <section className="planet-hero">

                {/* LEFT */}
                <div className="planet-hero__left">

                    <p className="planet-hero__eyebrow">
                        {planet.type.toUpperCase()} PLANET
                    </p>

                    <h1 className="planet-hero__title">
                        {planet.name}
                    </h1>

                    <p className="planet-hero__tagline">
                        {planet.tagline}
                    </p>

                    <p className="planet-hero__desc">
                        {planet.description}
                    </p>

                    <div className="planet-hero__actions">
                        <button className="btn btn--primary">
                            🔊 Listen to Narration
                        </button>

                        <button className="btn btn--outline">
                            ⭐ Add to Favorites
                        </button>
                    </div>

                    <div className="fun-fact-box">
                        <span className="fun-fact-icon">💡</span>
                        <p>{planet.funFact}</p>
                    </div>

                </div>

                {/* RIGHT (PLANET) */}
                <div className="planet-hero__right">

                    <div
                        className="planet-display"
                        style={{
                            backgroundImage: `url(/${planet.image})`
                        }}
                    >
                        <div className="planet-display__glow"></div>
                    </div>

                </div>

            </section>

            {/* STATS */}
            <section className="section">
                <h2 className="section__title">Planetary Statistics</h2>

                <div className="stats-grid">
                    {Object.entries(planet.stats).map(([key, value]) => (
                        <div className="stat-card" key={key}>
                            <p className="stat-card__label">{key}</p>
                            <p className="stat-card__value">{value}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FACTS */}
            <section className="section">
                <h2 className="section__title">Key Facts</h2>

                <div className="facts-list">
                    {planet.facts.map((fact, i) => (
                        <div className="fact-item visible" key={i}>
                            <span className="fact-number">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <p className="fact-text">{fact}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* AUDIO */}
            <section className="section">
                <h2 className="section__title">🔊 Audio Narration</h2>

                <AudioPlayer
                    src={planet.audio}
                    name={planet.name}
                />
            </section>

            {/* CTA */}
            <section className="compare-cta">
                <div className="compare-cta__inner">
                    <h2>
                        Want to compare {planet.name} with other planets?
                    </h2>

                    <a href="/compare" className="btn btn--primary">
                        ⚖️ Open Comparison Tool
                    </a>
                </div>
            </section>

        </div>
    );
}
