import { FaHeart, FaUser, FaBell } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">LOGO</h1>
      <nav className="nav-links">
        <a href="#">Mini-Games</a>
        <a href="#">About us</a>
        <a href="#">Contact us</a>
      </nav>
      <div className="nav-actions">
        <FaBell size={24} className="icon-bell" />
        <FaHeart className="icon-heart" />
        <div className="login-btn">
        <FaUser className="icon" />
        <button >Login</button>
        </div>
      </div>
    </header>
  );
}
