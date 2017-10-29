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
      <h4 className="filterbystate"> Filter by State </h4>
        <Grid fluid>
            <Row>
              <Col xs={3} smOffset={1} sm={2} mdOffset={2} md={1} lgOffset={3} lg={1}>
                <h4> Dropdown here </h4>
              </Col>
              <Col xs={8} sm={8} md={6} lg={5}>
              <thead className="head">
                <tr>
                <th className="sta"> In Favor </th>
                <th className="sta"> Opposed </th>
                <th className="sta"> Equivocal </th>
                <th className="sta"> No Statement </th>
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
