// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;
const {
  model: hondaName,
  coloursByPopularity: hondaColour,
  speedStats: hondaSpeed
} = honda;

const {
  model: teslaName,
  coloursByPopularity: teslaColour,
  speedStats: teslaSpeed
} = tesla;

const { topSpeed: teslaTopSpeed, zeroTosixty: teslaZeroToSixty } = teslaSpeed;
const teslaTopColour = teslaColour[0];

const { topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroToSixty } = hondaSpeed;
const hondaTopColour = hondaColour[0];

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
