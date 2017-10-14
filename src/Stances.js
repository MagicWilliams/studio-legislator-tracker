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
      <Card name="Peter" 

      />
      <Stance st="OPPOSED" />
      <Stance st="NO STATEMENT" />
      </div>

    );
  }
}

export default Stances;
