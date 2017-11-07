import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Graphs.css';
import { Doughnut } from 'react-chartjs-2';

class Graphs extends Component {
  render() {

    var graphOptions = {
      animatable: true,
      legend: {
        display: false
      }
    };

    var data = {
      datasets: [{
          data: [251, 276],
          backgroundColor: ["#5D82DA", "#E47470"],
          highlight: ["#E47470", "#5D82DA"]
      }],
      // LABELS
      labels: ['Democrat', 'Republican']
    };

    return <Doughnut className="doughnut" data={data} options={graphOptions}/>
  }
}

export default Graphs