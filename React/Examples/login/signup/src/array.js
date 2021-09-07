import React, { Component } from 'react';

class Ape extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Ape