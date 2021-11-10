import React from "react";

export default function Resume() {
  return (
    <div class="container px-4 py-5" id="featured-3">
      <h2 class="pb-2 border-bottom">Proficiencies</h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          <div class="feature-icon bg-primary bg-gradient">
            <svg class="bi" width="1em" height="1em"></svg>
          </div>
          <h2>Front-End</h2>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
        </div>
        <div class="feature col">
          <div class="feature-icon bg-primary bg-gradient">
            <svg class="bi" width="1em" height="1em"></svg>
          </div>
          <h2>Back-End</h2>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
        </div>
        <div class="feature col">
          <div class="feature-icon bg-primary bg-gradient">
            <svg class="bi" width="1em" height="1em"></svg>
          </div>
          <h2>My Resume</h2>
          <p>
            Follow the link below to reach a downloadable copy of my resume!
          </p>
          <a href="#" class="icon-link">
            Call to action
          </a>
        </div>
      </div>
    </div>
  );
}
