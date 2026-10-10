import { Link } from "react-router-dom";

function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <Link to={`/${user.role}`} className="brand">
        Hostel Mess
      </Link>

      <span>
        {user.name} ({user.role})
      </span>

      <button onClick={onLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;