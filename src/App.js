import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import './global-vars.css';
import Banner from './components/Banner/Banner';
import Stances from './components/Stances/Stances';
import FilterByState from './FilterByState';

class App extends Component {

  render() {
    return (
    	<div>
	        <Banner />
          <FilterByState />
	        <Stances />
	    </div>
    );
  }
}

export default App;
