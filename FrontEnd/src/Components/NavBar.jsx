import { Link } from "react-router-dom";
import "../css/NavBar.css"

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/devis" className="nav-link">Devis</Link>
            <Link to="/signin" className="nav-link">Sign-in</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
            <Link to="/favorites" className="nav-link">Contact Us</Link>

        </div>
    </nav>
}

export default NavBar