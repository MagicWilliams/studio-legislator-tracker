import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './RepCard.css';

class RepCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //keyPlayer: true
    }

  }

    /*createOutput(rep) {
      if (rep.party.toLowerCase() == " republican") {
        //return <p className="stanceFillers" className="republicans"> (R) {rep.name} </p>;
        return <div class="allContent"> <div class="content">
          <img alt="img" src="/img/republican.png" className="imageParty"/>
          <p className="stanceFillers" className="republicans"
            onClick={() => this.updateShownInfo(rep)}
            > {rep.name} </p>
        </div>
      </div>;
      }
      if (rep.party.toLowerCase() == " democrat") {
        return <div class="allContent"> <div class="content">
          <img alt="img" src="/img/democrat.png" className="imageParty"/>
          <p className="stanceFillers" className="democrats"
            onClick={() => this.updateShownInfo(rep)}> {rep.name} </p>
        </div> </div>;
      }
    }*/

    createOutput() {
      if (this.props.party.toLowerCase() == " republican") {
        return <div className="nameParty">
          <div className="content">
            <img alt="img" src="/img/republican.png" className="imageParty"/>
            <h4 className="republicans"
              //onClick={() => this.updateShownInfo(rep)}
              > {this.props.name} </h4>
          </div>
        </div>
      }

      if (this.props.party.toLowerCase() == " democrat") {
        return <div class="allContent">
          <div class="content">
            <img alt="img" src="/img/democrat.png" className="imageParty"/>
            <h4  className="democrats"
              > {this.props.name} </h4>
          </div>
        </div>
      }
    }

  render() {
    if (this.props.keyPlayer==false) {
      var output = <div className="Card">
        <Grid fluid>
            <Row>
              <Col xs={3} smOffset={2} sm={2} mdOffset={2} md={1} lgOffset={2} lg={1}>
                <img alt="img" src={this.props.img} className="image"/>
              </Col>
              <Col xs={8} sm={6} md={6} lg={7} className="bio">
                {/* <h4 className="repHeader"> */}
                <div>
                  {this.createOutput()}
                </div>
                {/* </h4> */}

                <h4 className="repDescription">
                  {this.props.party},
                  {this.props.state},
                  {this.props.district}
                </h4>

                <p className="quoteParagraph">
                  <span className="quoteSymbol">❝</span>
                  {this.props.quote}
                  <span className="quoteSymbol">❞</span>
                </p>
                <p className="source"> {this.props.quoteSource} </p>
                <a className="link" href={this.props.quoteLink}> {this.props.quoteLink} </a>
              </Col>
            </Row>
        </Grid>
      </div>
    }

    if (this.props.keyPlayer==true) {
      var output = <div className="Card">
        <Grid fluid>
            <Row>
              <Col xs={12} smOffset={2} sm={8} mdOffset={2} md={8} lgOffset={2} lg={8}>
                {/* <img alt="img" src={this.props.img} className="image"/> */}
                <p>
                  <span className="quoteSymbol">❝</span>
                  {this.props.quote}
                  <span className="quoteSymbol">❞</span>
                </p>
                <p className="source"> {this.props.quoteSource} </p>
                <a className="link" href={this.props.quoteLink}> {this.props.quoteLink} </a>
              </Col>
              {/* <Col xs={8} sm={6} md={6} lg={7} className="bio"> */}
                {/* <h4 className="repHeader">
                  {this.props.party},
                  {this.props.state},
                  {this.props.district}
                </h4> */}

                {/* <p> {this.props.quote} </p>
                <p className="source"> {this.props.quoteSource} </p>
                <a className="link" href={this.props.quoteLink}> {this.props.quoteLink} </a> */}
              {/* </Col> */}
            </Row>
        </Grid>
      </div>
    }
    return (
      <div>
        {output}
      </div>


    );
  }
}

export default RepCard;
