import React, { Component } from 'react';
import './App.css';
import './global-vars.css';
import Banner from './components/Banner/Banner';
import Graphs from './components/Graphs/Graphs';
import KeyPlayers from './components/KeyPlayers/KeyPlayers';
import SearchByState from './components/SearchByState/SearchByState';
import data from './representatives.json';
import Stances from './components/Stances/Stances';
import Table from './components/Table/Table';

// import SearchBar from './components/partials/SearchBar/SearchBar';

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
          <Banner />
          <Table />
          <KeyPlayers />
          <SearchByState representatives={this.state.representatives} />
	        <Stances />
	    </div>
    );
  }
}

export default App;
