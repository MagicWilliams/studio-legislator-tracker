import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RepCard from '../RepCard/RepCard';
import './KeyPlayers.css';

class KeyPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: {
        name: "Danny K. Davis",
        img: "/img/danny.jpg",
        party: " Democrat",
        state: " IL",
        district: " 7th District",
        quote: "Statement not collected.",
        stance: "no-statement"
      },
      keyPlayers: [
        {
          name: "Robin Kelly",
          img: "/img/robin.jpg",
          party: " Democrat",
          state: " IL",
          district: " 2nd District",
          quote: "The Affordable Care Act has left behind a legacy of progress. It is working and is more popular than ever. Let's fix any issues instead of passing this bill that will make Americans sick again.",
          quoteSource: "Press release, March 7, 2017",
          quoteLink: "http://robinkelly.house.gov/media-center/press-releases/rep-kelly-releases-a-statement-on-republicans-aca-repeal-bill",
          stance: "opposed"
        },
        {
            name: "Bobby Rush",
            img: "/img/bobby.jpg",
            party: " Democrat",
            state: " IL",
            district: " 1st District",
            quote: "Statement not collected.",
            stance: "no-statement"
        },
        {
          name: "Dan Lipinski",
          img: "/img/dan.jpg",
          party: " Democrat",
          state: " IL",
          district: " 3rd District",
          quote: "Statement not collected.",
          stance: "no-statement"
        },
        {
          name: "Danny K. Davis",
          img: "/img/danny.jpg",
          party: " Democrat",
          state: " IL",
          district: " 7th District",
          quote: "Statement not collected.",
          stance: "no-statement"
        },
      ]
    }

  }

  updateShownInfo(rep) {
    this.setState({ showInfo: rep });
  }

  render() {

    return (
      <div>
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <div className="header">
              <h4 className="stanceHeader"> Key Players </h4>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={0} smOffset={2}></Col>
          {this.state.keyPlayers.map(rep =>
            <Col xs={3} sm={2}>
              <div className="keyPlayer" onClick={() => this.updateShownInfo(rep)}>
                <img src={rep.img} className="thumbnailImage"/>
                <p className="thumbnailBio" style={(rep.stance) === "opposed" ? {backgroundColor: '#cdcdcd'} : {backgroundColor: '#787878'}}> {rep.name} </p>
              </div>
            </Col>
            )}
        </Row>
      </Grid>
      <RepCard
        img={this.state.showInfo.img}
        name={this.state.showInfo.name}
        party={this.state.showInfo.party}
        state={this.state.showInfo.state}
        district={this.state.showInfo.district}
        quote={this.state.showInfo.quote}
        quoteSource={this.state.showInfo.quoteSource}
        quoteLink={this.state.showInfo.quoteLink}
        stance={this.state.showInfo.stance}
      />
    </div>

    )
  }

}

export default KeyPlayer;
