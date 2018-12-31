import React, {Component} from "react";

class Count extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.doubleHandleClick = this.doubleHandleClick.bind(this);
        this.resetClick = this.resetClick.bind(this);
    }

    handleClick(){
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            }
        })
    }
    doubleHandleClick(){
        this.setState((prevState)=>{
            return{
                count: prevState.count * 2 
            }
        })
    }
    resetClick(){
        this.setState((prevState)=>{
            return {count: 0}
        })
    }

    render(){
        return(
        <div>
            <h1>{this.state.count}</h1>
            <button onClick = {this.handleClick}>Single</button>
            <button onClick = {this.doubleHandleClick}>Double</button>
            <button onClick = {this.resetClick}>Reset</button>
        </div>
        );
    }
}

export default Count;