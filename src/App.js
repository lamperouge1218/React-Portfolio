import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import PortfolioContainer from "./components/PorftolioContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <PortfolioContainer />
    </div>
  );
}

export default App;
