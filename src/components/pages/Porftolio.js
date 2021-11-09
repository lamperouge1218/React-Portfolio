import React from "react";
import teamGen from "../../assets/images/TeamGeneratorScreenshot.PNG";
import fitTrack from "../../assets/images/FitnessTrackerScreenshot.PNG";
import noteTaker from "../../assets/images/NoteTakerScreenshot.PNG";
import packRat from "../../assets/images/packratscreenshot.PNG";
import budgTrack from "../../assets/images/budgettrackerscreenshot.PNG";
import dailyPlanner from "../../assets/images/plannerscreenshot.PNG";

export default function Portfolio() {
  return (
    <div>
      <h1 class="text-center fw-bold">Check Out Some of My Work</h1>
      <p class="text-center fw-bold">
        Click on the buttons to open a page to the associated project!
      </p>

      <div class="container">
        <div class="row justify-content-around">
          <div class="card m-2" style={{ width: "18rem" }}>
            <img src={teamGen} class="card-img-top" alt="TeamGenScreenshot" />
            <div class="card-body">
              <h5 class="card-title">Team Generator</h5>
              <p class="card-text">
                This app runs from the integrated terminal and allows for
                dynamic HTML creation.
              </p>
              <a
                href="https://www.youtube.com/watch?v=CcbbgRdlYAo"
                target="_blank"
                rel="noreferrer"
                class="btn btn-primary"
              >
                See this Project!
              </a>
            </div>
          </div>
          <div class="card m-2 my-3" style={{ width: "18rem" }}>
            <img
              src={fitTrack}
              class="card-img-top"
              alt="FitnessTrackerScreenshot"
            />
            <div class="card-body">
              <h5 class="card-title">Fitness Tracker</h5>
              <p class="card-text">
                This app, deployed to Heroku, uses database management to store
                catalogued workouts from the user and return stats based on work
                done.
              </p>
              <a
                href="https://radiant-hamlet-33556.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                class="btn btn-primary"
              >
                See this Project!
              </a>
            </div>
          </div>
          <div class="card m-2 my-3" style={{ width: "18rem" }}>
            <img
              src={noteTaker}
              class="card-img-top"
              alt="NoteTakerScreenshot"
            />
            <div class="card-body">
              <h5 class="card-title">Note Taker App</h5>
              <p class="card-text">
                This app is a simple note taker utilizing LocalStorage to
                persist user input over multiple notes.
              </p>
              <a
                href="https://protected-eyrie-71903.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                class="btn btn-primary"
              >
                See this Project!
              </a>
            </div>
          </div>
        </div>
        <div class="row justify-content-around">
          <div class="card m-2 my-3" style={{ width: "18rem" }}>
            <img src={packRat} class="card-img-top" alt="PackRatScreenshot" />
            <div class="card-body">
              <h5 class="card-title">Pack Rat</h5>
              <p class="card-text">
                This app, the first of the cohort projects, is dseigned to use
                APIs to gather and display information, as well as using
                LocalStorage for the item packing list.
              </p>
              <a
                href="https://lamperouge1218.github.io/Pack-Rat/"
                target="_blank"
                rel="noreferrer"
                class="btn btn-primary"
              >
                See this Project!
              </a>
            </div>
          </div>
          <div class="card m-2 my-3" style={{ width: "18rem" }}>
            <img
              src={budgTrack}
              class="card-img-top"
              alt="BudgetTrackerScreenshot"
            />
            <div class="card-body">
              <h5 class="card-title">Budget Tracker App</h5>
              <p class="card-text">
                This PWA, utilizing cache and indexedDB, allows for tracking of
                daily/monthly/weekly budgets and shows a dynamically updating
                graph.
              </p>
              <a
                href="https://hidden-taiga-71157.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                class="btn btn-primary"
              >
                See this Project!
              </a>
            </div>
          </div>
          <div class="card m-2 my-3" style={{ width: "18rem" }}>
            <img
              src={dailyPlanner}
              class="card-img-top"
              alt="DailyPlannerScreenshot"
            />
            <div class="card-body">
              <h5 class="card-title">Daily Planner App</h5>
              <p class="card-text">
                This app is a simple usage of LocalStorage and Moment.js to
                change HTML and CSS dynamically depending on the time of day.
              </p>
              <a
                href="https://lamperouge1218.github.io/Daily-Planner/"
                target="_blank"
                rel="noreferrer"
                class="btn btn-primary"
              >
                See this Project!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
