import React, { Component } from 'react'

export class LoginControl extends Component {
    constructor(props) {
        super(props);
    this.loginHandleClick = this.loginHandleClick.bind(this);
    this.logoutHandleClick = this.logoutHandleClick.bind(this);
        this.state = {
             isLoggedIn : false
        }
    }
    loginHandleClick() {
        this.setState({
            isLoggedIn:true
        })
    }
    logoutHandleClick(){
        this.setState({
            isLoggedIn:false
        })
    }
    
    render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if(isLoggedIn){
       button = <Login onClick ={this.logoutHandleClick}/>
    }else{
       button = <Logout onClick = {this.loginHandleClick}/>
    }
        return (
            <div>
                <Greetings isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }
}
    
    function UserGreetings(props){
    return <h1>Welcome {props.name}</h1>
    }
    function GuestGreetings(props) {
    return <h1>Welcome {props.name}</h1>
    }
    function Greetings(props){
        const isLoggedIn = props.isLoggedIn
        if(isLoggedIn){
            return <UserGreetings name='Ashok'/>
        }else {
            return <GuestGreetings name='Prakash'/>
        }
    }
    function Login(props){
        return (<button onClick={props.onClick}>Login</button>);
    }
    function Logout(props) {
        return (<button onClick={props.onClick}>Logout</button>);
    }

export default LoginControl
