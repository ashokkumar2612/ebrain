import React, { Component } from 'react'
import UpdateComponent from './WithCounter'


class ClickCount extends Component {
     

    render() {
        const {count, increment} = this.props
        return (
            <div>
                <button onClick={increment}>{this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}
export default UpdateComponent(ClickCount, 10)
