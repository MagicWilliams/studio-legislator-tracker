import React, { Component } from 'react';

class Stance extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  render() {
    return (
      <div>
        <div className="header">
          <h3 className="stanceHeader"> {this.props.st} </h3>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Stance;