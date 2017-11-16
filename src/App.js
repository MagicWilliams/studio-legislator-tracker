import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './global-vars.css';
import Banner from './components/Banner/Banner';
import KeyPlayers from './components/KeyPlayers/KeyPlayers';
import SearchByState from './components/SearchByState/SearchByState';
import data from './representatives.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      representatives: [],
    }
  }

  componentWillMount() {
    this.setState({ representatives: data.representatives })
  }

  render() {
    return (
    	<div>
	        <KeyPlayers />
          <SearchByState representatives={this.state.representatives} />
	    </div>
    );
  }
}

export default App;
