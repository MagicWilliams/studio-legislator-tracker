import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <Grid className="Banner">
          <Row>
            <Col xs={8} className="nameSearch">
              <input className="nameSearchBar" type="text" />
            </Col>
            <Col xs={4} className="stateSearch">
              <select>
                <option value="Alabama"> Alabama </option>
                <option value="California"> California </option>
                <option value="Texas"> Texas </option>
                <option value="Illinois"> Illinois </option>
                <option value="Pennsylvania"> Pennsylvania </option>
              </select>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default SearchBar;
