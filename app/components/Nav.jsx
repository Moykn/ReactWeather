import React, { Component } from "react";
import { Link, IndexLink } from "react-router";

const Nav = props => (
  <div>
    <h2>Nav Component</h2>
    <IndexLink to="/" activeClassName="active">
      Get Weather
    </IndexLink>
    <Link to="/about" activeClassName="active">
      About
    </Link>
    <Link to="/examples" activeClassName="active">
      Examples
    </Link>
  </div>
);

export default Nav;
