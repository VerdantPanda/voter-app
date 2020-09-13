import React, { Component } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Iframe from 'react-iframe';

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
        <p2>HTML IFRAME TEST</p2>
        <Iframe url="https://data.census.gov/cedsci/profile?g=0400000US42"
        width="100%"
        height="450px"
        id="food"
        className="yes"
        display="initial"
        position="relative"
        sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"/>
        
      </div>
    );
  }
}
