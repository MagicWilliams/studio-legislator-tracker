import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RepCard from '../RepCard/RepCard';
import './StateReps.css';

class StateReps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: props.representatives[0],
      currState: props.currState,
      keyPlayer: false,
      stances: [
        {type: "in-favor", header: "In Favor ✅"},
        {type: "opposed", header: "Opposed 🚫"},
        {type: "no-statement", header: "No Statement ❓"},
      ]
    }
    this.updateShownInfo = this.updateShownInfo.bind(this);
    this.createOutput = this.createOutput.bind(this);
  }

  componentDidUpdate() {
    if (this.props.currState !== this.state.currState) {
      this.setState({
        showInfo: this.props.representatives[0],
        currState: this.props.currState
      });
    }
  }

  updateShownInfo(rep) {
    this.setState({ showInfo: rep });
  }

  createOutput(rep) {
    return (
      <div class="allContent">
        <div class="content">
          <img style={(rep.name) === this.state.showInfo.name ?
            {backgroundColor: '#e8e8e8', borderRadius: 0, borderColor: '#e8e8e8'} :
            {borderRadius: 0}} alt="img"
            src={rep.party.toLowerCase() == " republican" ? "/img/republican.png" : "/img/democrat.png"}
            className="imageParty"/>
          <p className="stanceFillers" className={rep.party.toLowerCase() == " republican" ? "republicans" : "democrats"}
            style={(rep.name) === this.state.showInfo.name ?
              {backgroundColor: '#e8e8e8', borderRadius: 0, borderColor: '#e8e8e8'} : {borderRadius: 0}}
            onClick={() => this.updateShownInfo(rep)}> {rep.name} </p>
        </div>
      </div>
    );

  }

  render() {
    return (
      <div className="stateReps">
        <Grid fluid>
          <Row className="stateRepTable">


            <Col smOffset={2} />
            {this.state.stances.map((stance, index) =>
              <Col xs={4} sm={2.33}>
                <h3 className="stanceTitle"> {stance.header} </h3>
                {this.props.representatives.map((rep, index) =>
                  {if (rep.stance === stance.type)
                    return this.createOutput(rep);
                  }
                )}
              </Col>
            )}

            <Col smOffset={2}></Col>
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

export default StateReps;
