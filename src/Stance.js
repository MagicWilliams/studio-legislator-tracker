import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from './Card.js'
import './Stance.css';

class Stance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      st: "IN FAVOR"
    }

  }

  render() {
    return (
      <div>
      <h3 className="stanceHeader"> {this.state.st} </h3>
      <Card />
      </div>
    );
  }
}

export default Stance;
