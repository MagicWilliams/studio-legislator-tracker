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
      representatives: [{
          "name": "Peter Roskam",
          "img": "/img/peter.jpg",
          "party": " Republican",
          "state": " IL",
          "district": " 6th District",
          "quote": "However well-intentioned, Obamacare failed the American people. Illinois families are paying more money for fewer and fewer benefits. Insurance premiums have increased by an average of over 21%. Last year, the Land of Lincoln co-op became the 16th in the country to collapse, leaving 49,000 Illinoisans without any healthcare coverage at all and taxpayers on for hook for over $160 million. We’re committed to an open and transparent process as we debate this legislation.",
          "quoteSource": "Press release, March 7, 2017",
          "quoteLink": "https://roskam.house.gov/HealthCare",
          "stance": "in-favor"
      }],
    }
  }

  componentWillMount() {
    let url = 'https://spreadsheets.google.com/feeds/list/1GTQMQzn24D2XgDD9LNf_Zn-p991QJs7KSanB17zDbos/od6/public/values?alt=json';
    var representatives = [];
    fetch(url)
    .then(res => res.json())
    .then((out) => {
      for (var i = 0; i < out.feed.entry.length; i++) {
        representatives[i] = {
          name: out.feed.entry[i].gsx$name.$t,
          img: out.feed.entry[i].gsx$image.$t,
          party: out.feed.entry[i].gsx$party.$t,
          state: out.feed.entry[i].gsx$state.$t,
          district: out.feed.entry[i].gsx$district.$t,
          quote: out.feed.entry[i].gsx$quote.$t,
          quoteSource: out.feed.entry[i].gsx$source.$t,
          quoteLink: out.feed.entry[i].gsx$link.$t,
          stance: out.feed.entry[i].gsx$stance.$t
        }
      };
    //  console.log('Checkout this JSON! ', out.feed.entry.length); // out.feed.entry[2].gsx$name.$t
      console.log(representatives);
      this.setState({ representatives: representatives });
    })
    .catch(err => { throw err });

  }

  render() {
    return (
    	<div>
          <Banner />
          <Table />
          <KeyPlayers />
          <SearchByState representatives={this.state.representatives} />
	    </div>
    );
  }
}

export default App;
