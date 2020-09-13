import React, { Component } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Iframe from 'react-iframe';
import {ListGroup, Col, Row, Form, Alert } from "react-bootstrap/";
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
    const stateList = states_names.map((state) => <option key={state}>{state}</option>);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.state = { state: "Alabama", newsTitle: [""],newsLink: [""], voteDay: voteDay, list: stateList,
  one_day: one_day, today: today};
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
          {Math.ceil((this.state.voteDay.getTime() - this.state.today.getTime()) / this.state.one_day).valueOf()}{" "}
          Days left.
        </h1>
        <p>Get news about voter suppression in your state below.</p>
        <Iframe url="https://data.census.gov/cedsci/profile?g=0400000US42"
        width="100%"
        height="450px"
        id="food"
        className="yes"
        display="initial"
        position="relative"
        sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"/>
        
        
        {/*TODO: Consider replacing whith AutoComplete from Material UI instead(has already been imported via npm install.)  */}
        <Form>

        <Form.Group controlId="stateSelector">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select" size="lg" onChange={this.handleChangeState}>
              {this.state.list}
            </Form.Control>
          </Form.Group>
    

        <Button
          variant="contained"
          onClick = {
              () => {
            console.log("here");
               var url1 = "https://news.google.com/rss/search?q=Voter%20Suppression%20Georgia&hl=en-PK&gl=PK&ceid=PK:en";
            axios.get("http://localhost:3001/api/state/news?state="+this.state.state).then(resp => {
              console.log(resp);
              var curr = resp.data.toString();
              var arrTitle = [""]
              var arrLink = [""]
              while (curr.indexOf("<link>") != -1){
                var first = curr.indexOf("<title>");
                var last = curr.indexOf("</title>");
                
                arrTitle.push(curr.substring(first+7, last));
                
                var first = curr.indexOf("<link>");
                var last = curr.indexOf("</link>");
                
                arrLink.push(curr.substring(first+6, last));
                
                
                curr = curr.substring(last+7);


              }
              this.setState({newsLink:arrLink, newsTitle:arrTitle});
              console.log(arrLink);


              this.setState({result: curr});
              
              

              
});
            
            return null;
          }}
          target="_blank"
          color="primary"
        >
          Get News about Voter Suppression in {this.state.state ?? "your state"}!
        </Button>
        </Form>
        
<ListGroup>
    
    <ListGroup.Item action href={this.state.newsLink[4]} target="_blank">
      {this.state.newsTitle[4]}
    </ListGroup.Item>
    <ListGroup.Item action href={this.state.newsLink[2]} target="_blank">
      {this.state.newsTitle[2]}
    </ListGroup.Item>
    <ListGroup.Item action href={this.state.newsLink[3]} target="_blank">
      {this.state.newsTitle[3]}
    </ListGroup.Item>
    <ListGroup.Item action href={this.state.newsLink[5]} target="_blank">
      {this.state.newsTitle[5]}
    </ListGroup.Item>
    <ListGroup.Item action href={this.state.newsLink[6]} target="_blank">
      {this.state.newsTitle[6]}
    </ListGroup.Item>
    <ListGroup.Item action href={this.state.newsLink[7]} target="_blank">
      {this.state.newsTitle[7]}
    </ListGroup.Item>
    <ListGroup.Item action href={this.state.newsLink[8]} target="_blank">
      {this.state.newsTitle[8]}
    </ListGroup.Item>
    <ListGroup.Item action href={this.state.newsLink[9]} target="_blank">
      {this.state.newsTitle[9]}
    </ListGroup.Item>
    <ListGroup.Item action href={this.state.newsLink[10]} target="_blank">
      {this.state.newsTitle[10]}
    </ListGroup.Item>
    <ListGroup.Item action href={this.state.newsLink[11]} target="_blank">
      {this.state.newsTitle[11]}
    </ListGroup.Item>
    <ListGroup.Item action href={this.state.newsLink[12]} target="_blank">
      {this.state.newsTitle[12]}
    </ListGroup.Item>





  </ListGroup>
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