import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import FunctionClick from './functionclick'
// import Classclick from './classclick'
// import Footer from './Footer'
// import Count from './count'
// import EventBind from './EventBind'
import Parent from './ParentComponent'
import * as serviceWorker from './serviceWorker';

const Component = () => {
    return(
    <div>
        {/* <App name="Ashok" profession="UI Developer"><p>Im coming from Theni</p></App> */}
        {/* <Footer name="Prakash" city="pennadam"/> */}
        {/* <Count/> */}
        {/* <Classclick/> */}
        {/* <FunctionClick/> */}
        {/* <EventBind/> */}
        <Parent/>
    </div>
    )
}

ReactDOM.render(<Component />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to r//egister() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
