import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#222" }}>
      <Link style={{ color: "white", marginRight: "15px" }} to="/">Home</Link>
      <Link style={{ color: "white", marginRight: "15px" }} to="/about">About</Link>
      <Link style={{ color: "white", marginRight: "15px" }} to="/services">Services</Link>
      <Link style={{ color: "white" }} to="/contact">Contact</Link>
    </nav> 
  );
}

export default Navbar;