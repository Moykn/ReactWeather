import React from "react";

const About = props => (
  <div>
    <h1 className="text-center">About</h1>
    <p>
      This is an applications that searches for temperature of a given place. BE
      AMAZED!
    </p>
    <p>
      <strong> RIGHT... NOW!!!</strong>
    </p>
    <p>Some tools used to make this absolutely awesome page:</p>
    <ul>
      <li>
        <a href="https://facebook.github.io/react">React</a> - This was the
        currently super hot JavaScript framework used.
      </li>
      <li>
        <a href="http://openweathermap.org">Open Weather Map</a> - Guess from
        where the info is coming.
      </li>
    </ul>
  </div>
);

export default About;
