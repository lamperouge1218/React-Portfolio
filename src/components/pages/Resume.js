import React from "react";

export default function Resume() {
  return (
    <div class="container px-4 py-5" id="featured-3">
      <h2 class="pb-2 border-bottom">Proficiencies</h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          <div class="feature-icon bg-success bg-gradient">
            <svg class="bi" width="1em" height="1em"></svg>
          </div>
          <h2>Front-End</h2>
          <p>
            On front-end, I am familiar with the following tech: HTML, CSS,
            JavaScript, JQuery, responsive design, React, and Bootstrap.
          </p>
        </div>
        <div class="feature col">
          <div class="feature-icon bg-danger bg-gradient">
            <svg class="bi" width="1em" height="1em"></svg>
          </div>
          <h2>Back-End</h2>
          <p>
            On back-end, I am familiar with the following tech: APIs, Node,
            Express, MySQL/Sequelize, MongoDB/Mongoose, REST, and GraphQL.
          </p>
        </div>
        <div class="feature col">
          <div class="feature-icon bg-warning bg-gradient">
            <svg class="bi" width="1em" height="1em"></svg>
          </div>
          <h2>My Resume</h2>
          <p>
            Follow the link below to reach a downloadable copy of my resume!
          </p>
          <a href="#" class="icon-link">
            Download My Resume
          </a>
        </div>
      </div>
    </div>
  );
}
