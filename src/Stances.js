import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from './Card.js'
import Stance from './Stance.js'
import './Stance.css';

class Stances extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data1: [],
      data2: [],
      data3: []
    }
    console.log("constructor");

    this.getData = this.getData.bind(this);

  }

  componentWillMount(){
    this.getData();
    //console.log(this.state.data);
    //console.log(this.state.data[0].email);

  }

  getData(){
    console.log("getData");
    this.state.data1 =
        [
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
    ];
  }

  render() {
    //const
    console.log(this.state.data1);

    return (
      <div>

      <Stance st="IN FAVOR"/>

      {this.state.data1.map(val =>
      <Card
      img={val.img}
      name={val.name}
      party={val.party}
      state={val.state}
      district={val.district}
      quote={val.quote}
      quoteSource={val.quoteSource}
      quoteLink={val.quoteLink}
      stance={val.stance}
       />
      )}


      <Stance st="OPPOSED" />
      <Stance st="NO STATEMENT" />
      </div>

    );
  }
}

export default Stances;
