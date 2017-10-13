import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      representative: {
        name: "peter",
        img: "/img/peter.jpg",
        party: " republican",
        state: " IL",
        district: " 6th district",
        quote: "However well-intentioned, Obamacare failed the American people. Illinois families are paying more money for fewer and fewer benefits. Insurance premiums have increased by an average of over 21%. Last year, the Land of Lincoln co-op became the 16th in the country to collapse, leaving 49,000 Illinoisans without any healthcare coverage at all and taxpayers on for hook for over $160 million. We’re committed to an open and transparent process as we debate this legislation.",
        quoteSource: "Press release, March 7, 2017",
        quoteLink: "https://roskam.house.gov/HealthCare",
        stance: "in-favor",
      }
    }

  }

  render() {
    return (
      <div className="App">
        <Grid fluid>
            <Row>
              <Col xs={3} smOffset={1} sm={2} mdOffset={2} md={1} lgOffset={3} lg={1}>
                <img alt="peter" src={this.state.representative.img} className="image"/>
              </Col>
              <Col xs={8} sm={8} md={6} lg={5} className="bio">
                <h4 className="repHeader">
                  {this.state.representative.name},
                  {this.state.representative.party},
                  {this.state.representative.state},
                  {this.state.representative.district}
                </h4>

                <p> {this.state.representative.quote} </p>
                <p> {this.state.representative.quoteSource} </p>
                <p> {this.state.representative.quoteLink} </p>
              </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default Card;
