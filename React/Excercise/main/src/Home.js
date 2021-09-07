import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
const Home = (props) => {
    return (
        <div>Home</div>
    )
}
const About = (props) => {
    return (
        <div>About</div>
    )
}
const Tutorials = (props) => {
    return (
        <div>Tutorials</div>
    )
}
class Homes extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>Welcome</div>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/tutorials' component={Tutorials} />
            </BrowserRouter>
        )
    }
}

export default Homes
