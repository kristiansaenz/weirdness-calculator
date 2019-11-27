import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ScoreResultsContainer from "./containers/ScoreResultsContainer";
import * as serviceWorker from "./serviceWorker";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const routing = (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={App} />
      <Route path="/results" component={ScoreResultsContainer} />
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
serviceWorker.unregister();
