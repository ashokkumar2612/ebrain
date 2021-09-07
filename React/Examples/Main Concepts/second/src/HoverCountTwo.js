import React, { Component } from 'react'

export class HoverCountTwo extends Component {
   
    render() {
        const {count, incrementHandler} = this.props
        return (
            <h1 onMouseOver={incrementHandler}>Hover {count} times</h1>
                
        )
    }
}

export default HoverCountTwo
