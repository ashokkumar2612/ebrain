import React, { Component } from 'react'
import InputRef from './InputRef'

class FRinput extends Component {
constructor(props) {
    super(props)
this.inputRef = React.createRef()

}
changeHandler = ()=>{
    this.inputRef.current.focus()
}


    render() {
        return (
            <div>
                <InputRef ref={this.inputRef}/>
                <button onClick={this.changeHandler}>Forward Ref</button>
            </div>
        )
    }
}

export default FRinput
