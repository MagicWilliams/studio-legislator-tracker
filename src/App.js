import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './global-vars.css';
import Banner from './components/Banner/Banner';
import KeyPlayers from './components/KeyPlayers/KeyPlayers';
import SearchByState from './components/SearchByState/SearchByState';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      representatives: [
        {
            name: "Peter Roskam",
            img: "/img/peter.jpg",
            party: " Republican",
            state: " IL",
            district: " 6th District",
            quote: "However well-intentioned, Obamacare failed the American people. Illinois families are paying more money for fewer and fewer benefits. Insurance premiums have increased by an average of over 21%. Last year, the Land of Lincoln co-op became the 16th in the country to collapse, leaving 49,000 Illinoisans without any healthcare coverage at all and taxpayers on for hook for over $160 million. We’re committed to an open and transparent process as we debate this legislation.",
            quoteSource: "Press release, March 7, 2017",
            quoteLink: "https://roskam.house.gov/HealthCare",
            stance: "in-favor"
        },
        {
          name: "Rodney Davis",
          img: "/img/rodney.jpg",
          party: " Republican",
          state: " IL",
          district: " 13th District",
          quote: "Some members, from both parties, may not want to face the mess that Obamacare has created and what is required to clean it up, but we made a promise to the American people to responsibly fix our health care system and that’s what this bill does.",
          quoteSource: "Press release, March 7, 2017",
          quoteLink: "http://rodneydavis.house.gov/news/documentsingle.aspx?DocumentID=399253",
          stance: "in-favor"
        },
        {
          name: "John Shimkus",
          img: "/img/john.jpg",
          party: " Republican",
          state: " IL",
          district: " 15th District",
          quote: "This is the relief my constituents have demanded. The American Health Care Act offers American families more options, lower costs and the flexibility to choose a plan that fits their unique needs, not Washington’s one-size-fits-all mandates",
          quoteSource: "Press release, March 7, 2017",
          quoteLink: "https://shimkus.house.gov/media-center/press-releases/house-unveils-bill-to-repeal-and-replace-obamacare",
          stance: "in-favor"
        },
        {
            name: "Tammy Duckworth",
            img: "/img/tammy.jpg",
            party: " Democrat",
            state: " IL",
            quote: "I'm frustrated that the best plan they came up with would result in working people receiving less coverage and paying more for it.",
            quoteSource: "Email statement, March 10, 2017",
            stance: "opposed"
        },
        {
          name: "Richard Durbin",
          img: "/img/richard.jpg",
          party: " Democrat",
          state: " IL",
          district: " Minority Whip",
          quote: "With this reckless bill, Republicans have shown us that the only thing they are serious about is cutting taxes for the wealthy, increasing out-of-pocket costs for middle-class families and seniors, and throwing people off their health insurance plans.",
          quoteSource: "Email statement, March 7, 2017",
          stance: "opposed"
        },
        {
          name: "Robin Kelly",
          img: "/img/robin.jpg",
          party: " Democrat",
          state: " IL",
          district: " 2nd District",
          quote: "The Affordable Care Act has left behind a legacy of progress. It is working and is more popular than ever. Let's fix any issues instead of passing this bill that will make Americans sick again.",
          quoteSource: "Press release, March 7, 2017",
          quoteLink: "http://robinkelly.house.gov/media-center/press-releases/rep-kelly-releases-a-statement-on-republicans-aca-repeal-bill",
          stance: "opposed"
        },
        {
            name: "Bobby Rush",
            img: "/img/bobby.jpg",
            party: " Democrat",
            state: " IL",
            district: " 1st District",
            quote: "Statement not collected.",
            stance: "no-statement"
        },
        {
          name: "Dan Lipinski",
          img: "/img/dan.jpg",
          party: " Democrat",
          state: " IL",
          district: " 3rd District",
          quote: "Statement not collected.",
          stance: "no-statement"
        },
        {
          name: "Danny K. Davis",
          img: "/img/danny.jpg",
          party: " Democrat",
          state: " IL",
          district: " 7th District",
          quote: "Statement not collected.",
          stance: "no-statement"
        },
      ],
    }
  }

  render() {
    return (
    	<div>
	        <Banner />
	        <KeyPlayers />
          <SearchByState representatives={this.state.representatives} />
	    </div>
    );
  }
}

export default App;
