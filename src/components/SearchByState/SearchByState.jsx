import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RepCard from '../RepCard/RepCard';
import StateReps from '../StateReps/StateReps';
import './SearchByState.css';

function isIllinois(senator) {
  return senator.state === ' IL';
}

class SearchByState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      representatives: props.representatives,
      currState: " IL",
    }
    this.isState = this.isState.bind(this);
  }

  isState(senator) {
    return senator.state === this.state.currState;
  }

  // updateStateSelection(state) {
  //   this.setState({ currState: state });
    // onClick={this.update};
    // update() {
    //    this.props.updateStateSelection(document.getElementyById('state_Selection')); All you are putting as the argument is a string
    // }
  // }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className="header">
                <h4 className="stanceHeader"> Search By State </h4>
              </div>
            </Col>
          </Row>

        </Grid>

        {/* <SelectState updateStateSelection={this.updateStateSelection} /> */}

        <StateReps representatives={this.state.representatives.filter(this.isState)}/>

      </div>
    );
  }
}

export default SearchByState;
