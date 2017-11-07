import React, { Component } from 'react';
import DoughnutGraph from '../DoughnutGraph/DoughnutGraph';
import classNames from 'classnames/bind';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './PartyGraphs.css';

class PartyGraphs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forCount: 244,
      againstCount: 19 
    }
  }
  render() {
    return (
      <div className="graphContainer">
        <DoughnutGraph className="graph" demCount={this.state.forCount} repCount={this.state.againstCount}/>
        <DoughnutGraph demCount={36} repCount={214}/>
        <DoughnutGraph demCount={206} repCount={299}/>
      </div>
    );
  }
}

export default PartyGraphs;