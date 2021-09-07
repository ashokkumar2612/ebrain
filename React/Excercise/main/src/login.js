import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
        this.Handler = this.Handler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
        this.state = {
             name:'',
             password:'',
             isLoggedin: false
        }
    }
    Handler = (e) => {
        this.setState({
        [e.target.name] : e.target.value
    });
    }
    submitHandler(){
        console.log(this.state.name)
        if(content.name === this.state.name && content.password === this.state.password){
            alert('Sucessfully Registered')
        }else{
            this.setState({isLoggedin:false})
            alert('Please Enter valid')
        }
}
componentDidMount(){
    this.setState({isLoggedin:false})
}
    render() {
       const isLoggedin = this.state.isLoggedin
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                    <input type='text' name='name'  onChange={this.Handler}/>
                    </div>
                    <div>
                    <input type='text' name='password' onChange={this.Handler}/>
                    </div>
                    <button type='submit'>{isLoggedin ? 'login':'signup'}</button>  
                </form>
            </div>
        )
    }
}
const content = {
    name: 'Ashok',
    password: 'nature'
}

export default Login
