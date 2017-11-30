import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RepCard from '../RepCard/RepCard';
import './KeyPlayers.css';

class KeyPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo:
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
          "name": "Rodney Davis",
          "img": "/img/rodney.jpg",
          "party": " Republican",
          "state": " IL",
          "district": " 13th District",
          "quote": "Some members, from both parties, may not want to face the mess that Obamacare has created and what is required to clean it up, but we made a promise to the American people to responsibly fix our health care system and that’s what this bill does.",
          "quoteSource": "Press release, March 7, 2017",
          "quoteLink": "http://rodneydavis.house.gov/news/documentsingle.aspx?DocumentID=399253",
          "stance": "in-favor"
        },
        {
          "name": "Steve Chabot",
          "img": "/img/stevechabot.jpg",
          "party": " Republican",
          "state": " OH",
          "district": " 1st District",
          "quote": "Repealing and replacing Obamacare is going to be a complicated, multi-step process. The legislation introduced this week begins the process by taking control away from federal bureaucrats and returning health care decisions to patients and their doctors. I expect that changes to improve the legislation will be made as it works its way through Congress, and I hope to be able to support the legislation in its final form.",
          "stance": "in-favor",
          "quoteSource": "Press release, March 7, 2017",
          "quoteLink": "https://twitter.com/RepBillJohnson/status/844587815828684800"
        },
        {
          "name": "Jerry McNerney",
          "img": "/img/danny.jpg",
          "party": " Democrat",
          "state": " CA",
          "district": " 9th District",
          "quote": "If you're a family living paycheck to paycheck, you have a lot to be afraid of. You will either pay more for less coverage or you will lose coverage altogether.",
          "stance": "opposed"
        }
      ],
      keyPlayer: true
    }

  }

  updateShownInfo(rep) {
    this.setState({ showInfo: rep });
  }

  updateEmoji(rep) {
    if (rep.stance=="opposed") {
      return "🚫";
    }
    if (rep.stance=="in-favor") {
      return "✅";
    }
    if (rep.stance=="no-statement") {
      return "❓";
    }
    //return "thumbnailBio";
  }

  createOutput(rep) {
    return (
      <div class="allContent">
        <div class="keyPlayerName">
          <img alt="img" src={rep.party.toLowerCase() == " republican" ? "/img/republican.png" : "/img/democrat.png"} className="imageParty"/>
          <p className="stanceFillers" className={rep.party.toLowerCase() == " republican" ? "republicans" : "democrats"}
            onClick={() => this.updateShownInfo(rep)}
            > {rep.name}
          </p>
      </div>
    </div>
    );

  }

  render() {
    var name = this.state.showInfo.name;
    //var thumbnailBio = "thumbnailBio";
    return (
      <div>
        <Grid fluid className="allKeyPlayers">
          <Row>
            <Col xs={12}>
              <div className="header">
                <h3 className="stanceHeader"> Key Players </h3>
              </div>
            </Col>
          </Row>
          <Row className="keyPlayersContainer">
            <Col xs={0} smOffset={2}></Col>
            {this.state.keyPlayers.map(rep =>
              <Col xs={3} sm={2}>
                <div className="keyPlayer"
                  style={(rep.name) === name ?
                    {backgroundColor: '#e8e8e8', borderRadius: '6%', borderColor: '#e8e8e8'} :
                    {borderRadius: 0}}
                  onClick={() => this.updateShownInfo(rep)}>
                  <img src={rep.img} className="thumbnailImage"/>
                  <div className="nameAndDescription">
                     {this.createOutput(rep)}
                    <p className="thumbnailDetails"> {rep.state}, {rep.district} { } {this.updateEmoji(rep)} </p>
                  </div>
                  {/* <p className="thumbnailBioOpposed"> </p> */}
                  {/* <p className="emoji"> {this.updateEmoji(rep)} </p> */}
                </div>
              </Col>
              )}
          </Row>
        </Grid>
        <RepCard
          keyPlayer={this.state.keyPlayer}
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
