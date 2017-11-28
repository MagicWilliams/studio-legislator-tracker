import React, { Component } from 'react';
import DoughnutGraph from '../DoughnutGraph/DoughnutGraph';
import './PartyGraphs.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

// import classNames from 'classnames/bind';

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
        <Grid>
          <Row>
            <Col xs={12} md={6} mdOffset={3}>
              <DoughnutGraph className="graph" demCount={this.state.forCount} repCount={this.state.againstCount}/>
              <DoughnutGraph demCount={36} repCount={214}/>
              <DoughnutGraph demCount={206} repCount={299}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default PartyGraphs;