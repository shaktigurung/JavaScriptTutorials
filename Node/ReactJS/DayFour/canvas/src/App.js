import React, { Component } from 'react';
import Canvas from "./Canvas";

class App extends Component {
  render() {
    return (
      <div >
         <h1>Welcome to your Drawing Pad </h1>
          <Canvas />
      </div>
    );
  }
}

export default App;
