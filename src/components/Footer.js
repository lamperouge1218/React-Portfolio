import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer class="py-3 mt-4 bg-dark bg-gradient">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-light ">
            philbohn1791@gmail.com
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-light ">
            GitHub
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link px-2 text-light">
            LinkedIn
          </a>
        </li>
      </ul>
      <p class="text-center text-light">© 2021 Phil Bohn</p>
    </footer>
  );
}
