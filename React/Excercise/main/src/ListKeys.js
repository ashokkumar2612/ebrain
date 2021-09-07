import React from 'react'

function ListKeys(props) {
const seperate = <ol>{props.content.map((sep =>
<li key={sep.id}>{sep.name}</li>))}</ol>

const groups = props.content.map((group=>
<div key={group.id}>
<h2>{group.name} is a {group.details}</h2>
</div>))

return (
        <div>
            {seperate}
            <hr/>
            {groups}
        </div>
    )
}

export default ListKeys
