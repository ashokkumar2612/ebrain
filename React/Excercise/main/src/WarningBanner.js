import React, { Component } from 'react'


function Warning(props){
    if(!props.warn){
        return null
    }
    return <h1>Warning!</h1>
}
export class WarningBanner extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
             showWarning: true
        }
    }
    handleClick() {
        this.setState(prevState =>({
            showWarning: !prevState.showWarning
        }))
    }
    render() {
        return (
            <div>
                <Warning warn = {this.state.showWarning}/>
                <button onClick={this.handleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}</button>
            </div> 
        )
    }
}

export default WarningBanner
