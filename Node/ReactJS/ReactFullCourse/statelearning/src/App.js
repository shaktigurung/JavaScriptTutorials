import React, {Component} from "react";
import ReactDom from "react-dom";

class App extends Component{
    constructor(){
        super();
        this.state = {
            username: "Jhilke",
            age: 24,
            isLogIn: true
        }
    }

    render(){
        let logstatus;
        if(this.state.isLogIn ===true){
            logstatus ="You are logged in";
        }else{
           logstatus = "You are logged out";
        }
        return(
                <div>
                    <h1>Welcome {this.state.username} to State Class </h1>
                    <p>You are now {this.state.age} years old </p>
                    <p> {logstatus}</p>
                </div>
        );
    }
}

export default App;