import React, { Fragment } from "react";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import HomePage from "./pages/HomePage/HomePage";
// import Loading from "./components/Loading/Loading";
import "./App.css";
import JobsList from "./pages/JobsList/JobsList";
import { JobsTemplate } from "./templates/JobsTemplate/JobsTemplate";

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        {/* <Loading /> */}
        <Switch>
          <HomeTemplate path="/" exact Component={HomePage} />
          <HomeTemplate path="/home" exact Component={HomePage} />
          <JobsTemplate path="/jobs/search/:name" exact Component={JobsList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
