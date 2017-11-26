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
    this.changeState = this.changeState.bind(this);
  }

  isState(senator) {
    console.log(this.state.currState);
    return senator.state === this.state.currState;
  }

  changeState(e) {
    //console.log(e.target.value);
    this.setState({ currState: e.target.value });
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
                <h3 className="stanceHeader"> Search By State </h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <select id="id" className="dropDown" onChange={this.changeState}>
                  <option value=" IL">Illinois</option>
                  <option value=" OH">Ohio</option>
                  <option value=" CA">California</option>
                </select>
            </Col>
          </Row>

        </Grid>

        {/* <SelectState updateStateSelection={this.updateStateSelection} /> */}

        <StateReps currState={this.state.currState} representatives={this.state.representatives.filter(this.isState)}/>

      </div>
    );
  }
}

export default SearchByState;
