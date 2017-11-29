import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Banner.css';

class Banner extends Component {
  render() {
    return (
      <div>
        <Grid className="Banner">
          <Row>
            <Col xs={12} className="titleBar">
              <h1 className="title"> See Where Members of Congress Stand on New Health Care Bill </h1>
              <h5 className="subtitle"> Jeffrey Birori, Sameena Khan, David Latimore, Hangda Zhang </h5>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Banner;
