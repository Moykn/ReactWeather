import React, { Component } from "react";
import WeatherForm from "WeatherForm";
import WeatherMessage from "WeatherMessage";
import openWeatherMap from "openWeatherMap";
import ErrorModal from "ErrorModal";

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
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then(
      temp => {
        that.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
      },
      error => {
        that.setState({
          isLoading: false,
          errorMessage: error.message
        });
      }
    );
  };
  render() {
    var { isLoading, temp, location, errorMessage } = this.state;

    const renderMessage = () => {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />;
      }
    };

    const renderError = () => {
      if (typeof errorMessage === "string") {
        return <ErrorModal message={errorMessage} />;
      }
    };

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}
