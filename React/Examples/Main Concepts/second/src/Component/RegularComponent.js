import React, {Component} from 'react'

class RegularComp extends Component {

    render() {
console.log('Regular comp rendering')
        return (
        <h1>Regular Component {this.props.name}</h1>
        )
    }

}
export default RegularComp