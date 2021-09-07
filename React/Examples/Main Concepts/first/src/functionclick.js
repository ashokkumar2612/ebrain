import React from 'react'

function FunctionClick() {

function Click(){
       console.log('you are clicked the button')
}


    return (
        <div>
            <button onClick={Click}>Click</button>
        </div>
    )
}

export default FunctionClick
