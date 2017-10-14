import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from './Card.js'
import Stance from './Stance.js'
import './Stance.css';

class Stances extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }

  }

  render() {
    return (
      <div>
      <Stance st="IN FAVOR"/>
      <Card
      img="/img/peter.jpg"
      name="Peter"
      party=" Republican"
      state=" IL"
      district=" 6th District"
      quote="However well-intentioned, Obamacare failed the American people. Illinois families are paying more money for fewer and fewer benefits. Insurance premiums have increased by an average of over 21%. Last year, the Land of Lincoln co-op became the 16th in the country to collapse, leaving 49,000 Illinoisans without any healthcare coverage at all and taxpayers on for hook for over $160 million. We’re committed to an open and transparent process as we debate this legislation."
      quoteSource="Press release, March 7, 2017"
      quoteLink="https://roskam.house.gov/HealthCare"
      stance="in-favor"
      />

      <Stance st="OPPOSED" />
      <Stance st="NO STATEMENT" />
      </div>

    );
  }
}

export default Stances;
