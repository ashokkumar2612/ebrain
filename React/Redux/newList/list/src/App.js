import React from 'react';
// import './App.css';
import NavButton from './component/NavButton';
import store from './redux/store'
import {Provider} from 'react-redux'
// import Login from './component/Login';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <NavButton/>
      </Provider>
    </div>
  );
}
export default App;
