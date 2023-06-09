import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Presencia from "./pages/Presencia";
import Sostenibilidad from "./pages/Sostenibilidad";
import Noticias from "./pages/Noticias";
import Contacto from "./pages/Contacto";
import logo from "./img/logocarranza.png";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/presencia" element={<Presencia />} />
        <Route path="/sostenibilidad" element={<Sostenibilidad />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function Navigation() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" height={"70px"} />
      </Link>

      <ul className="navbar-links">
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="nosotros">NOSOTROS</Link>
        </li>
        <li>
          <Link to="servicios">SERVICIOS</Link>
        </li>
        <li>
          <Link to="presencia">PRESENCIA</Link>
        </li>
        <li>
          <Link to="sostenibilidad">SOSTENIBILIDAD</Link>
        </li>
        <li>
          <Link to="noticias">NOTICIAS</Link>
        </li>
        <li>
          <Link to="contacto">CONTACTO</Link>
        </li>
      </ul>
    </nav>
  );
}
