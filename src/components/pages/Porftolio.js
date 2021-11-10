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
      <h1 className="text-center fw-bold">Check Out Some of My Work</h1>
      <p className="text-center fw-bold">
        Click on the buttons to open a page to the associated project!
      </p>

      <div className="container">
        <div className="row justify-content-around">
          <div className="card m-2" style={{ width: "18rem" }}>
            <img src={teamGen} className="card-img-top" alt="TeamGenScreenshot" />
            <div className="card-body">
              <h5 className="card-title">Team Generator</h5>
              <p className="card-text">
                This app runs from the integrated terminal and allows for
                dynamic HTML creation.
              </p>
              <a
                href="https://www.youtube.com/watch?v=CcbbgRdlYAo"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary my-2"
              >
                See this Project!
              </a>
              <a
                href="https://github.com/lamperouge1218/Team-Generator"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                See the Repo!
              </a>
            </div>
          </div>
          <div className="card m-2 my-3" style={{ width: "18rem" }}>
            <img
              src={fitTrack}
              className="card-img-top"
              alt="FitnessTrackerScreenshot"
            />
            <div className="card-body">
              <h5 className="card-title">Fitness Tracker</h5>
              <p className="card-text">
                This app, deployed to Heroku, uses database management to store
                catalogued workouts from the user and return stats based on work
                done.
              </p>
              <a
                href="https://radiant-hamlet-33556.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary my-2"
              >
                See this Project!
              </a>
              <a
                href="https://github.com/lamperouge1218/Fitness-Tracker"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                See the Repo!
              </a>
            </div>
          </div>
          <div className="card m-2 my-3" style={{ width: "18rem" }}>
            <img
              src={noteTaker}
              className="card-img-top"
              alt="NoteTakerScreenshot"
            />
            <div className="card-body">
              <h5 className="card-title">Note Taker App</h5>
              <p className="card-text">
                This app is a simple note taker utilizing LocalStorage to
                persist user input over multiple notes.
              </p>
              <a
                href="https://protected-eyrie-71903.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary my-2"
              >
                See this Project!
              </a>
              <a
                href="https://github.com/lamperouge1218/Note-Taker-App"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                See the Repo!
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="card m-2 my-3" style={{ width: "18rem" }}>
            <img src={packRat} className="card-img-top" alt="PackRatScreenshot" />
            <div className="card-body">
              <h5 className="card-title">Pack Rat</h5>
              <p className="card-text">
                This app, the first of the cohort projects, is dseigned to use
                APIs to gather and display information, as well as using
                LocalStorage for the item packing list.
              </p>
              <a
                href="https://lamperouge1218.github.io/Pack-Rat/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary my-2"
              >
                See this Project!
              </a>
              <a
                href="https://github.com/lamperouge1218/Pack-Rat"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                See the Repo!
              </a>
            </div>
          </div>
          <div className="card m-2 my-3" style={{ width: "18rem" }}>
            <img
              src={budgTrack}
              className="card-img-top"
              alt="BudgetTrackerScreenshot"
            />
            <div className="card-body">
              <h5 className="card-title">Budget Tracker App</h5>
              <p className="card-text">
                This PWA, utilizing cache and indexedDB, allows for tracking of
                daily/monthly/weekly budgets and shows a dynamically updating
                graph.
              </p>
              <a
                href="https://hidden-taiga-71157.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary my-2"
              >
                See this Project!
              </a>
              <a
                href="https://github.com/lamperouge1218/Budget-Tracker"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                See the Repo!
              </a>
            </div>
          </div>
          <div className="card m-2 my-3" style={{ width: "18rem" }}>
            <img
              src={dailyPlanner}
              className="card-img-top"
              alt="DailyPlannerScreenshot"
            />
            <div className="card-body">
              <h5 className="card-title">Daily Planner App</h5>
              <p className="card-text">
                This app is a simple usage of LocalStorage and Moment.js to
                change HTML and CSS dynamically depending on the time of day.
              </p>
              <a
                href="https://lamperouge1218.github.io/Daily-Planner/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary my-2"
              >
                See this Project!
              </a>
              <a
                href="https://github.com/lamperouge1218/Daily-Planner"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                See the Repo!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
