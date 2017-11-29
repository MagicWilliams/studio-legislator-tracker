import React, { Component } from 'react';
import VotingTable from '../VotingTable/VotingTable';
import classNames from 'classnames/bind';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {PieChart, Pie, Cell} from 'recharts';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Graphs.css';

class Graphs extends Component {

    render() {

    let barGraphData = [
      {name: 'House', for: 41, against: 233, amt: 1},
      {name: 'Senate', for: 221, against: 35, amt: 1},
    ];

    let pieChartData1 = [{name: 'For', value: 240}, {name: 'Against', value: 277}];
    let pieChartData2 = [{name: 'For', value: 211}, {name: 'Against', value: 301}];


    let demColors = ["#152F85", "#850000"];
    let repColors = ["#850000", "#152F85"];

    return (
      <div className="GraphsContainer">
        
              <BarChart className = "barChart" layout="vertical" width={400} height={150} data={barGraphData}
                    margin={{top: 20, right: 30, left: 50, bottom: 5}}>
               <XAxis type="number"/>
               <YAxis type="category" dataKey="name"/>
               <CartesianGrid strokeDasharray="3 3"/>
               <Tooltip/>
               <Bar dataKey="for" stackId="a" fill="#850000" />
               <Bar dataKey="against" stackId="a" fill="#152F85" />
              </BarChart>

      
              <PieChart width={800} height={200} fill="000">
                <Pie className="graph" data={pieChartData1} cx={100} cy={100} innerRadius={40} outerRadius={80} fill="#152F85" > 
                  {
                    pieChartData1.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={demColors[index]}/>
                    ))
                  }
                </Pie>

                <Pie className="graph" data={pieChartData2} cx={300} cy={100} innerRadius={40} outerRadius={80} fill="#850000" >
                 {
                  pieChartData2.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={repColors[index]}/>
                  ))
                 }
                </Pie>

                <Tooltip/>
             </PieChart>

              <h5> Democratic Party </h5>
              <h5 className="repLabel"> Republican Party </h5>
      </div>
    );
  }}

export default Graphs;
