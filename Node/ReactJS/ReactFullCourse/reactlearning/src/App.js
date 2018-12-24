import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>My list</h2>
        <ul>
          <div className="li">list1</div>
          <div className="li">list2</div>
          <div className="li">list3</div>
        </ul>
      </div>
    );
  }
}

export default App;
