import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import './global-vars.css';
import Banner from './components/Banner/Banner';
import Stances from './components/Stances/Stances';
import FilterByState from './components/FilterByState/FilterByState';
import HeadlineSummary from './components/HeadlineSummary/HeadlineSummary.js';

class App extends Component {

  render() {
    return (
    	<div>
          <HeadlineSummary />
	        <Banner />
          <FilterByState />
	        <Stances />
	    </div>
    );
  }
}

export default App;
