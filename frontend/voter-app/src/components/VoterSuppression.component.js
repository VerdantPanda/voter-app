import React, { Component } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Iframe from "react-iframe";
import { ListGroup, Col, Row, Form, Alert } from "react-bootstrap/";
import axios from "axios";
import Button from "@material-ui/core/Button";
import states_names from "../static_data/states_names";
import Axios from "axios";

// import states_names from "../static_data/states_names";

// import ResponsiveEmbed
// import Iframe from "react-iframe";
let list = ["stea"]; //states_names.map((state) => <option key={state}>{state}</option>);
export default class VoterSuppression extends Component {
  constructor(props) {
    super(props);
    var today = new Date();
    var voteDay = new Date(today.getFullYear(), 10, 3);
    var one_day = 1000 * 60 * 60 * 24;
    const stateList = states_names.map((state) => (
      <option key={state}>{state}</option>
    ));
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      state: "Alabama",
      newsTitle: [""],
      newsLink: [""],
      voteDay: voteDay,
      list: stateList,
      one_day: one_day,
      today: today,
    };
  }

  onClick(event) {
    console.log("here");
    var url1 =
      "https://news.google.com/rss/search?q=Voter%20Suppression%20Georgia&hl=en-PK&gl=PK&ceid=PK:en";
    axios
      .get("http://localhost:3001/api/state/news?state=" + this.state.state)
      .then((resp) => {
        console.log(resp);
        var curr = resp.data.toString();
        var arrTitle = [""];
        var arrLink = [""];
        while (curr.indexOf("<link>") != -1) {
          var first = curr.indexOf("<title>");
          var last = curr.indexOf("</title>");

          arrTitle.push(curr.substring(first + 7, last));

          var first = curr.indexOf("<link>");
          var last = curr.indexOf("</link>");

          arrLink.push(curr.substring(first + 6, last));

          curr = curr.substring(last + 7);
        }
        this.setState({ newsLink: arrLink, newsTitle: arrTitle });
        console.log(arrLink);

        this.setState({ result: curr });
      });

    return null;
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
        <h1>Election day is November 3rd</h1>
        <h1>
          {Math.ceil(
            (this.state.voteDay.getTime() - this.state.today.getTime()) /
              this.state.one_day
          ).valueOf()}{" "}
          Days left.
        </h1>
        <h5>
          {Math.ceil(
            (this.state.voteDay.getTime() - this.state.today.getTime()) /
              this.state.one_day
          ).valueOf()}{" "}
          Days between <i>your voice</i> and <i>your nation</i>.
        </h5>
        <small>Get news about voter suppression in your state below.</small>
        <br></br>
        <br></br>
        <br></br>

        {/*TODO: Consider replacing whith AutoComplete from Material UI instead(has already been imported via npm install.)  */}
        <Form>
          <Form.Group controlId="stateSelector">
            <Form.Label>Select State</Form.Label>
            <Form.Control
              as="select"
              size="lg"
              onChange={this.handleChangeState}
            >
              {this.state.list}
            </Form.Control>
          </Form.Group>

          <Button
            variant="contained"
            onClick={this.onClick}
            target="_blank"
            color="primary"
          >
            Get News about Voter Suppression in{" "}
            {this.state.state ?? "your state"}!
          </Button>
        </Form>

        <ListGroup style={{ overflow: "scroll", maxHeight: 300 }}>
          {Array.from(Array(this.state.newsLink.length).keys()).map((num) => {
            console.log();
            return (
              <ListGroup.Item
                action
                href={this.state.newsLink[num]}
                target="_blank"
              >
                {this.state.newsTitle[num]}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
        <br></br>
        <br></br>
        <h3>Census Demographics </h3>
        <Iframe
          url="https://data.census.gov/cedsci/profile?g=0400000US42"
          width="100%"
          height="450px"
          id="food"
          className="yes"
          display="initial"
          position="relative"
          sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"
        />
        <br></br>
        <br></br>
      </div>
    );
  }
  handleChangeState(event) {
    console.log(event.target.value);
    this.setState({ state: event.target.value });
  }
}

/*
export default class VoterSuppression extends Component {
  render() {
    return (
      <div>
        <h1>Election day is November 3rd</h1>
        <h1>
          {Math.ceil((voteDay.getTime() - today.getTime()) / one_day).valueOf()}{" "}
          Days left.
        </h1>
        <p>You are on the Voter Suppression component!</p>
        <p2>HTML IFRAME TEST</p2>
        <Iframe url="https://data.census.gov/cedsci/profile?g=0400000US42"
        width="100%"
        height="450px"
        id="food"
        className="yes"
        display="initial"
        position="relative"
        sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"/>
        
      </div>
    );
  }
}
*/
