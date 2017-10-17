import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './App.css';
import Card from './Card.js';
import Stances from './Stances.js';

class App extends Component {

  render() {
    return (
      <Stances />
    );
  }
}

export default App;
