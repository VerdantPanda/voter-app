import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Liber Populus
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/ScanBallot" className="nav-link">
                ScanBallot
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/VoterSuppression" className="nav-link">
                VoterSuppression
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/Volunteer" className="nav-link">
                Volunteer
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/RegisterToVote" className="nav-link">
                RegisterToVote
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/TrackBallot" className="nav-link">
                TrackBallot
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/News" className="nav-link">
                News
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/AddressVerification" className="nav-link">
                AddressVerification
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/LocationsToVote" className="nav-link">
                LocationsToVote
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
