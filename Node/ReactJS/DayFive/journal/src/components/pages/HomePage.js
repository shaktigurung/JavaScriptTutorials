import React, { Component } from 'react';
import {Link} from "react-router-dom";

class HomePage extends Component {
  render() {
   

    return (
      <div>
        <h1> Home </h1>
        <Link to="/category">
            <button>Category</button>
        </Link>
      </div>
    );
  }
}

export default HomePage;
