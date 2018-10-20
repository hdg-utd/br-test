import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TabBar from '../tab-bar/TabBar'

class App extends Component {
  render() {
    return (
      <div className="App">
      	<TabBar />
      </div>
    );
  }
}

export default App;
