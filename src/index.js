import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import App from "./App";
import ScoreResultsContainer from "./containers/ScoreResultsContainer";
import * as serviceWorker from "./serviceWorker";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const basename = process.env.PUBLIC_URL;

const routing = (
  <BrowserRouter basename={basename}>
    <div>
      <Header />
      <Route exact path="/" component={App} />
      <Route path="/results" component={ScoreResultsContainer} />
      <Footer />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById("root"));
serviceWorker.unregister();
