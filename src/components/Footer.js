import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="py-3 mt-4 footer-style d-flex flex-row justify-content-center">
      <ul className="nav pb-3 mb-3">
        <li className="nav-item">
          <a
            href="mailto:philbohn1791@gmail.com"
            className="nav-link px-2 text-dark"
          >
            philbohn1791@gmail.com
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://github.com/lamperouge1218"
            target="_blank"
            rel="noreferrer"
            className="nav-link px-2 text-dark"
          >
            GitHub
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://www.linkedin.com/in/phil-bohn-02b1236a/"
            target="_blank"
            rel="noreferrer"
            className="nav-link px-2 text-dark"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}
