import React from "react";
import { Link } from "react-router";

const Examples = props => (
  <div>
    <h1 className="text-center page-title">Examples</h1>
    <h5>Here a few example locations to try out: </h5>
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
