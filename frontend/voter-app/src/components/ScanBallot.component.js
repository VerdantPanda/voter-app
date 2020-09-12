import React, { Component } from "react";
// import VisionAPI from "../../../../backend/visionapi.js";
// need to create function that actually scans the ballot, returning a picture
// so that it can return the necessary information
import ImageUploader from "react-images-upload";
import axios from "axios";

export default class ScanBallot extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
    // axios.get();
    // make request POST to backend.
  }
  render() {
    return (
      <div>
        <p>You are in the ScanBallot component!</p>
        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
      </div>
    );
  }
}
