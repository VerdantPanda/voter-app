import React, { Component } from "react";
import VisionAPI from "../../../../backend/visionapi.js";
// need to create function that actually scans the ballot, returning a picture
// so that it can return the necessary information
export default class ScanBallot extends Component {
  render() {
    return (
      <div>
        <p>You are in the ScanBallot component!</p>
      </div>
    );
  }
}
