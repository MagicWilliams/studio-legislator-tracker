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
        quote: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
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
            party: " Republican",
            state: " IL",
            district: " 1st District",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            stance: "opposed",
            quoteSource: "Press release, March 7, 2017",
            quoteLink: "http://robinkelly.house.gov/media-center/press-releases/rep-kelly-releases-a-statement-on-republicans-aca-repeal-bill",

        },
        {
          name: "Dan Lipinski",
          img: "/img/dan.jpg",
          party: " Democrat",
          state: " IL",
          district: " 3rd District",
          quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
          stance: "in-favor",
          quoteSource: "Press release, March 7, 2017",
          quoteLink: "http://robinkelly.house.gov/media-center/press-releases/rep-kelly-releases-a-statement-on-republicans-aca-repeal-bill",

        },
        {
          name: "Danny K. Davis",
          img: "/img/danny.jpg",
          party: " Democrat",
          state: " IL",
          district: " 7th District",
          quote: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga",
          stance: "no-statement",
          quoteSource: "Press release, March 7, 2017",
          quoteLink: "http://robinkelly.house.gov/media-center/press-releases/rep-kelly-releases-a-statement-on-republicans-aca-repeal-bill",

        },
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
    if (rep.party.toLowerCase() == " republican") {
      //return <p className="stanceFillers" className="republicans"> (R) {rep.name} </p>;
      return <div class="allContent"> <div class="keyPlayerName">
        <img alt="img" src="/img/republican.png" className="imageParty"/>
        <p className="stanceFillers" className="republicans"
          onClick={() => this.updateShownInfo(rep)}
          > {rep.name}
        </p>
      </div>
    </div>;
    }
    if (rep.party.toLowerCase() == " democrat") {
      return <div class="allContent"> <div class="keyPlayerName">
        <img alt="img" src="/img/democrat.png" className="imageParty"/>
        <p className="stanceFillers" className="democrats"
          onClick={() => this.updateShownInfo(rep)}> {rep.name}
        </p>
      </div> </div>;
    }
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
                style={(rep.name) === name ? {backgroundColor: '#e8e8e8', borderRadius: 6,
              borderColor: '#e8e8e8'} : {borderRadius: 0}}
                onClick={() => this.updateShownInfo(rep)}>
                <img src={rep.img} className="thumbnailImage"                />
              <div className="nameAndDescription">
                <h4 className="thumbnailBio" >
                  {/* style={(rep.stance) === "opposed" ? {backgroundColor: '#cdcdcd'} : {backgroundColor: '#787878'}}>
                  style={(rep.name) === name ? {backgroundColor: '#cdcdcd'} : {backgroundColor: '#787878'}}> */}
                 {this.createOutput(rep)}
                </h4>
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
