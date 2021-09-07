import React,{useContext} from 'react'
// import ComponentC from './ComponentC'

import { userContext,channelContext } from '../App'

function ComponentB() {

    const user = useContext(userContext)
    const channel = useContext(channelContext)

    return (
        <div>
            {user} - {channel}
            {/* <ComponentC/> */}
        </div>
    )
}

export default ComponentB
