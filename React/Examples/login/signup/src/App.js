import React from 'react';
import './App.css';
import Signup from './signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login';
// import TableOne from './TableOne'
// import TableTwo from './TableTwo'
// import Sign from './MaterialUI'
// import SignIn from './Material';
// import Ape from './array'
function App() {
  return (
    <Router>
    <div>
      <Route path="/" exact component={Login}></Route>
      <Route path="/signup" exact component={Signup}></Route>
     </div>
     </Router>
  );
// return (
//   <Router>
// <div>
//   <Route path='/' exact component={Sign}></Route>
//   <Route path='/login' exact component={SignIn}></Route>
//   <Route path='/current' exact component={TableOne}></Route>
//   <Route path='/old' exact component={TableTwo}></Route>
//   </div>
//   </Router>
// )
}
export default App;
