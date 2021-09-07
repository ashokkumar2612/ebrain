import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import List from './Listing'
// import Form from './Form'
// import ParentComp from './Component/ParentComponent'
import * as serviceWorker from './serviceWorker';
// import RefDemo from './RefDemo'
// import FRinput from './FRinput';
// import Portal from './portal'
// import ClickCount from './ClickCount'
// import HoverCount from './HoverCount'
// import ClickCountTwo from './ClickCountTwo';
// import HoverCountTwo from './HoverCountTwo';
// import User from './User';
// import Counter from './Counter';
// import ComponentA from './Component/ComponentA';
// import { UserProvider } from './Component/UserContext';
// import UpdateCounter from './WithCounter'

function Hello() {
    return (
        <div>
            {/* {/* <App/> */}
            <List/>
            {/* <Form/> */}
            {/* <ParentComp/> */}
            {/* <RefDemo/> */}
            {/* <FRinput/> */}
            {/* <Portal/> */}
            {/* <ClickCount name='Ashok'/> */}
            {/* <HoverCount/> */}
            {/* <ClickCountTwo/> */}
            {/* <HoverCountTwo/> */}
            {/* <Counter>
            {(count, incrementHandler) => (
                 <ClickCountTwo count ={count} incrementHandler ={incrementHandler} /> 
                 )} 
                 </Counter>
            <Counter> 
            {(count, incrementHandler) => ( 
                 <HoverCountTwo count ={count} incrementHandler ={incrementHandler} /> 
                 )} 
               </Counter> */}
            {/* <User render ={(isLoggedin)=>isLoggedin ? 'Ashok':'Guest'}/> */}
            {/* <UserProvider value='Ashok'> */}
            {/* <ComponentA/> */}
            {/* </UserProvider> */}
            
        </div>
    )
}


ReactDOM.render(<Hello/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
