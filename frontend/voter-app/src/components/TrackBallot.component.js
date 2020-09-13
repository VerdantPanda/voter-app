import React, { useState } from "react";
import { Container, Form, Image, Jumbotron } from "react-bootstrap/";
import states_names from "../static_data/states_names";
import Button from "@material-ui/core/Button";
import axios from "axios";
import GoogleApiWrapper from "./GoogleApiWrapper";
import TrackBallotGif from "../static_data/track-ballot.gif";

//AIzaSyAEq-OyHRzCJ1pvQKV9Qwq0INafDci8G3A

const TrackBallot = () => {
  const list = states_names.map((state) => (
    <option key={state}>{state}</option>
  ));
  const [state, changeState] = useState(null);
  const getState = async () => {
    try {
      const { data } = await axios.get(
        "https://voterapppennapps.herokuapp.com/api/state/getstate/" + state
      );
      if (data.trackingLink) window.open(data.trackingLink, "_blank");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    changeState(event.target.value);
  };
  return (
    <div>
      <Container>
        {" "}
        <h4>Track Your Ballot</h4>
        <Image
          width="20%"
          src={TrackBallotGif}
          rounded
          style={{ paddingRight: "10px" }}
        ></Image>
        Tracking ballots allows voters to ensure that their ballot is properly
        recieved and counted.
        <br></br>
        <br></br>
        <p>
          Each state uses a different process to track ballots, however some
          states do not provide the service at all. Use the tool below to select
          your state and be directed to a local ballot tracking service if
          availible.
        </p>
      </Container>
      <br></br>

      <Form>
        <Form.Group controlId="stateSelector">
          <Form.Label>Select your state:</Form.Label>
          <Form.Control as="select" size="lg" onChange={handleChange}>
            {list}
          </Form.Control>
        </Form.Group>
      </Form>
      <Button
        variant="contained"
        onClick={() => {
          getState();
        }}
        target="_blank"
        color="primary"
      >
        Track your {state ?? "state"} ballot!
      </Button>
    </div>
  );
};

export default TrackBallot;
