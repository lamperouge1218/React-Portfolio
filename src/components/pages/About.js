import React from "react";
import phil from "../../assets/images/profheadshot.jpg";

export default function About() {
  return (
    <div>
      <div class="px-4 py-5 my-5 text-center">
        <img
          class="d-block mx-auto mb-4 rounded-circle shadow"
          src={phil}
          alt="professional headshot"
          width="300"
          height="400"
        />
        <h1 class="display-5 fw-bold">About Me</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            My name is Phil Bohn and I graduated with a BS in Music Education
            from Duquesne University in 2013. I taught in Pittsburgh Catholic
            Grade Schools and at a local High School for about 5-6 years. I have
            not taught in schools since that high school job and most recently
            worked in Tech Support for ZOLL Medical Corporation working
            specifically with the LifeVest, a wearable defibrillator. I took
            this Boot Camp to prepare for a career pivot into CS and am very
            excited to start working on an App design with a coder friend. In my
            free time, I enjoy video and tabletop gaming, reading, watching
            movies/TV shows, and I am an avid follower of the Pittsburgh
            Penguins hockey team.
          </p>
        </div>
      </div>
    </div>
  );
}
