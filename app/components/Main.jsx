import React, { Component } from "react";
import Nav from "Nav";

const Main = props => (
  <div>
    <Nav />
    <h2>Main Component</h2>
    {props.children}
  </div>
);

export default Main;
