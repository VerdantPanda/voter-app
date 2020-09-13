// need to create function that actually scans the ballot, returning a picture
// so that it can return the necessary information
// import VisionAPI from "../../../../backend/visionapi.js";
// need to create function that actually scans the ballot, returning a picture
// so that it can return the necessary information
import React, { Component } from "react";

// import ImageUploader from "react-images-upload";
import axios from "axios";
import { Form, Button, Spinner, ListGroup } from "react-bootstrap";
import ScanBallotDisplay from "./ScanBallotDisplay";
import { Roll } from "react-reveal";
// import bsCustomFileInput from "bs-custom-file-input";

export default class ScanBallot extends Component {
  constructor(props) {
    super(props);
    // this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      idForms: [],
      ballotErrors: [],
      deadlines: [],
      formHidden: false,
      spinnerHidden: true,
      ballotDisplayHidden: true,
    };
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
    this.setState({ spinnerHidden: false, formHidden: true });
    axios
      .post("http://localhost:3001/api/state/detectState", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        this.setState({ spinnerHidden: true });
        const { idForms, ballotErrors, deadlines } = res.data;
        console.log("deadlines");
        console.log(deadlines);
        this.setState({ deadlines: deadlines });
        console.log("idForms");
        console.log(idForms);
        this.setState({ idForms: idForms });
        this.setState({ ballotErrors: ballotErrors });
        console.log("ballot errors:");
        console.log(ballotErrors);
        this.setState({ ballotDisplayHidden: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  balletInfo() {
    return(
      <div>
        
      </div>
    )
  }

  render() {
    return (
      <div>
        <p>You are in the ScanBallot component!</p>
        <small>Try using from your mobile device!</small>
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
          hidden={this.state.formHidden}
          id="myform"
          action="http://localhost:3001/api/state/detectState"
          method="post"
          encType="multipart/form-data"
          onSubmit={this.onSubmit}
        >
          <input type="file" name="avatar" />

          <button type="submit">Submit</button>
        </form>
        <br></br>
        <br></br>
        <Spinner
          animation="border"
          role="status"
          hidden={this.state.spinnerHidden}
        >
          <span className="sr-only">Loading...</span>
        </Spinner>

        <div hidden={this.state.ballotDisplayHidden}>
          <Roll left>
            <h3>Common Ballot Errors:</h3>
            <ListGroup style={{ overflow: "scroll", maxHeight: 300 }}>
              {Array.from(Array(this.state.ballotErrors.length).keys()).map(
                (num) => {
                  console.log();
                  return (
                    <ListGroup.Item action>
                      {this.state.ballotErrors[num]}
                    </ListGroup.Item>
                  );
                }
              )}
            </ListGroup>
          </Roll>
          <br></br>
          <br></br>
          <Roll right>
            <h3>Deadlines:</h3>
            <ListGroup style={{ overflow: "scroll", maxHeight: 300 }}>
              {Array.from(Array(this.state.deadlines.length).keys()).map(
                (num) => {
                  console.log();
                  return (
                    <ListGroup.Item action>
                      {this.state.deadlines[num]}
                    </ListGroup.Item>
                  );
                }
              )}
            </ListGroup>
          </Roll>
          <br></br>
          <br></br>
          <Roll left>
            <h3>Suffcient Voter ID:</h3>
            <ListGroup style={{ overflow: "scroll", maxHeight: 300 }}>
              {Array.from(Array(this.state.idForms.length).keys()).map(
                (num) => {
                  console.log();
                  return (
                    <ListGroup.Item action>
                      {this.state.idForms[num]}
                    </ListGroup.Item>
                  );
                }
              )}
            </ListGroup>
          </Roll>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}
