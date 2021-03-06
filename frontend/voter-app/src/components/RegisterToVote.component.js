import React, { Component } from "react";
import { Form } from "react-bootstrap/";
import states_names from "../static_data/states_names";
import axios from "axios";
import Button from "@material-ui/core/Button";
// import ResponsiveEmbed
// import Iframe from "react-iframe";
let list = states_names.map((state) => <option key={state}>{state}</option>);
export default class RegisterToVote extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { currState: null, link: "#", foundLink: false };
  }

  async getState() {
    console.log(this.currState);
    try {
      const { data } = await axios.get(
        "https://voterapppennapps.herokuapp.com/api/state/linkregister/" +
          this.state.currState
      );

      if (data) window.open(data, "_blank");
      this.setState({ link: data, foundLink: true });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange(event) {
    this.setState({ currState: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>Register To Vote</h2>
        <p>
          At the very core of our democratic process, voting ensures that each
          individual member of society has thier voice heard. Register to vote
          below, and poise yourself to shape the fabric of the American story.
        </p>
        {/*TODO: Consider replacing whith AutoComplete from Material UI instead(has already been imported via npm install.)  */}
        <Form>
          <Form.Group controlId="stateSelector">
            <Form.Label>Select your state:</Form.Label>
            <Form.Control as="select" size="lg" onChange={this.handleChange}>
              {list}
            </Form.Control>
          </Form.Group>
        </Form>
        <Button
          variant="contained"
          onClick={() => {
            const stateLink = this.getState();

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
