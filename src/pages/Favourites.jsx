import { useEffect, useState } from "react";
import { PLANETS } from "../data/planets";
import PlanetCard from "../components/PlanetCard";

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const favIds = JSON.parse(localStorage.getItem("favorites")) || [];

        const favPlanets = PLANETS.filter(p =>
            favIds.includes(p.id)
        );

        setFavorites(favPlanets);
    }, []);

    return (
        <div className="page">

            <section className="section">

                <div className="section__header">
                    <h2 className="section__title">⭐ Your Favorites</h2>
                    <p className="section__subtitle">
                        Planets you’ve saved for quick access
                    </p>
                </div>

                {/* EMPTY STATE */}
                {favorites.length === 0 ? (
                    <div className="empty-state">
                        <h3>No favorites yet 😭</h3>
                        <p>Go explore and add some planets first!</p>
                    </div>
                ) : (
                    <div className="planets-grid">
                        {favorites.map((planet) => (
                            <PlanetCard key={planet.id} planet={planet} />
                        ))}
                    </div>
                )}

            </section>

        </div>
    );
}
