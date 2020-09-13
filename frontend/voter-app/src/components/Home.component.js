import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import Slider from "./Slider";
// import Redirect from 'react-router-dom';
const slideData = [
  {
    index: 0,
    headline: "New Fashion Apparel",
    button: "Shop now",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
  },
  {
    index: 1,
    headline: "In The Wilderness",
    button: "Book travel",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
  },
  {
    index: 2,
    headline: "For Your Current Mood",
    button: "Listen",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
  },
  {
    index: 3,
    headline: "Focus On The Writing",
    button: "Get Focused",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
  },
];
export default class Home extends Component {
  render() {
    return (
      <div>
        <Slider heading="Example Slider" slides={slideData}></Slider>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* <p>You are on the Home component!</p> */}
        <h5>Vote like your life depends on it.</h5>
        <p>
          By many accounts, this upcoming 2020 election will be one of the most
          contentious to date. With a global pandemic, economic crisis, racial
          unrest, two starkly different candidates, and a polarized nation, it
          is important that everyone who is able to partakes in the democratic
          process at the heart of the American story.
        </p>
        <p>This is where Liber Populus comes in.</p>
        <p>Liber Populus – Latin for “free people”</p>
        <p>
          Liber Populus provides an assortment of tools and information to equip
          every voter with what they need to ensure they register and cast their
          ballot while avoiding obstacles such as voter suppression, ballot
          filing mistakes, and more!
        </p>
      </div>
    );
  }
}
