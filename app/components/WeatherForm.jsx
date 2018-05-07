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
          <h1 className="text-center">Get Weather</h1>
          <div>
            <input
              placeholder="Enter city"
              type="text"
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
