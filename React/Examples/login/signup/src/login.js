import React, { Component } from 'react'



class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            login:{
             name: '',
             password: ''
        }
    }
}
    changeHandler = (e) => {
        const login = {...this.state.login}
        login[e.target.name] = e.target.value
        this.setState({
            login
        })
    }
    submitHandler = e => {
        const {name, password} = this.state.login
        e.preventDefault()
        var datum = JSON.parse(localStorage.getItem('data'))
        // console.log(name, password, datum)
        let tempFlag = false;
        datum.forEach((element, id) => {
            console.log(element.name)
            if(name === element.name && password === element.password){
                alert('Welcome')
                tempFlag = true;
            }
        });
        if(tempFlag) {
            alert('You are successfully logged in')

        } else {
            alert('please login your Id')
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                <div>
                <input type='text' name='name'onChange={this.changeHandler}/>
                </div>
                <div>
                <input type='text' name='password' onChange={this.changeHandler}/>
                </div><br></br>
                <button type='submit'>submit</button>
                </form>
            <a href="/signup">Signup</a>
            </div>
        )
    }
}

export default Login