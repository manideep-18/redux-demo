import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './UsingRedux/CakeContainer';
import { Provider } from 'react-redux';
import Store from './Redux/store';
import HooksCakeContainer from './UsingRedux/HooksCakeContainer';
import IceCreamContainer from './UsingRedux/IceCreamContainer';
import NewCakeConainer from './UsingRedux/NewCakeConainer';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <CakeContainer/>
      <HooksCakeContainer/>
      <IceCreamContainer/>
      <NewCakeConainer/>
    </div>
    </Provider>
  );
}

export default App;
