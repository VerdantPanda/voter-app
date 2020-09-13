import React from "react";

export default class ScanBallotDisplay extends React.Component {
  constructor(props) {
    super(props);
    console.log("ScanBallotDisplay");

    this.state = {
      idForms: props.idForms,
      ballotErrors: props.ballotErrors,
      deadlines: props.deadlines,
    };
  }
  render() {
    return <div>Chicken {this.state.idForms}</div>;
  }
}
