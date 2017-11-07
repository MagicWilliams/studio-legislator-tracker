import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Graphs.css';

class Graphs extends Component {
  render() {
    return (
      <div>
        <Grid className="Banner">
          <Row>
            <Col xs={12} className="titleBar">
              
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Graphs;
