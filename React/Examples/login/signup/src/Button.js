import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class ButtonGroup extends Component {
    render() {
        return (
            <div className='row'>
                <p className='col-3'></p>
                <Button className='col-2.5 ml-5' href='/current' variant="contained" color="primary">Old Requests</Button>
                <Button className='col-2.5 ml-5' href='/old' variant="contained" color="secondary">Current Requests</Button>
                <p className='col-4'></p>
                <h3><a href='/login'>Logout</a></h3>
            </div>
        )
    }
}
export default ButtonGroup