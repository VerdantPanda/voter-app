import React, { Component } from "react";
import { Form } from "react-bootstrap/";
// import states_names from "../static_data/states_names";
// import axios from "axios";
import Button from "@material-ui/core/Button";
// import ResponsiveEmbed
// import Iframe from "react-iframe";
let list = ["stea"]; //states_names.map((state) => <option key={state}>{state}</option>);
export default class RegisterToVote extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { currState: null, link: "#" };
  }

  handleChange(event) {
    console.log("change occuredn in form");
    console.log(event.target.value);
    this.setState({ currState: event.target.value });
    // TODO: request info from backend.
    // axios.get();
    this.setState({ link: "https://www.google.com/" });
  }

  render() {
    return (
      <div>
        <p>You are on the RegisterToVote component!</p>
        {/*TODO: Consider replacing whith AutoComplete from Material UI instead(has already been imported via npm install.)  */}
        <Form>
          <Form.Group controlId="stateSelector">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select" size="lg" onChange={this.handleChange}>
              {list}
            </Form.Control>
          </Form.Group>
        </Form>
        <Button
          variant="contained"
          onClick={() => {
            window.location.href = this.state.link;
            return null;
          }}
          target="_blank"
          color="primary"
        >
          Register to Vote in {this.state.currState ?? "your state"}!
        </Button>
      </div>
    );
  }
}
