import { storage } from "../utils/storage";
import { useNavigate } from "react-router-dom";

export default function PlanetCard({ planet }) {
    const isFav = storage.isFavorite(planet.id);
    const isVisited = storage.getVisited().includes(planet.id);
    const navigate = useNavigate();

    return (
        <div
            className="planet-card visible animate-in"
            onClick={() => navigate(`/planet/${planet.id}`)}
            data-name={planet.name}
            data-type={planet.type}
        >
            <div className="planet-card__inner">
                <div className="planet-card__image-wrap">
                    <div
                        className="planet-card__planet"
                        style={{
                            backgroundImage: `url(/images/${planet.name}.png)`
                        }}
                    />
                    {isVisited && (
                        <span className="visited-badge">Visited</span>
                    )}
                </div>

                <div className="planet-card__body">
                    <h3 className="planet-card__name">
                        {planet.name}
                    </h3>

                    <p className="planet-card__tagline">
                        {planet.tagline}
                    </p>

                    <div className="planet-card__type">
                        {planet.type.replace("_", " ")}
                    </div>

                    <div className="planet-card__mini-facts">
                        <span>🌡️ {planet.stats.temperature.split(" ")[0]}</span>
                        <span>🌙 {planet.stats.moons}</span>
                        <span>📏 {planet.stats.diameter}</span>
                    </div>
                </div>
            </div>

            <button className={`planet-card__fav ${isFav ? "is-fav" : ""}`}>
                {isFav ? "★" : "☆"}
            </button>
        </div>
    );
}
