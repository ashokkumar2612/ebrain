import React from 'react';
class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Ashok',
      age: 25
    };
  }
  changeFormat =() => {
    this.setState({ name: 'prakash' });
    this.setState({ age: 23 });
  }

  render() {
    return (
      <div>
        <p>This is {this.state.name} and i am {this.state.age}</p>
        <button onClick={this.changeFormat}>Format</button>
      </div>
    );
  }
}
export default All;