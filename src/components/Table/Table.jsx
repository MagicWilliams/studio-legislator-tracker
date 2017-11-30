import React, { Component } from 'react';
import VotingTable from '../VotingTable/VotingTable';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Graphs from '../Graphs/Graphs';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {PieChart, Pie, Cell} from 'recharts';
import './Table.css';
import '../VotingTable/VotingTable.css';

class Table extends Component {
  render() {

    let barGraphData = [
      {name: 'House', for: 41, against: 233, amt: 1},
      {name: 'Senate', for: 221, against: 35, amt: 1},
    ];

    let pieChartData1 = [{name: 'For', value: 240}, {name: 'Against', value: 277}];
    let pieChartData2 = [{name: 'For', value: 211}, {name: 'Against', value: 301}];


    let demColors = ["#285AFF", "#152F85"];
    let repColors = ["#FF2021", "#850000"];



    return (
      <div>
        <Grid className="DataSection" fluid>
            <Row>
              <Col xs={12}>
                <div className="header">
                  <h3 className="stanceHeader"> National Overview </h3>
                </div>
              </Col>
            </Row>
           <Row>


            <Col xs={12} md={6} className="tableData">
              <h3> 464 of 535 voting Congress members on the record as of March 24, 2017 </h3>
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>In Favor</th>
                  <th>Opposed</th>
                  <th>Unequivocal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td aria-label="Senate">
                    <h3>Senate</h3>
                  </td>
                  <td aria-label="In Favor"> <span className="demVotes"> 10 </span><span className="republicanVotes"> 0 </span></td>
                  <td aria-label="Opposed"> <span className="demVotes"> 7 </span><span className="republicanVotes"> 43 </span> </td>
                  <td aria-label="Unequivocal"> <span className="demVotes"> 28 </span><span className="republicanVotes"> 1 </span> </td>
                </tr>
                <tr>
                  <td aria-label="House">
                    <h3>House</h3>
                  </td>
                  <td aria-label="In Favor"><span className="demVotes"> 113 </span><span className="republicanVotes"> 0 </span> </td>
                  <td aria-label="Opposed"><span className="demVotes"> 35 </span><span className="republicanVotes"> 175 </span> </td>
                  <td aria-label="Unequivocal"><span className="demVotes"> 44 </span><span className="republicanVotes"> 2 </span> </td>
                </tr>
              </tbody>
            </table>


            <div className="legend">
              <div className = "legendContainer">
                <div className = "legendBlockDemocrat">
                  <div className="blueSq"></div> 
                  <p> Dem </p>
                </div>

                <div className = "legendBlockRepub">
                  <div className="redSq"></div> 
                  <p> Rep </p>
                </div>
              </div>
            </div>


            </Col>



            <Col xs={12} className="Charts" md={6}>
              <BarChart className = "barChart" layout="vertical" width={400} height={150} data={barGraphData}
                    margin={{top: 20, right: 30, left: 50, bottom: 5}}>
                 <XAxis type="number"/>
                 <YAxis type="category" dataKey="name"/>
                 <CartesianGrid strokeDasharray="3 3"/>
                 <Tooltip/>
                 <Bar dataKey="for" stackId="a" fill="#850000" />
                 <Bar dataKey="against" stackId="a" fill="#152F85" />
              </BarChart>
              <PieChart className="pieCharts" width={600} height={200} fill="000">
                <Pie className="graph" data={pieChartData1} cx={200} cy={100} innerRadius={40} outerRadius={80} fill="#152F85" > 
                  {
                    pieChartData1.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={demColors[index]}/>
                    ))
                  }
                </Pie>

                <Pie className="graph" data={pieChartData2} cx={400} cy={100} innerRadius={40} outerRadius={80} fill="#850000" >
                 {
                  pieChartData2.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={repColors[index]}/>
                  ))
                 }
                </Pie>

                <Tooltip/>
             </PieChart>
            </Col>
          </Row>


          


        </Grid>
      </div>
    );
  }
}

export default Table;



         