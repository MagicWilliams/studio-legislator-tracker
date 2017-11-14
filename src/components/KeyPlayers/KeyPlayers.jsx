import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './KeyPlayers.css';

class KeyPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyPlayers: [
        {
          name: "Danny",
          img: "/img/danny.jpg",
          stance: "against",
        },
        {
          name: "Dan",
          img: "/img/dan.jpg",
          stance: "IF",
        },
        {
          name: "Bobby",
          img: "/img/bobby.jpg",
          stance: "IF",
        },
        {
          name: "Robin",
          img: "/img/robin.jpg",
          stance: "against",
        },
        {
          name: "Richard",
          img: "/img/richard.jpg",
          stance: "against",
        },
        {
          name: "Tammy",
          img: "/img/tammy.jpg",
          stance: "IF",
        }
      ]
    }

  }

  render() {

    return (
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <div className="header">
              <h4 className="stanceHeader"> Key Players </h4>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xsOffset={3} xs={6}>
            <div className="scrollContainer">
              {this.state.keyPlayers.map(rep =>
                <div className="thumbnail" style={(rep.stance) === "against" ? {backgroundColor: '#cdcdcd'} : {backgroundColor: '#787878'}}>
                  <img src={rep.img} className="thumbnailImage"/>
                  <p className="thumbnailBio"> {rep.name} </p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Grid>

    )
  }

}

export default KeyPlayer;
