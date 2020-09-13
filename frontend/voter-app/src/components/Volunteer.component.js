import React, { Component } from "react";
import OrgCard from "./orgCard";
import ObamaPic from "../static_data/obama.jpg";
import AutoGrid from "./AutoGrid";
import Axios from "axios";

const volunteerSitesList = [
  {
    title: "Become a Poll Worker",
    signUp: "https://www.eac.gov/help-america-vote#section-sign-up",
    learnMore: "https://www.eac.gov/voters/become-poll-worker",
    description:
      "Election workers are essential to ensuring that elections are a success. With each election, millions of Americans dedicate themselves to sustaining the backbone of democracy - our election process.",
    image: "https://www.eac.gov/sites/default/files/logo-large.png",
  },
  {
    title: "When We All Vote",
    signUp: "https://action.whenweallvote.org/page/s/volunteer",
    learnMore: "https://www.whenweallvote.org/about-us/",
    description:
      "When We All Vote is a non-profit, nonpartisan organization that is on a mission to increase participation in every election and close the race and age voting gap by changing the culture around voting, harnessing grassroots energy, and through strategic partnerships to reach every American.",
    image:
      "https://www.whenweallvote.org/wp-content/uploads/2019/06/wwav_meta_mo_nophone.png",
  },
  {
    title: "Rock The Vote",
    signUp:
      "https://www.rockthevote.org/get-involved/volunteer-with-rock-the-vote/",
    learnMore: "https://www.rockthevote.org/about-rock-the-vote/",
    description:
      "In 1990, music executives founded Rock the Vote in response to the censorship of hip-hop and rap artists. Our first partnership, with MTV, promoted the message that “Censorship is Un-American” and activated millions of young people across the country to exercise their rights and represent their interests.",
    image: "https://www.rockthevote.org/wp-content/uploads/tPob9bHh.jpeg",
  },
  {
    title: "Vote Riders",
    signUp: "https://www.voteriders.org/volunteer/form/",
    learnMore: "https://www.voteriders.org/about/",
    description:
      "VoteRiders is a non-partisan, non-profit organization with a mission to ensure that all citizens are able to exercise their right to vote. VoteRiders informs and helps citizens to secure their voter ID as well as inspires and supports organizations, local volunteers, and communities to sustain voter ID education and assistance efforts.",
    image:
      "https://www.voteriders.org/wp-content/uploads/2020/07/logo-main.png",
  },
  {
    title: "Election Protection",
    signUp: "https://protectthevote.net/#volunteer",
    learnMore: "https://protectthevote.net/about/",
    description:
      "The national, nonpartisan Election Protection coalition works so all voters have an equal opportunity to participate in the political process. Made up of more than 100 local, state and national partners, Election Protection works year-round to advance and defend your right to vote.",
    image:
      "https://protectthevote.net/wp-content/uploads/2020/01/aboutpagenew-271x300.jpg",
  },
  {
    title: "Head Count",
    signUp: "https://www.headcount.org/intranet/#/sign-up",
    learnMore: "https://www.headcount.org/about-headcount/",
    description:
      "HeadCount is a non-partisan organization that uses the power of music to register voters and promote participation in democracy. We reach young people and music fans where they already are – at concerts and online – to inform and empower.",
    image:
      "https://www.headcount.org/wp-content/themes/headcount/img/HeadCountLogo.png",
  },
];

const list = volunteerSitesList.map((site) => {
  //link preview api call axios
  return (
    <OrgCard
      title={site.title}
      description={site.description}
      signUpLink={site.signUp}
      learnMoreLink={site.learnMore}
      picture={site.image}
    ></OrgCard>
  );
});

export default class Volunteer extends Component {
  render() {
    return (
      <div>
        {/* <p>Below are organizaions </p> */}
        <h3>Browse Volunteering Organizations</h3>
        <p>
          Volunteering in one's community is one of the best ways to increase
          voter turnout in local, state, and federal elections. Check out one of
          the following organizations below to get involved!
        </p>
        <br></br>
        <br></br>
        <AutoGrid cardList={list}></AutoGrid>
      </div>
    );
  }
}
