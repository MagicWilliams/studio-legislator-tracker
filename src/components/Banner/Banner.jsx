import React, { Component } from 'react';
import VotingTable from '../VotingTable/VotingTable';
import classNames from 'classnames/bind';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Banner.css';

class Banner extends Component {
  render() {
    return (
      <div>
        <Grid className="Banner">
          <Row>
            <Col xs={12} className="titleBar">
              <h1 className="title"> See Where Members Of Congress Stand On New Health Care Bill </h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="bannerBody">
              <h3> 464 of 535 voting Congress members on the record as of March 24, 2017 </h3>
            </Col>
            <VotingTable />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Banner;
