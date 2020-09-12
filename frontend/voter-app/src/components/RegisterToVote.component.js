import React, { Component } from "react";
import { Form, Button } from "react-bootstrap/";
import states_names from "../static_data/states_names";
// import ResponsiveEmbed
// import Iframe from "react-iframe";
let list = states_names.map((state) => <option key={state}>{state}</option>);
export default class RegisterToVote extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    console.log("button clicked");
    console.log(form);
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    // setValidated(true);
  }

  render() {
    return (
      <div>
        <p>You are on the RegisterToVote component!</p>
        {/*TODO: Consider replacing whith AutoComplete from Material UI instead(has already been imported via npm install.)  */}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="stateSelector">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select" size="lg">
              {list}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
