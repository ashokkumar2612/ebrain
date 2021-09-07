import React, { Component } from 'react'

export class TestLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            login: {
                user: '',
                password: ''
            }
        }
    }
    changeHandler = (e) => {
        const login = { ...this.state.login }
        login[e.target.name] = e.target.value
        this.setState({
            login
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        const { user, password } = this.state.login
        const logins = {
            users: 'ashok',
            passwords: '123456'
        }
        if (user === logins.users && password === logins.passwords) {
            alert(`welcome ${user}`)
        } else {
            alert(`please enter valid`)
        }
    }
    render() {
        const { user, password } = this.state.login
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type='text' name='user' value={user} onChange={this.changeHandler} />
                    <input type='password' name='password' value={password} onChange={this.changeHandler} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default TestLogin
