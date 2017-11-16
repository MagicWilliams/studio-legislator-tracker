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
    }
    this.updateShownInfo = this.updateShownInfo.bind(this);
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

  render() {

    return (
      <div>
        <Grid fluid>
          <Row>
            <Col xs={4} smOffset={2} sm={2.33}>
              <h3 className="stanceTitle"> In Favor </h3>
              {this.props.representatives.map((rep, index) =>
                {if (rep.stance === "in-favor")
                  return (<p className="stanceFillers" key={"IF" + index} onClick={() => this.updateShownInfo(rep)}> {rep.name} </p>);}
              )}
            </Col>
            <Col xs={4} sm={2.33}>
              <h3 className="stanceTitle"> Opposed </h3>
              {this.props.representatives.map((rep, index) =>
                {if (rep.stance === "opposed")
                  return (<p className="stanceFillers" key={"OP" + index} onClick={() => this.updateShownInfo(rep)}> {rep.name} </p>);}
              )}
            </Col>
            <Col xs={4} sm={2.33}>
              <h3 className="stanceTitle"> No Statement </h3>
              {this.props.representatives.map((rep, index) =>
                {if (rep.stance === "no-statement")
                  return (<p className="stanceFillers" key={"NS" + index} onClick={() => this.updateShownInfo(rep)}> {rep.name} </p>);}
              )}
            </Col>
            <Col smOffset={2}></Col>
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

export default StateReps;
