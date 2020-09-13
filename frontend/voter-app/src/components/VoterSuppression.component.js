import React, { Component } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

var today = new Date();
var voteDay = new Date(today.getFullYear(), 10, 3);
var one_day = 1000 * 60 * 60 * 24;

export default class VoterSuppression extends Component {
  render() {
    return (
      <div>
        <h1>Election day is November 3rd</h1>
        <h1>
          {Math.ceil((voteDay.getTime() - today.getTime()) / one_day).valueOf()}{" "}
          Days left.
        </h1>
        <p>You are on the Voter Suppression component!</p>
      </div>
    );
  }
}
