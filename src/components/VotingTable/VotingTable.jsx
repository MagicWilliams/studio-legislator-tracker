import React, { Component } from 'react';
import './VotingTable.css';

class VotingTable extends Component {
  render() {
    return (
      <div className="tableContainer">
        <table>
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

      </div>
    );
  }
}

export default VotingTable;




