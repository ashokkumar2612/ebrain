import React from 'react'

function Messages(props) {
    const Unreadmessages = props.Unreadmessages
    return (
        <div>
            <h1>Hello,{props.name}!</h1>
            {Unreadmessages.length> 0 &&
            <h3>You have {Unreadmessages.length} unread messages</h3>}
        </div>
    )
}

export default Messages
