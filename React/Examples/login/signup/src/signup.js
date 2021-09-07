import React, { Component } from 'react'


const initialState = {
    userdetails: {
        name: '',
        email: '',
        password: ''
    },
    nameError: '',
    emailError: '',
    passwordError: ''
}

class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = initialState;
    }
    validate = () => {
        let nameError = '';
        let emailError = '';
        let passwordError = '';

        if (!this.state.userdetails.name) {
            nameError = 'Name cannot be blank'
        }
        if (this.state.userdetails.password > 6) {
            passwordError = 'Enter minimum 6 charectors or numbers'
        }
        if (!this.state.userdetails.email.includes('@')) {
            emailError = 'Enter valid email'
        } if (emailError || nameError) {
            this.setState({ emailError, nameError, passwordError })
            return false;
        }
        return true;
    }
    changeHandler = (e) => {
        const isCheckbox = e.target.type === 'checkbox';
        const userdetails = { ...this.state.userdetails };
        userdetails[e.target.name] = isCheckbox ?
            e.target.checked : e.target.value
        this.setState({
            userdetails
        })
    }
    submitHandler = e => {
        e.preventDefault()
        const isvalid = this.validate();
        if (isvalid) {
            var arr = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
            console.log(this.state.userdetails)
            arr.forEach((element, idx) => {
                console.log(this.state.userdetails.email, element.email)
            });
            arr.push(this.state.userdetails)
            localStorage.setItem('data', JSON.stringify(arr))
            this.setState(initialState);
        }
    }
    render() {
        const { name, email, password } = this.state.userdetails
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name='name' value={name} onChange={this.changeHandler} placeholder='name'/>
                        {this.state.nameError ? (<div style={{ color: 'red', fontSize: 12 }}>
                            {this.state.nameError}</div>) : null}
                    </div>
                    <div>
                        <input type="text" name='email' value={email} onChange={this.changeHandler} placeholder='email' />
                        {this.state.emailError ? (<div style={{ color: 'red', fontSize: 12 }}>
                            {this.state.emailError}</div>) : null}
                    </div>
                    <div>
                        <input type="text" name='password' value={password} onChange={this.changeHandler} placeholder='password' />
                        {this.state.passwordError ? (<div style={{ color: 'red', fontSize: 12 }}>
                            {this.state.passwordError}</div>) : null}
                    </div><br></br>
                    <button type='submit'>Submit</button>
                </form>
                <a href="/">Login</a>
            </div>
        )
    }
}

export default Signup
