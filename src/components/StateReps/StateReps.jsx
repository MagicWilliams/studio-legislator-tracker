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
      keyPlayer: false
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
    if (rep.party.toLowerCase() == " republican") {
      //return <p className="stanceFillers" className="republicans"> (R) {rep.name} </p>;
      return <div class="allContent">
        <div class="content"
        >
        <img style={(rep.name) === this.state.showInfo.name ? {backgroundColor: '#e8e8e8', borderRadius: 0,
      borderColor: '#e8e8e8'} : {borderRadius: 0}} alt="img" src="/img/republican.png" className="imageParty"/>
        <p className="stanceFillers" className="republicans"
          style={(rep.name) === this.state.showInfo.name ? {backgroundColor: '#e8e8e8', borderRadius: 0,
        borderColor: '#e8e8e8'} : {borderRadius: 0}}
          onClick={() => this.updateShownInfo(rep)}> {rep.name} </p>
      </div>
    </div>;
    }
    if (rep.party.toLowerCase() == " democrat") {
      return <div class="allContent">
        <div class="content"
           >
        <img
          style={(rep.name) === this.state.showInfo.name ? {backgroundColor: '#e8e8e8', borderRadius: 0,
   borderColor: '#e8e8e8'} : {borderRadius: 0}}
          alt="img" src="/img/democrat.png" className="imageParty"/>
        <p
          style={(rep.name) === this.state.showInfo.name ? {backgroundColor: '#e8e8e8', borderRadius: 0,
   borderColor: '#e8e8e8'} : {borderRadius: 0}}
          className="stanceFillers" className="democrats"
          onClick={() => this.updateShownInfo(rep)}> {rep.name} </p>
      </div> </div>;
    }
  }

  render() {
    return (
      <div>
        <Grid fluid>
          <Row className="stateRepTable">
            <Col xs={4} smOffset={2} sm={2.33}>
              <h3 className="stanceTitle"> In Favor ✅ </h3>
              {this.props.representatives.map((rep, index) =>
                {if (rep.stance === "in-favor")
                  //return (<p className="stanceFillers" key={"IF" + index} style={rep.party.toLowerCase() == " republican" ? {color: "red"} : {color: "blue"}} onClick={() => this.updateShownInfo(rep)}> {rep.name} </p>);
                  return this.createOutput(rep);
                }
              )}
            </Col>
            <Col xs={4} sm={2.33}>
              <h3 className="stanceTitle"> Opposed 🚫 </h3>
              {this.props.representatives.map((rep, index) =>
                {if (rep.stance === "opposed")
                  //return (<p className="stanceFillers" key={"OP" + index} style={rep.party.toLowerCase() == " republican" ? {color: "red"} : {color: "blue"}} onClick={() => this.updateShownInfo(rep)}> {rep.name} </p>);
                  return this.createOutput(rep);
                }
              )}
            </Col>
            <Col xs={4} sm={2.33}>
              <h3 className="stanceTitle"> No Statement ❓ </h3>
              {this.props.representatives.map((rep, index) =>
                {if (rep.stance === "no-statement")
                  //return (<p className="stanceFillers" key={"NS" + index} style={rep.party.toLowerCase() == " republican" ? {color: "red"} : {color: "blue"}} onClick={() => this.updateShownInfo(rep)}> {rep.name} </p>);
                  return this.createOutput(rep);
                }
              )}
            </Col>
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
