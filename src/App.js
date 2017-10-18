import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './global-vars.css';
import Banner from './components/Banner/Banner';
import Stances from './Stances.js';

class App extends Component {

  render() {
    return (
    	<div>
	        <Banner />
	        <Stances />
	    </div>
    );
  }
}

export default App;
