import React from "react";
import styles from "./gradient.css";

export default class Gradient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationClass: "test",
    };
    // this.changeState = this.changeState.bind(this);
  }

  //   changeState() {
  //     if (this.state.animationClass === "test") {
  //       this.setState({
  //         animationClass: "test paused",
  //       });
  //     } else {
  //       this.setState({
  //         animationClass: "test",
  //       });
  //     }
  //   }
  render() {
    return (
      <div className={this.state.animationClass}>
        {/* <h1>Pure CSS3 Animated Gradient Background</h1> */}
        {/* <button onClick={this.changeState}>Stop / Start</button> */}
      </div>
    );
  }
}
