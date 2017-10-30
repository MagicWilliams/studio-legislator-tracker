import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './global-vars.css';
import Banner from './components/Banner/Banner';
import Stances from './components/Stances/Stances';
import SearchBar from './components/partials/SearchBar/SearchBar';


class App extends Component {

  render() {
    return (
    	<div>
	        <Banner />
	        <SearchBar />
	        <Stances />
	    </div>
    );
  }
}

export default App;
