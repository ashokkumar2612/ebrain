import React from 'react'

function Person({person}){
return(
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Study</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                    <td>{person.study}</td>
                </tr>
            </tbody>
        </table>
        <h1>I am {person.name} and I am {person.age} years old.And i know {person.study}</h1>
    </div>
)

}
export default Person