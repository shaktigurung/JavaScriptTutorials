import React, {Component} from "react";

class App extends Component{
    constructor(){
        super();
        this.state= {}
    }
    componentDidMount(){
        console.log("I am working");
    }

    render(){
        return(
            <div>
                <h1> Fetch Api </h1>
            </div>
        );
    }
}
export default App;