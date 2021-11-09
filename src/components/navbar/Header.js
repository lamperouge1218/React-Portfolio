import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style.css";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        Phil Bohn's Portfolio
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler8"
        aria-controls="navbarToggler8"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler8">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portfolio">
              Work
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#resume">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
