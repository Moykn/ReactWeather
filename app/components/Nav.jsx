import React, { Component } from "react";
import { Link, IndexLink } from "react-router";
import { encode } from "punycode";

class Nav extends Component {
  input;
  constructor(props) {
    super(props);
  }
  onSearch = e => {
    e.preventDefault();
    const location = this.input.value;
    const encodedLocation = encodeURIComponent(location);
    if (location.length > 0) {
      this.input.value = "";
      window.location.hash = `#/?location=${encodedLocation}`;
    }
  };
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="is-active">
                Get Weather
              </IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="is-active">
                About
              </Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="is-active">
                Examples
              </Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input
                  type="search"
                  ref={node => (this.input = node)}
                  placeholder="Search weather by city"
                />
              </li>
              <li>
                <button type="submit" className="button">
                  Get Weather
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Nav;
