import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './RepCard.css';

class Card extends Component {
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
              <Col xs={3} smOffset={1} sm={2} mdOffset={2} md={1} lgOffset={3} lg={1}>
                <img alt="img" src={this.props.img} className="image"/>
              </Col>
              <Col xs={8} sm={8} md={6} lg={5} className="bio">
                <h4 className="repHeader">
                  {this.props.name},
                  {this.props.party},
                  {this.props.state},
                  {this.props.district}
                </h4>

                <h4 className="stance">
                {this.props.stance}
                </h4>

                <p> {this.props.quote} </p>
                <p className="source"> {this.props.quoteSource} </p>
                <p className="link"> {this.props.quoteLink} </p>
              </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}

export default Card;
