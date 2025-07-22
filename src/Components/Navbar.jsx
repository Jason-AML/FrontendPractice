import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "../Components/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black  py-2 nav-container">
      <div className="flex justify-between items-center px-5">
        <div className="text-sm font-bold lv-logo">
          <svg className="sv-logo">
            <path d="M 67.637 0.293 l 3.816 9.205 L 75.269 0.293 h 2.725 L 71.746 15.39 l -0.293 0.294 l -0.294 -0.294 L 64.911 0.293 h 2.726 Z m -13.712 0 c 1.468 0 2.86 0.767 3.627 1.887 l -1.467 1.468 h -0.462 c -0.304 -0.65 -0.973 -1.048 -1.698 -1.048 c -0.863 0 -1.672 0.71 -1.72 1.614 c -0.035 0.68 0.277 1.105 0.84 1.468 c 0.606 0.391 0.854 0.554 1.677 1.006 c 0.897 0.493 3.166 1.46 3.166 4.005 c 0 2.509 -2.097 4.843 -4.802 4.843 c -0.347 0 -0.976 -0.039 -1.446 -0.147 c -1.325 -0.321 -2.129 -0.822 -2.998 -1.845 l 1.887 -1.929 l 0.65 0.545 c 0.293 0.23 0.937 0.693 1.55 0.776 c 1.246 0.169 2.082 -0.655 2.244 -1.468 c 0.129 -0.642 -0.034 -1.6 -1.069 -2.096 c 0 0 -1.866 -1.037 -2.684 -1.51 c -0.833 -0.482 -1.719 -1.798 -1.719 -3.375 c 0 -1.174 0.538 -2.311 1.405 -3.103 c 0.67 -0.614 1.589 -1.09 3.019 -1.09 Z M 138.67 0 l 9.77 9.77 V 0.587 l 0.294 -0.294 h 1.929 l 0.294 0.294 v 14.802 h -0.462 l -9.602 -9.602 v 9.309 l -0.294 0.293 h -1.929 l -0.293 -0.293 V 0.293 L 138.67 0 Z m -28.807 0.293 v 2.223 l -0.294 0.293 h -2.222 v 12.58 h -2.516 V 2.809 h -2.516 V 0.587 l 0.294 -0.294 h 7.254 Z m 9.225 0 v 2.223 l -0.294 0.293 h -2.222 v 12.58 h -2.516 V 2.809 h -2.516 V 0.587 l 0.294 -0.294 h 7.254 Z M 2.516 0.293 v 12.58 h 5.032 v 2.516 H 0 V 0.587 L 0.293 0.293 h 2.223 Z m 14.257 0 a 7.548 7.548 0 1 1 0 15.096 a 7.548 7.548 0 0 1 0 -15.096 Z m 111.54 0 a 7.548 7.548 0 1 1 0 15.096 a 7.548 7.548 0 0 1 0 -15.096 Z m -98.415 0 l 0.293 0.294 v 9.77 a 2.516 2.516 0 0 0 5.032 0 V 0.587 l 0.294 -0.294 h 1.929 l 0.293 0.294 v 9.77 a 5.032 5.032 0 0 1 -10.064 0 V 0.587 l 0.294 -0.294 h 1.929 Z m 15.389 0 v 14.803 l -0.294 0.293 h -2.222 V 0.587 l 0.293 -0.294 h 2.223 Z m 37.446 0 l 0.293 0.294 v 9.77 a 2.516 2.516 0 0 0 5.032 0 V 0.587 l 0.294 -0.294 h 1.928 l 0.294 0.294 v 9.77 a 5.032 5.032 0 0 1 -10.064 0 V 0.587 l 0.294 -0.294 h 1.929 Z m 15.389 0 v 14.803 l -0.294 0.293 h -2.222 V 0.587 l 0.293 -0.294 h 2.223 Z M 16.772 2.81 a 5.032 5.032 0 1 0 0.001 10.065 a 5.032 5.032 0 0 0 0 -10.065 Z m 111.541 0 a 5.032 5.032 0 1 0 0 10.065 a 5.032 5.032 0 0 0 0 -10.065 Z"></path>
          </svg>
        </div>

        {/* Botón hamburguesa (solo visible en pantallas pequeñas) */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6 " />
          ) : (
            <Bars3Icon className="h-6 w-6 " />
          )}
        </button>

        {/* Enlaces - ocultos en móvil, visibles en desktop */}
        <div className="hidden md:flex space-x-4 text-sm gap-4">
          <Link to="/" className="navi-link">
            Home
          </Link>
          <Link to="/login" className="navi-link ">
            Login
          </Link>
          <Link to="/about" className="navi-link">
            About
          </Link>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="flex flex-col space-y-2 pl-5 mt-2 md:hidden text-sm">
          <Link to="/" className="navi-link" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link
            to="/Login"
            className="navi-link"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/About"
            className="navi-link"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
