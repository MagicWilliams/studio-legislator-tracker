import React, { Component } from 'react';
import './App.css';
import './global-vars.css';
import Banner from './components/Banner/Banner';
import PartyGraphs from './components/Graphs/PartyGraphs/PartyGraphs';
import Stances from './components/Stances/Stances';
// import SearchBar from './components/partials/SearchBar/SearchBar';

class App extends Component {

  render() {
    return (
    	<div>
	        <Banner />
	        <PartyGraphs />
	        <Stances />
	    </div>
    );
  }
}

export default App;
