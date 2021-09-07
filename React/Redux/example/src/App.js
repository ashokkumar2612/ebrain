import React, { Component } from 'react';
import CakeContainer from './Component/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store'
import HookContainer from './Component/HookContainer'
import IceCreamContainer from './Component/IceCreamContainer';
import NewCakeContainer from './Component/NewCakeContainer';
import ItemContainer from './Component/ItemContainer';
import UserContainer from './Component/UserContainer';
import InputContainer from './Component/InputContainer';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: 'Jordan Belfort'
    }
  }

  getData(){
    setTimeout(() => {
      console.log('Our data is fetched');
      this.setState({
        data: 'Hello WallStreet'
      })
    }, 1000)
  }

  componentDidMount(){
    this.getData();
  }
componentWillMount(){
  console.log('this is called')
}
  render() {
    return(
      <div>
        <Provider store={store}>
      {/* {this.state.data} */}
      <UserContainer/>
      <InputContainer cake name='cake'/>
      <InputContainer name='iceCream'/>
      <ItemContainer cake/>
      <ItemContainer/>
      <HookContainer/>
      <CakeContainer/>
      <IceCreamContainer/>
      <NewCakeContainer/>
      </Provider>
    </div>
    )
  }
}

export default App;