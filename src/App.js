import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './UsingRedux/CakeContainer';
import { Provider } from 'react-redux';
import Store from './Redux/store';
import HooksCakeContainer from './UsingRedux/HooksCakeContainer';
import IceCreamContainer from './UsingRedux/IceCreamContainer';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <CakeContainer/>
      <HooksCakeContainer/>
      <IceCreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
