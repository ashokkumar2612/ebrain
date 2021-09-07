import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementHandler = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1}
        })
    }

    render() {
        return (
            <div>
                {this.props.children(this.state.count, this.incrementHandler)}
            </div>
        )
    }
}

export default Counter
