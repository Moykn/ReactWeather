import React from "react";
import { Link } from "react-router";

const Examples = props => (
  <div>
    <h1 className="text-center">Examples</h1>
    <p>Here a few example locations to try out: </p>
    <ol>
      <li>
        <Link to="/?location=Brasília">Brasília, DF</Link>
      </li>
      <li>
        <Link to="/?location=Rio">Rio de Janeiro, RJ</Link>
      </li>
    </ol>
  </div>
);

export default Examples;
