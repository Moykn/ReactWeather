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
              placeholder="Enter city"
              type="text"
              ref={node => (this.input = node)}
            />
          </div>
          <div>
            <button>Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
}
