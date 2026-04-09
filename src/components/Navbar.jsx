import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Navbar() {
    const { user, logout, login } = useAuthContext();

    return (
        <nav className="navbar">

            <span className="navbar__logo">🪐 COSMOPEDIA</span>

            <div className="navbar__links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/explore" className="nav-link">Explore</Link>
                <Link to="/favorites" className="nav-link">★ Favorites</Link>
            </div>

            <div className="login">
                {user ? (
                    <button className="nav-link" onClick={logout}>
                        {user.displayName || "Logout"}
                    </button>
                ) : (
                    <button className="nav-link" onClick={login}>
                        🔐 Login with Google
                    </button>
                )}
            </div>

        </nav>
    );
}
