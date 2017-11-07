import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './DoughnutGraph.css';
import { Doughnut } from 'react-chartjs-2';

class DoughnutGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    var graphOptions = {
      animatable: true,
      legend: {
        display: false
      }
    };

    var data = {
      datasets: [{
          data: [this.props.demCount, this.props.repCount],
          backgroundColor: ["#5D82DA", "#E47470"],
          highlight: ["#E47470", "#5D82DA"]
      }],
      // LABELS
      labels: ['Democrat', 'Republican']
    };

    return <Doughnut className="doughnut" data={data} options={graphOptions}/>
  }
}

export default DoughnutGraph