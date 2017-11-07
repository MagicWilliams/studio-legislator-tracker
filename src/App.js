import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './global-vars.css';
import Banner from './components/Banner/Banner';
import Graphs from './components/Graphs/Graphs';
import Stances from './components/Stances/Stances';
import SearchBar from './components/partials/SearchBar/SearchBar';


class App extends Component {

  render() {
    return (
    	<div>
	        <Banner />
	        <div className="graphContainer">
	        	<Graphs />
	        </div>
	        <Stances />
	    </div>
    );
  }
}

export default App;
