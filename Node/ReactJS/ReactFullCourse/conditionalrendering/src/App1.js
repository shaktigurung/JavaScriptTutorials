import React, {Component} from "react";

class App extends Component{
    constructor(){
        super();
        this.state = {
            userLoggedIn: true
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){

        // if(this.state.userLoggedIn === true){
        // this.setState(
        //     {userLoggedIn: false}
        // );
        // }
        // else{
        //     this.setState(
        //         {userLoggedIn: true}
        //     );
        // }

        this.setState(prevState=>{
            return{
                userLoggedIn: !prevState.userLoggedIn
            }
        })
        
    }
    render(){
        let buttonText = this.state.userLoggedIn ? "Log Out" : "log In";
        let displayText = this.state.userLoggedIn ? "You are logged In" : "You are Logged Out";
        return(
            <div>
                <h1>Conditional Rendering From App One</h1>
                {/* {this.state.userLoggedIn ? <h1>You are Logged in</h1> : <h1> You are not logged in </h1> } */}
                <h1>{displayText} </h1>
                <button onClick = {this.handleClick}>{buttonText} </button>
            </div>
        );
    }
}

export default App;