import React, { Component } from "react";
import { render } from "react-dom";
//import PropTypes from "prop-types";
import { Route, Router, IndexRoute, hashHistory } from "react-router";
import Main from "Main";
import Weather from "Weather";
import About from "About";
import Examples from "Examples";

//http://samples.openweathermap.org/data/2.5/find?q=Philadelphia&units=metric&appid=eb66fc9f929d94ccde159be9c8b3f985

render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById("app")
);