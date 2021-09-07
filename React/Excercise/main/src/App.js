import React from 'react';
import './App.css';
// import Toggle from './Toggle';
// import Clock from './Clock';
// import Greeting from './LoggedIn';
// import LoginControl from './LoginControl';
// import Messages from './Messages';
// import WarningBanner from './WarningBanner';
// import ListKeys from './ListKeys';
// import Calculator from './Temperatue';
// import BlurExample from './Timeout';
// import Login from './login';
// import { Homes } from './Home';
// import TestLogin from './testLogin';
import ToDoList from './toDoList';

function App() {
  return (
    <div>
      {/* <Toggle/>
      <Clock name='Ashok'/>
      <Greeting/>
      <LoginControl/>
      <Messages Unreadmessages={messages} name='Ashok'/>
      <WarningBanner/>
      <ListKeys content={content}/>
      <Calculator/>
      <BlurExample/> */}
      {/* <Homes/> */}
      {/* <Login/> */}
      {/* <TestLogin /> */}
      <ToDoList />
    </div>
  )
}

// const content = [
//   {id:1,name:'Ashok',details:'developer'},
//   {id:2,name:'Prakash',details:'developer'}
// ];

// const messages = ['Ashok:Hello','Prakash:Hai', 'Arun:How are you?']

export default App;
