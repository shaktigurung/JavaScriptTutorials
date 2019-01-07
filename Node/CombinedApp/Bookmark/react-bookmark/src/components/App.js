import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./../styles/App.css";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import BookmarksPage from "./pages/BookmarksPage";
import LocalApi from "./../apis/local";
import PrivateRoute from "./PrivateRoute";

class App extends Component {
   // state= {token: sessionStorage.getItem("token")}
   constructor(props){
       super(props);
       const token = sessionStorage.getItem("token");
       this.state={token};

       if(token){
        LocalApi.setAuthHeader(token);
       }

       LocalApi.handleTokenError(()=> {
           this.logout();
       })
   }

   logout = ()=>{
       sessionStorage.clear();
       this.setState({token:null});
   }

    onRegisterFormSubmit = (token, cb) =>{
        sessionStorage.setItem("token", token); //helps to keep token for user to keep logged in while refreshing
        LocalApi.setAuthHeader(token);
        this.setState({token}, cb);
    }

    render() {
        const {token} = this.state;  
    return (
            <BrowserRouter>
                <div>
                    {token && <h4> User is logged in! </h4>}
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/register" render={(props) => {
                            return <RegisterPage{...props} onRegisterFormSubmit = {this.onRegisterFormSubmit} />
                        }} />
                        <PrivateRoute exact path="/bookmarks" token = {token} component={BookmarksPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
