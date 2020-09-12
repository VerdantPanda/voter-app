import React, { Component } from "react";

import { Col, Row, Form, Alert } from "react-bootstrap/";

// import states_names from "../static_data/states_names";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Axios from "axios";
// import ResponsiveEmbed
// import Iframe from "react-iframe";
let list = ["stea"]; //states_names.map((state) => <option key={state}>{state}</option>);
export default class AddressVerification extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeAddress1 = this.handleChangeAddress1.bind(this);
    this.handleChangeAddress2 = this.handleChangeAddress2.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.handleChangeZip = this.handleChangeZip.bind(this);
    this.state = { add1: null, add2: null, city:null, state: null, zip: null, result: "" };
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
        <p>Enter Your Address</p>
        {/*TODO: Consider replacing whith AutoComplete from Material UI instead(has already been imported via npm install.)  */}
        <Form>
        <Form.Group controlId="formGridAddress1">
    <Form.Label>Address Line 1</Form.Label>
    <Form.Control placeholder="1234 Main St" onChange={this.handleChangeAddress1}/>
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address Line 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" onChange={this.handleChangeAddress2}/>
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control onChange={this.handleChangeCity}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control onChange={this.handleChangeState}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control onChange={this.handleChangeZip}/>
    </Form.Group>
  </Form.Row>
        <Button
          variant="contained"
          onClick = {
              () => {
            console.log("here");
            var xml1 = "<AddressValidateRequest USERID='450VOTER4281'>"+
            "<Revision>1</Revision>"+
            "<Address ID='0'><Address1>"+this.state.add1+"</Address1><Address2>"+
            this.state.add2+"</Address2>"+
            "<City>"+this.state.city+"</City><State>"+this.state.state+"</State><Zip5>"+this.state.zip+"</Zip5><Zip4/></Address></AddressValidateRequest>";
            xml1 = xml1.replace(" ", "%20");
            xml1 = xml1.replace("<", "%3C");
            xml1 = xml1.replace(">", "%3E");
            console.log(xml1);
            //var url2 = "https://secure.shippingapis.com/ShippingAPI.dll?API=Verify&XML=%3CAddressValidateRequest%20USERID=%22450VOTER4281%22%3E%20%3CRevision%3E1%3C/Revision%3E%20%3CAddress%20ID=%220%22%3E%20%3CAddress1%3ESUITE%20K%3C/Address1%3E%20%3CAddress2%3E29851%20Aventura%3C/Address2%3E%20%3CCity/%3E%20%3CState%3ECA%3C/State%3E%20%3CZip5%3E92688%3C/Zip5%3E%20%3CZip4/%3E%20%3C/Address%3E%20%3C/AddressValidateRequest%3E"
            var url1 = "https://secure.shippingapis.com/ShippingAPI.dll?API=Verify&XML="+xml1;
            //console.log(url2);   
            axios.get(url1).then(resp => {
              var curr = resp.data.toString()
              curr = curr.replace(/<[^>]*>/g, ' ');
              this.setState({ result: curr });
              console.log(resp.data);
});
            
            return null;
          }}
          target="_blank"
          color="primary"
        >
          Verify your address in {this.state.state ?? "your state"}!
        </Button>
        </Form>
        <Alert controlId="alert" variant="light">
  <Alert.Heading>Corrected Address:</Alert.Heading>
  <p>
    {this.state.result}
  </p>
  <hr />
  <p className="mb-0">
    a
  </p>
</Alert>
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

