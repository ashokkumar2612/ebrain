import React, { Component } from 'react'
import ButtonGroup from './Button'
import './App.css'

const object = [
  {
  name: '',
  mobile: 8987,
  address: 'hwljksd',
  quantity: 89},
  {
    name: '',
    mobile: 8987,
    address: 'hwljksd',
    quantity: 89},
    {
      name: '',
      mobile: 8987,
      address: 'hwljksd',
      quantity: 89},

]

class TableTwo extends Component {
    render() {
   const button = <button type='button' onClick={this.Handler}>Paid</button>
   const result = object.map((data,idx) => (<tr>
     <td>{data.name.toString()}</td>
   <td>{data.mobile.toString()}</td>
   <td>{data.address.toString()}</td>
   <td>{data.quantity.toString()}</td>
   <td>{button}</td></tr>)
  )
        return (
            <div>
                <h2>Pending Requests</h2>
  <p>The .table-bordered class adds borders to a table:</p>
  <ButtonGroup/>            
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>S.no</th>
        <th>Mobile no.</th>
        <th>Address</th>
        <th>no. of bottles</th>
        <th>Paid</th>
      </tr>
    </thead>
    <tbody>
      {result}
    </tbody>
      </table>
            </div>
        )
        }
    }
    
export default TableTwo