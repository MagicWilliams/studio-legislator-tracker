import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './HeadlineSummary.css';

class HeadlineSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  render() {
    return (
      <div className="HeadlineSummary">
        <Grid fluid>
            <Row>
              <Col xs={12}>
                <h1> Find Out Where Members of Congress Stood On the Health Care Bill </h1>

                <p>
                Republican leaders in the U.S. House have pulled the American Health Care Act from the floor after failing to round up enough votes within their own caucus.
                </p>

                <p>
                Had the bill passed, Americans would have no longer been required to buy health insurance, and it would have eliminated the current subsidies that are used to bring down the cost of premiums.
                </p>

                <p>
                NPR and dozens of member stations collected public statements from members of Congress to help the public understand where lawmakers stood on this issue.
                </p>

                <p>
                Our reporting showed that Republicans lacked the votes needed pass the health care bill in the House. No Democrats support the bill, and Republicans can only lose 22 of their members before the bill fails. According to the reporting of NPR and its member stations, more than 30 House Republicans opposed the bill.
                </p>

                <p>
                Republicans faced an even greater challenge in the Senate, where they hold 52 of 100 seats. At least seven Republican senators opposed the House bill.
                </p>
              </Col>

            </Row>
        </Grid>
      </div>
    );
  }
}

export default HeadlineSummary;
