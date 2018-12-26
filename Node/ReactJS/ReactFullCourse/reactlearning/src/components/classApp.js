import React, {Component} from "react";
import ReactDom from "react-dom";

class ClassApp extends Component{
    render(){
        return(
                <div>
                    <h1>This is from Class App </h1>
                    <Header />
                    <Greeting />
                </div>
        );
    }
}

class Header extends Component{
    render(){
    return(
        <Header>
            <p>Hello Header</p>
        </Header>
    );
    }
}

class Greeting extends Component{
    render(){
    let date = new Date();
    return(
            <div>
                <p> Hello, It is {`${date.toLocaleTimeString()}`}</p>
            </div>
    );
    }
}

export default ClassApp;

