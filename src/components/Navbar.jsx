import { NavLink } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function Navbar() {
    const { user, logout, login } = useAuthContext();

    // 🔥 Active link styling
    const navClass = ({ isActive }) =>
        isActive ? "nav-link active" : "nav-link";

    return (
        <nav className="navbar">

            {/* LOGO */}
            <NavLink to="/" className="navbar__logo">
                🪐 COSMOPEDIA
            </NavLink>

            {/* NAV LINKS */}
            <div className="navbar__links">

                <NavLink to="/" className={navClass}>
                    Home
                </NavLink>

                <NavLink to="/explore" className={navClass}>
                    Explore
                </NavLink>

                <NavLink to="/solar-system" className={navClass}>
                    Solar System
                </NavLink>

                <NavLink to="/compare" className={navClass}>
                    Compare
                </NavLink>

                <NavLink to="/favorites" className={navClass}>
                    ★ Favorites
                </NavLink>

            </div>

            {/* LOGIN / LOGOUT */}
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
