import React from 'react'

function Child(props){
    return (
    <div>
    <button onClick={()=>props.greetHandler('Son')}>GreetParent</button>
    </div>
    )
}
export default Child