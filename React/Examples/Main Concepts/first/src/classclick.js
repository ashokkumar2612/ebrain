import React, { Component } from 'react';

 class Classclick extends Component {

clickMe(){
    console.log('clicked')
}

    render() {
        return <button onClick={this.clickMe}>Clickme</button>
    }
}

export default Classclick;
