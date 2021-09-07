import React, { Component } from 'react';


class Count extends Component {

    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    // Increament() {
    //     this.setState({
    //         count: this.state.count + 1
    //     },
    //     console.log('count',this.state.count)
    //     )
    // }

    Increment() {
        this.setState((prevState) => ({
            count: prevState.count + 5
        }))
    }
    IncrementFive(){
        this.Increment()
        this.Increment() 
        this.Increment()
        this.Increment()
        this.Increment()
    }
    
render(){
    return (
        <div>
            <div>count - {this.state.count}</div>
            <button onClick={()=> this.IncrementFive()}>Increament</button>
        </div>
    )
}

}
export default Count;