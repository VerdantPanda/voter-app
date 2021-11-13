import React, { Component } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Iframe from "react-iframe";
import { ListGroup, Col, Row, Form, Image} from "react-bootstrap/";
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
    this.getStateCode = this.getStateCode.bind(this);

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
        arrLink.shift(); arrLink.shift(); arrTitle.shift(); arrTitle.shift();
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
          url="https://data.census.gov/cedsci/profile?g=0400000US01"
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
    var code = this.getStateCode(event.target.value);
    var el = document.getElementById('food');
    el.src = "https://data.census.gov/cedsci/profile?g=0400000US"+code;
  }

  getStateCode(state){
    console.log("hhh");
    switch(state){
      case "Alabama":
        console.log("hala");
        return '01';
      case "Connecticut":
        console.log("coh");
        return '09';
      case "Maine":
        return '23';
      case "Massachusetts":
        return '25'; 
      case "New Hampshire":
        return '33';
      case "Rhode Island":
        return '44';
      case "Vermont":
        return '50';
      case "New Jersey":
        return '34';
      case "New York":
        return '36';
      case 'Pennsylvania':
        return '42';
      case 'Indiana':
        return '18';
      case 'Illinois':
        return '17';
      case 'Michigan':
        return '26';
      case 'Ohio':
        return '39';
      case 'Wisconsin':
        return '55';
      case 'Iowa':
        return '19';
      case 'Kansas':
        return '20';
      case 'Minnesota':
        return '27';
      case 'Missouri':
        return '29';
      case 'Nebraska':
        return '31';
      case 'North Dakota':
        return '38';
      case 'South Dakota':
        return '46';
      case 'Delaware': return	'10';
      case 'District of Columbia': return '11';
      case 'Florida': return	'12';
      case 'Georgia': return	'13';
      case 'Maryland': return	'24';
      case 'North Carolina': return	'37';
      case 'South Carolina': return	'45';
      case 'Virginia': return	'51';
      case 'West Virginia': return	'54';
      
      case 'Kentucky': return	'21';
      case 'Mississippi': return	'28';
      case 'Tennessee': return	'47'; 
        case 'Arkansas': return	'05';
        case 'Louisiana': return	'22';
        case 'Oklahoma': return	'40';
        case 'Texas': return	'48';   
        case 'Arizona': return	'04';
        case 'Colorado': return	'08';
        case 'Idaho': return	'16';
        case 'New Mexico': return	'35';
        case 'Montana': return	'30';
        case 'Utah': return	'49';
        case 'Nevada': return	'32';
        case 'Wyoming': return	'56'; 
        case 'Alaska': return	'02';
        case 'California': return	'06';
        case 'Hawaii': return	'15';
        case 'Oregon': return	'41';
        case 'Washington': return	'53';      

    }
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
