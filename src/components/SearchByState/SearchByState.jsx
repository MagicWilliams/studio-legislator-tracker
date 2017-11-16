import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RepCard from '../RepCard/RepCard';
import StateReps from '../StateReps/StateReps';
import './SearchByState.css';

class SearchByState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      representatives: props.representatives,
      currState: "Illinois",
      senators: [
        {
          name: "Durrell Gill",
          img: "/img/durrell.png",
          position1: "College Democrats",
          position2: "college Republicans",
          email: "durell@u.northwestern.edu",
        },
        {
          name: "Hayeon Kim",
          img: "/img/durrell2.png",
          position1: "Asian Pacific",
          position2: "college Republicans",
          email: "Hayeon@u.northwestern.edu",
        },
        {
          name: "Karin Zhu",
          img: "/img/durrell3.png",
          position1: "College Democrats",
          position2: "Chinese Students",
          email: "karin@u.northwestern.edu",
        },
        {
          name: "Dylan Gill",
          img: "/img/durrell4.png",
          position1: "College Democrats",
          position2: "college Republicans",
          email: "Dylan@u.northwestern.edu",
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className="header">
                <h4 className="stanceHeader"> Search By State </h4>
              </div>
            </Col>
          </Row>

        </Grid>

        <StateReps representatives={this.props.representatives}/>

        {/*<Grid fluid>
          <Row>
            <Col xsOffset={3}></Col>
            {this.state.senators.map(val =>
              <Col md={2}>
                <div className="senateCard">
                  <img src={val.img} alt="dur" className="senatePic"/>
                  <div className="senateBio">
                    <p className="Name"> {val.name} </p>
                    <img src="/img/Academic.png" alt="committee" className="committeePic"/>
                    <p className="Position"> {val.position1} </p>
                    <p className="Position"> {val.position2} </p>
                    <p className="Position"> {val.email} </p>
                  </div>
                </div>
              </Col>
            )}

          </Row>

        </Grid>*/}

      </div>
    );
  }
}

export default SearchByState;
