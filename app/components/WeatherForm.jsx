import React, { Component } from "react";

export default class WeatherForm extends Component {
  input;
  onFormSubmit = e => {
    e.preventDefault();
    var location = this.input.value;

    if (location.length) {
      this.input.value = "";
      this.props.onSearch(location);
    }
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.onFormSubmit}>
          <div>
            <input
              placeholder="Search weather by city"
              type="search"
              ref={node => (this.input = node)}
            />
          </div>
          <div>
            <button type="submit" className="expanded hollow button">
              Get Weather
            </button>
          </div>
        </form>
      </div>
    );
  }
}
