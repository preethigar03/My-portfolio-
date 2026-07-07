import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Portfolio</div>

      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/certifications">Certifications</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;