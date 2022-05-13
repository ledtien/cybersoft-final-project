import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import HomePage from "./pages/HomePage/HomePage";
import Loading from "./components/Loading/Loading";
import "./App.css";
import JobsList from "./pages/JobsList/JobsList";
import { JobsTemplate } from "./templates/JobsTemplate/JobsTemplate";
import SubTypeJobsList from "./pages/SubTypeJobsList/SubTypeJobsList";
import CategoryJobsList from "./pages/CategoryJobsList/CategoryJobsList";
import JobDetail from "./pages/JobDetail/JobDetail";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import User from "./pages/User/User";
import { AdminTemplate } from "./templates/AdminTemplate/AdminTemplate";
import UsersManagement from "./pages/Admin/UsersManagement/UsersManagement";
import { ProfileTemplate } from "./templates/ProfileTemplate/ProfileTemplate";
import TypesJob from "./pages/Admin/TypesJob/TypesJob";

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Loading />
        <Switch>
          <HomeTemplate path="/" exact Component={HomePage} />
          <HomeTemplate path="/home" exact Component={HomePage} />
          <JobsTemplate path="/jobs/search/:name" exact Component={JobsList} />
          <JobsTemplate
            path="/jobs/category/:name"
            exact
            Component={CategoryJobsList}
          />
          <JobsTemplate
            path="/type-jobs/:id"
            exact
            Component={SubTypeJobsList}
          />

          <JobsTemplate path="/jobs/:id" exact Component={JobDetail} />
          <ProfileTemplate path="/user/:id" exact Component={User} />
          <UserTemplate path="/auth/signup" exact Component={Register} />
          <UserTemplate path="/auth/signin" exact Component={Login} />
          <AdminTemplate path="/admin" exact Component={UsersManagement} />
          <AdminTemplate
            path="/admin/users"
            exact
            Component={UsersManagement}
          />
          <AdminTemplate path="/admin/typesJob" exact Component={TypesJob} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
