import { useParams } from "react-router-dom";
import { PLANETS } from "../data/planets";
import { useRef, useState, useEffect, forwardRef } from "react";

/* ================= AUDIO PLAYER ================= */
const AudioPlayer = forwardRef(({ src, name }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (!ref.current) return;

        if (isPlaying) {
            ref.current.pause();
        } else {
            ref.current.play();
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
                <button
                    className="audio-btn"
                    onClick={() => ref.current.currentTime -= 10}
                >
                    ⏪
                </button>

                <button
                    className="audio-btn audio-btn--play"
                    onClick={togglePlay}
                >
                    {isPlaying ? "⏸" : "▶"}
                </button>

                <button
                    className="audio-btn"
                    onClick={() => ref.current.currentTime += 10}
                >
                    ⏩
                </button>
            </div>

            <audio ref={ref} src={`/${src}`} />
        </div>
    );
});

/* ================= MAIN PAGE ================= */
export default function PlanetPage() {
    const { id } = useParams();
    const planet = PLANETS.find(p => p.id === id);

    const audioRef = useRef(null);

    const [isFav, setIsFav] = useState(false);

    /* ================= FAVORITES ================= */
    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFav(favs.includes(planet?.id));
    }, [planet?.id]);

    const toggleFavorite = () => {
        let favs = JSON.parse(localStorage.getItem("favorites")) || [];

        if (favs.includes(planet.id)) {
            favs = favs.filter(p => p !== planet.id);
            setIsFav(false);
        } else {
            favs.push(planet.id);
            setIsFav(true);
        }

        localStorage.setItem("favorites", JSON.stringify(favs));
    };

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

                    {/* BUTTONS */}
                    <div className="planet-hero__actions">

                        {/* 🎧 LISTEN BUTTON */}
                        <button
                            className="btn btn--primary"
                            onClick={() => {
                                document
                                    .getElementById("audio-section")
                                    ?.scrollIntoView({ behavior: "smooth" });

                                setTimeout(() => {
                                    audioRef.current?.play();
                                }, 500);
                            }}
                        >
                            🔊 Listen to Narration
                        </button>

                        {/* ⭐ FAVORITE BUTTON */}
                        <button
                            className={`btn btn--outline ${isFav ? "active" : ""}`}
                            onClick={toggleFavorite}
                        >
                            {isFav ? "⭐ Added" : "⭐ Add to Favorites"}
                        </button>

                    </div>

                    <div className="fun-fact-box">
                        <span className="fun-fact-icon">💡</span>
                        <p>{planet.funFact}</p>
                    </div>

                </div>

                {/* PLANET IMAGE */}
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
            <section id="audio-section" className="section">
                <h2 className="section__title">🔊 Audio Narration</h2>

                <AudioPlayer
                    ref={audioRef}
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
