import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo-nav.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "../Components/Navbar.css"; // Assuming you have a CSS file for styling

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-200 px-4 py-2">
      <div className="flex justify-between items-center">
        <div className="text-sm font-bold">
          <img src={logo} alt="Logo" className="logo-nav" />
        </div>

        {/* Botón hamburguesa (solo visible en pantallas pequeñas) */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Enlaces - ocultos en móvil, visibles en desktop */}
        <div className="hidden md:flex space-x-4 text-sm">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/about">About</Link>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="flex flex-col space-y-2 mt-2 md:hidden text-sm">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/Login" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
          <Link to="/About" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
