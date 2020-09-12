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
    console.log("This is picture:");
    console.log(picture);

    // this.setState({
    //   pictures: this.state.pictures.concat(picture),
    // });
    const data = new FormData();
    data.append("file", picture);
    console.log("formData.get('file') post append:");
    console.log(data.get("file"));

    axios
      .post("http://localhost:3001/api/state/detectState", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("This is Res:");
        console.log(res);
        console.log("res.body.file");
        console.log(res.body.file);
      })
      .catch((err) => {
        console.log(err);
      })
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
