import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="py-3 mt-4 bg-dark bg-gradient footer-style">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a
            href="mailto:philbohn1791@gmail.com"
            className="nav-link px-2 text-light "
          >
            philbohn1791@gmail.com
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://github.com/lamperouge1218"
            target="_blank"
            rel="noreferrer"
            className="nav-link px-2 text-light "
          >
            GitHub
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://www.linkedin.com/in/phil-bohn-02b1236a/"
            target="_blank"
            rel="noreferrer"
            className="nav-link px-2 text-light"
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <p className="text-center text-light">© 2021 Phil Bohn</p>
    </footer>
  );
}
