import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import Header from "./common/Header";
import AboutMePage from "./AboutMePage";
import ResumePage from "./ResumePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/home" exact component={HomePage} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route path="/about" exact component={AboutMePage} />
        <Route path="/resume" exact component={ResumePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
