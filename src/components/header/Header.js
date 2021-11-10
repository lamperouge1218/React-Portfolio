import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style.css";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a
        className="navbar-brand fs-2 fw-bold"
        href="#/"
        onClick={() => handlePageChange("About")}
      >
        Phil Bohn
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler8"
        aria-controls="navbarToggler8"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarToggler8">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              href="#about"
              onClick={() => handlePageChange("About")}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
            >
              Work
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#contact"
              onClick={() => handlePageChange("Contact")}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#resume"
              onClick={() => handlePageChange("Resume")}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
