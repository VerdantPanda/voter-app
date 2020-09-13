import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import Slider from "./Slider";
import ObamaPic from "../static_data/obama.jpg";
import VoteBox from "../static_data/vote_box.jpeg";
import VoterSuppress from "../static_data/voter_suppress.jpeg";
import VoteLines from "../static_data/vote_lines.jpeg";
// import Redirect from 'react-router-dom';

const slideData = [
  {
    index: 0,
    headline: "Don't boo, Vote.",
    button: "Shop now",
    src: ObamaPic,
  },
  {
    index: 1,
    headline: "Register",
    button: "Book travel",
    src: VoteBox,
  },
  {
    index: 2,
    headline: "Vote",
    button: "Listen",
    src: VoterSuppress,
  },
  {
    index: 3,
    headline: "Your Voice",
    button: "Get Focused",
    src: VoteLines,
  },
];
var today = new Date();
var voteDay = new Date(today.getFullYear(), 10, 3);
var one_day = 1000 * 60 * 60 * 24;
export default class Home extends Component {
  render() {
    return (
      <div>
        <Slider heading="Example Slider" slides={slideData}></Slider>
        <br></br>
        <br></br>
        <br></br>
        <h1>Election day is November 3rd.</h1>
        <h1>
          {Math.ceil((voteDay.getTime() - today.getTime()) / one_day).valueOf()}{" "}
          Days left.
        </h1>
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
        <p>
          This is where <b>Liber Populus</b> comes in.
        </p>
        <p>
          <b>Liber Populus</b> – Latin for <i>“free people”</i>
        </p>
        <p>
          <b>Liber Populus</b> provides an assortment of tools and information
          to equip every voter with what they need to ensure they register and
          cast their ballot while avoiding obstacles such as voter suppression,
          ballot filing mistakes, and more!
        </p>
        <br></br>
        <br></br>
        <br></br>
        <small>Created with love for PennApps ♥️ </small>
      </div>
    );
  }
}
