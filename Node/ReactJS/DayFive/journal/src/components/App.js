import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom"; //MemoryRouter "State base"  HashRouter "uses # for routing"
import HomePage from "./pages/HomePage";
import CategorySelectionPage from "./pages/CategorySelectionPage";
import NewEntryPage from "./pages/NewEntryPage";

class App extends Component {

  state = {
      categories: ["food", "thoughts", "romance"],
      entries: []
  }

  onEntryFormSubmit = (entry) =>{
      this.setState((state)=>{
          return {entries: [...state.entries, entry]};
      });
  }

  //One way to navigate "State base navigation"
  // state = {location: 'home'}

  // getPage(){
  //   const {location} = this.state;

  //   switch(location) {
  //     case "home":
  //       return <HomePage />
  //     case "category":
  //       return  <CategorySelectionPage />
  //     case "entry":
  //       return <NewEntryPage />
  //     default:
  //       return null;
  //   }
  // }

  // onChangeLocation = (location)=>{
  //   this.setState({location});
  // }
  render() {
    const {categories} = this.state
    return (
      <div>

        {/* <button onClick = {() => this.onChangeLocation("home")}>Home</button>
          <button onClick = {() => this.onChangeLocation("category")}>Category</button>
          <button onClick = {() => this.onChangeLocation("entry")}>New Entry</button>
          {this.getPage()} */}
         
          <BrowserRouter>
              <div>
                  {/* <Link to = "/"> Home </Link>
                  <Link to = "/category"> Category </Link>
                  <Link to = "/entry"> New Entry </Link> */}
                  <Route exact path = "/" component = {HomePage} />
                  {/* <Route exact path = "/category" component = {CategorySelectionPage} /> */}
                  <Route 
                      exact path = "/category" 
                      render= {(props) => {
                      return <CategorySelectionPage {...props} categories= {categories}/> }} />
                  <Route 
                      exact 
                      path = "/entry/new/:index" 
                      render= {(props) => {
                      return <NewEntryPage {...props} categories= {categories} onEntryFormSubmit= {this.onEntryFormSubmit}/> }}
                  />
              </div>
          </BrowserRouter>


      </div>
    );
  }
}

export default App;


// learn Redirect and Switch component in react-router-dom