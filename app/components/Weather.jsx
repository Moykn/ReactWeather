import React, { Component } from "react";
import WeatherForm from "WeatherForm";
import WeatherMessage from "WeatherMessage";
import openWeatherMap from "openWeatherMap";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }
  handleSearch = location => {
    var that = this;
    
    this.setState({
      isLoading: true
    });
    openWeatherMap.getTemp(location).then(
      temp => {
        that.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
      },
      errorMessage => {
        alert(errorMessage);
        that.setState({
          isLoading: false
        });
      }
    );
  };
  render() {
    var { isLoading, temp, location } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    return (
      <div>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
}
