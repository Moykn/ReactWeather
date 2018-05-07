import React, { Component } from "react";

const WeatherMessage = ({ temp, location }) => {
  return (
    <h3>
      It's it {temp}º in {location}.
    </h3>
  );
};

export default WeatherMessage;
