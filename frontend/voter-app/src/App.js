import React from "react";
import "./App.css";
import "./components/routerStyles.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Redirect } from "react-router-dom";
import {
  Container as ContainerBootStrap,
  Navbar as NavbarBootStrap,
  Nav,
} from "react-bootstrap";

import Navbar from "./components/navbar.component";
import ScanBallot from "./components/ScanBallot.component";
import VoterSuppression from "./components/VoterSuppression.component";
import Volunteer from "./components/Volunteer.component";
import RegisterToVote from "./components/RegisterToVote.component";
import TrackBallot from "./components/TrackBallot.component";
import News from "./components/News.component";
import AddressVerification from "./components/AddressVerification.component";
import LocationsToVote from "./components/LocationsToVote.component";
import Home from "./components/Home.component";
import Container from "@material-ui/core/Container";
import Gradient from "./components/Gradient";
import { Fade, Slide, Zoom } from "react-reveal";

const routes = [
  //{ path: "/", name: "", Component: "" },
  { path: "/Home", name: "", Component: Home },
  { path: "/ScanBallot", name: "Scan Ballot", Component: ScanBallot },
  {
    path: "/VoterSuppression",
    name: " Voter Suppression",
    Component: VoterSuppression,
  },
  { path: "/Volunteer", name: "Volunteer", Component: Volunteer },
  {
    path: "/RegisterToVote",
    name: "Register To Vote",
    Component: RegisterToVote,
  },
  { path: "/TrackBallot", name: "Track Ballot", Component: TrackBallot },
  { path: "/News", name: "News", Component: News },
  {
    path: "/AddressVerification",
    name: "Verify Address",
    Component: AddressVerification,
  },
  {
    path: "/LocationsToVote",
    name: "Locations To Vote",
    Component: LocationsToVote,
  },
];

function App() {
  return (
    <div className="test">
      {" "}
      <Router>
        <Nav.Link as={NavLink} to="/Home">
          <Slide left>
            <h1> Liber Populus</h1>
          </Slide>
        </Nav.Link>
        <Container maxWidth="lg">
          <Fade top>
            <NavbarBootStrap variant="dark" style={{ overflowX: "scroll" }}>
              {" "}
              <Nav className="mx-auto">
                {routes.map((route) => (
                  <Nav.Link
                    key={route.path}
                    as={NavLink}
                    to={route.path}
                    activeClassName="active"
                    exact
                  >
                    <h5>
                      <i>{route.name}</i>
                    </h5>
                  </Nav.Link>
                ))}
              </Nav>
            </NavbarBootStrap>
          </Fade>
          <br />
          <Route exact path="/">
            {<Redirect to="/Home" />}
          </Route>
          {/* Other Routes */}
          <Zoom top>
            <Container className="container">
              {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                  {({ match }) => (
                    <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames="page"
                      unmountOnExit
                    >
                      <div className="page">
                        <Component />
                      </div>
                    </CSSTransition>
                  )}
                </Route>
              ))}
            </Container>
          </Zoom>
        </Container>
      </Router>
    </div>
  );
}

export default App;
