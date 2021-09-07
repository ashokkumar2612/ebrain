import React from 'react'

function List(props){

    const Persons = [
        {
         name:'Ashok',
         age: 25,
         study: 'React'
        },
        {
        name:'Prakash',
        age: 23,
        study: 'Angular'
         },
         {
         name: 'Dane',
         age: 30,
         study: 'Database'
          },
          {
           name: 'Rue',
           age: 28,
           study: 'UX'
          }
    ]
const PersonList = Persons.map(person =>(<tr>
    <td>{person.name}</td>
    <td>{person.age}</td>
    <td>{person.study}</td>
</tr>) )

return (<div>
       <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Study</th>
                </tr>
            </thead>
            <tbody>{PersonList}</tbody>
            </table>
    </div>)

}
export default List
