import React, { Component } from 'react'
import UpdateComponent from './WithCounter' 

class ClickCount extends Component {
     

    render() {
        const {count, increment} = this.props
        return (
            <div>
        <h1 onMouseOver={increment}> Hover {count} times</h1>
            </div>
        )
    }
}

export default UpdateComponent(ClickCount, 5)