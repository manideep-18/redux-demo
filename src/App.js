import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './UsingRedux/CakeContainer';
import { Provider } from 'react-redux';
import Store from './Redux/store';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <CakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
