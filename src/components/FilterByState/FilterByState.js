import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './FilterByState.css';

class FilterByState extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  render() {
    return (
      <div>
      <h4 className="filterByState"> Filter by State </h4>
        <Grid fluid>
            <Row>
              <Col xs={3} smOffset={1} sm={2} mdOffset={2} md={1} lgOffset={3} lg={1}>
                <h4> Dropdown here </h4>
              </Col>
              <Col xs={8} sm={8} md={6} lg={5}>
                <thead>
                  <tr>
                    <th className="stancesList"> In Favor </th>
                    <th className="stancesList"> Opposed </th>
                    <th className="stancesList"> Equivocal </th>
                    <th className="stancesList"> No Statement </th>
                  </tr>
                </thead>
              </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default FilterByState;
