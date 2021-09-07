import React from 'react';
import Footer from './Footer'
import './App.css';

 const App = props =>{
   // Destructuring props
   const {name, profession} = props
   console.log(props);
   return (
   <div><Footer/><h1>Hello I'm {name} & i am a {profession}</h1>
   {props.children}
   </div>
   )
}

 export default App;
