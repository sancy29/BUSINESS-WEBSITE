import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>

      {/* Navigation Bar */}
      <nav style={{ padding: "15px", background: "#111" }}>
        <Link to="/" style={{ color: "#fff", marginRight: "15px" }}>Home</Link>
        <Link to="/about" style={{ color: "#fff", marginRight: "15px" }}>About</Link>
        <Link to="/services" style={{ color: "#fff", marginRight: "15px" }}>Services</Link>
        <Link to="/contact" style={{ color: "#fff" }}>Contact</Link>
      </nav>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>
  );
}

export default App;