import React,{Component} from 'react'

class App extends Component {

constructor(props){
  super(props);

  this.state ={
    isLoggedIn : false
  }
}
  render(){
    // Conditional Rendering

    // return this.state.isLoggedIn && <h1>Welcome Developer</h1>


    // return this.state.isLoggedIn ? (<h1>Welcome Developer</h1>):(<h1>Hello Developer</h1>)

    let message 
    if(this.state.isLoggedIn){
    message = <h1>Welcome Users</h1>
    }
    else {
      message = <h1>Hello Users</h1>
    }
    return <div>{message}</div>


  //   if(this.state.isLoggedIn) {
  //   return(
  //     <h1>Welome React</h1>
  //   )
  // }
  // else {
  //   return <h1>Hello React</h1>
  }
}
export default App