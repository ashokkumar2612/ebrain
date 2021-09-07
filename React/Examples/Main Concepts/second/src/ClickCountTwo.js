import React, { Component } from 'react'

export class ClickCountTwo extends Component {

    render() {
        const {count, incrementHandler} = this.props
        return (
            <button onClick={incrementHandler} >Clicked {count} times</button>
        )
    }
}

export default ClickCountTwo
