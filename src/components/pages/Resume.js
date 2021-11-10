import React from "react";

export default function Resume() {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">Proficiencies</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon bg-success bg-gradient">
            <svg className="bi" width="1em" height="1em"></svg>
          </div>
          <h2>Front-End</h2>
          <p>
            On front-end, I am familiar with the following tech: HTML, CSS,
            JavaScript, JQuery, responsive design, React, and Bootstrap.
          </p>
        </div>
        <div className="feature col">
          <div className="feature-icon bg-danger bg-gradient">
            <svg className="bi" width="1em" height="1em"></svg>
          </div>
          <h2>Back-End</h2>
          <p>
            On back-end, I am familiar with the following tech: APIs, Node,
            Express, MySQL/Sequelize, MongoDB/Mongoose, REST, and GraphQL.
          </p>
        </div>
        <div className="feature col">
          <div className="feature-icon bg-warning bg-gradient">
            <svg className="bi" width="1em" height="1em"></svg>
          </div>
          <h2>My Resume</h2>
          <p>
            Follow the link below to reach a downloadable copy of my resume!
          </p>
          <a href="#" className="icon-link">
            Download My Resume
          </a>
        </div>
      </div>
    </div>
  );
}
