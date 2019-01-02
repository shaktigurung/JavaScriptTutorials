import React, {Component} from "react";
import Conditional from "./Conditional";

class App extends Component{
    constructor(){
        super();
        this.state = {
            isLoading: true,
            unreadMessages:["a", "b"]
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                 isLoading: false,
                
            })
        }, 1500)
    }
    render(){
        return(
            <div>
                {this.state.isLoading ?
                <h1>Loading..</h1> : 
                <Conditional />
                }
                {/* <Conditional isLoading = {this.state.isLoading}/> */}
                {this.state.unreadMessages.length > 0 && 
                <h1>You got {this.state.unreadMessages.length} unread messages.</h1>}
            </div>
        );
    }
}
export default App;