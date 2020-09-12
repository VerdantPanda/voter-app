import React, { Component } from "react";

import {ListGroup, Col, Row, Form, Alert } from "react-bootstrap/";

// import states_names from "../static_data/states_names";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Axios from "axios";
// import ResponsiveEmbed
// import Iframe from "react-iframe";
let list = ["stea"]; //states_names.map((state) => <option key={state}>{state}</option>);
export default class News extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.state = { state: "Georgia", newsTitle: [""],newsLink: [""], result: "", alertVariant: "light" };
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
        
        {/*TODO: Consider replacing whith AutoComplete from Material UI instead(has already been imported via npm install.)  */}
        <Form>


    <Form.Group controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control placeHolder="Georgia" onChange={this.handleChangeState}/>
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
  handleChangeAddress1(event) {
    console.log(event.target.value);
    this.setState({ add1: event.target.value });
  }
  handleChangeAddress2(event) {
    console.log(event.target.value);
    this.setState({ add2: event.target.value });
  }
  handleChangeCity(event) {
    console.log(event.target.value);
    this.setState({ city: event.target.value });
  }
  handleChangeState(event) {
    console.log(event.target.value);
    this.setState({ state: event.target.value });
  }
  handleChangeZip(event) {
    console.log(event.target.value);
    this.setState({ zip: event.target.value });
  }
 
}

