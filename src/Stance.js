import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from './Card.js'
import './Stance.css';

class Stance extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  render() {
    return (
      <div>
      <div className="header">
      <h3 className="stanceHeader"> {this.props.st} </h3>
      </div>
      </div>
    );
  }
}

export default Stance;
