import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import PortfolioContainer from "./components/PorftolioContainer";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <div class="positioning">
        <PortfolioContainer />
      </div>
<div></div>
      <Footer />
    </div>
  );
}

export default App;
