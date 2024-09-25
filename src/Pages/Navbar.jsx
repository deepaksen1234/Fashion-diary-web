import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsProgress } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar px-3">
    <Link to="/" className="navbar-brand related-font fw-bold">
      Fashion Diary
    </Link>
  
    <button className="navbar-toggler" onClick={toggleNavbar} aria-controls="navbarNav" aria-expanded={isOpen} aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
      <ul className="navbar-nav ms-auto gap-5  for-transition">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">
            Blog page
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/advertising">
            Advertising
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  
  );
};

export default Navbar;
