import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from './Card.js'
import Stance from './Stance.js'
import './Stance.css';

class Stances extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  render() {
    return (
      <div>
      <Stance st="IN FAVOR"/>
      <Stance st="OPPOSED" />
      </div>

    );
  }
}

export default Stances;
