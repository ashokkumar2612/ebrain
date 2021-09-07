import React, { Component } from 'react'
import ButtonGroup from './Button'
// import TableTwo from './TableTwo'

class TableOne extends Component {
  
    render() {
        return (
            <div>
                <h2>Previous Requests</h2>
  <p>The .table-bordered class adds borders to a table:</p>
  <ButtonGroup/>            
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>S.no</th>
        <th>Mobile no.</th>
        <th>Address</th>
        <th>no. of bottles</th>
      </tr>
    </thead>
    <tbody>

    </tbody>
      </table>
            </div>
        )
    }
}

export default TableOne
