import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <ul id="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-blog">Create Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
