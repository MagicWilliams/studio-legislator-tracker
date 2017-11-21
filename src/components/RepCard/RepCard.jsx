import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './RepCard.css';

class RepCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  render() {
    return (
      <div className="Card">
        <Grid fluid>
            <Row>
              <Col xs={3} smOffset={2} sm={2} mdOffset={2} md={1} lgOffset={2} lg={1}>
                <img alt="img" src={this.props.img} className="image"/>
              </Col>
              <Col xs={8} sm={6} md={6} lg={7} className="bio">
                <h4 className="repHeader">
                  {this.props.name},
                  {this.props.party},
                  {this.props.state},
                  {this.props.district}
                </h4>

                <p> {this.props.quote} </p>
                <p className="source"> {this.props.quoteSource} </p>
                <a className="link" href={this.props.quoteLink}> {this.props.quoteLink} </a>
              </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default RepCard;
