import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ScanBallot from "./components/ScanBallot.component";
import VoterSuppression from "./components/VoterSuppression.component";
import Volunteer from "./components/Volunteer.component";
import RegisterToVote from "./components/RegisterToVote.component";
import TrackBallot from "./components/TrackBallot.component";
import News from "./components/News.component";
import AddressVerification from "./components/AddressVerification.component";
import LocationsToVote from "./components/LocationsToVote.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/ScanBallot" component={ScanBallot}></Route>
        <Route path="/VoterSuppression" component={VoterSuppression}></Route>
        <Route path="/Volunteer" component={Volunteer}></Route>
        <Route path="/RegisterToVote" component={RegisterToVote}></Route>
        <Route path="/TrackBallot" component={TrackBallot}></Route>
        <Route path="/News" component={News}></Route>
        <Route
          path="/AddressVerification"
          component={AddressVerification}
        ></Route>
        <Route path="/LocationsToVote" component={LocationsToVote}></Route>
      </div>
    </Router>
  );
}

export default App;
