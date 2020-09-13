// need to create function that actually scans the ballot, returning a picture
// so that it can return the necessary information
// import VisionAPI from "../../../../backend/visionapi.js";
// need to create function that actually scans the ballot, returning a picture
// so that it can return the necessary information
import React, { Component } from "react";

// import ImageUploader from "react-images-upload";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
// import bsCustomFileInput from "bs-custom-file-input";

export default class ScanBallot extends Component {
  constructor(props) {
    super(props);
    // this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onDrop(picture) {
    // console.log("This is picture:");
    // console.log(picture);
    // // this.setState({
    // //   pictures: this.state.pictures.concat(picture),
    // // });
    // const formData = new FormData();
    // formData.append("file", picture);
    // axios
    //   .post("http://localhost:3001/api/state/detectState", formData, {
    //     headers: {
    //       encType: "multipart/form-data",
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((res) => {
    //     console.log("This is Res:");
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // // make request POST to backend.
  }

  async onSubmit(event) {
    event.preventDefault();
    console.log("Submit button hit!!");
    const form = document.querySelector("#myform");
    const formData = new FormData(form);
    // form.submit();

    


    axios
      .post("http://localhost:3001/api/state/detectState", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const {idForms, ballotErrors, deadlines} = res.data;
        console.log("deadlines");
        console.log(deadlines);
        console.log("idForms");
        console.log(idForms);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <p>You are in the ScanBallot component!</p>
        <p>Try using from your mobile device!</p>
        {/* <ImageUploader
          withPreview={true}
          withIcon={true}
          buttonText="Choose images"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
          singleImage={true}
        /> */}
        <form
          id="myform"
          action="http://localhost:3001/api/state/detectState"
          method="post"
          encType="multipart/form-data"
          onSubmit={this.onSubmit}
        >
          <input type="file" name="avatar" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
