import React,{useState} from 'react'
import {connect} from 'react-redux'
import {buyCake, buyIceCream} from '../redux'

function InputContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>number of {props.name} - {props.items}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)}/> 
           <button onClick={()=>props.buyItems(number)}>buy {number} {props.name}</button>
        </div>
    )
}

const mapStateToProps = (state, ownprops) => {
    const items = ownprops.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams
    return {
        items
    }
}
const mapDispatchToProps = (dispatch,ownprops) => {
    const buyItems = ownprops.cake ? number => dispatch(buyCake(number)) : 
    number => dispatch(buyIceCream(number))
    return {
        buyItems
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputContainer)