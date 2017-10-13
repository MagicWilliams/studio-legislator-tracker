import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';
import Card from './Card.js';
import Stance from './Stance.js';

class App extends Component {

  render() {
    return (
      <Stance />
    );
  }
}

export default App;
