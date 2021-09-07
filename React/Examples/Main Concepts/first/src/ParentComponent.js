import React, {Component} from 'react'
import Child from './ChildComponent'

class Parent extends Component {

    constructor(){
        super()
        this.state ={
            parentName1: 'mom',
            parentName2: 'dad'
        }
        this.greetParent = this.greetParent.bind(this)
    }
greetParent(childName){
    alert(`Hello ${this.state.parentName1} & ${this.state.parentName2} from ${childName}`)
}

    render(){
        return(
        <div><Child greetHandler={this.greetParent}/></div>
        )
    }
}
export default Parent