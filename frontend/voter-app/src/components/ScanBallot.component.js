import React, { Component } from "react";
// need to create function that actually scans the ballot, returning a picture
// so that it can return the necessary information
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
    console.log("pic taken");
    console.log(picture);

    // this.setState({
    //   pictures: this.state.pictures.concat(picture),
    // });
    const data = new FormData();
    data.append("file", picture);
    axios
      .post("https://localhost:3001/api/state/detectState", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
