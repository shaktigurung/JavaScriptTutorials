import React, {Component} from "react";

class App extends Component{
    constructor(){
        super();
        this.state= {
            loading: false,
            character:{}
        }
    }
    componentDidMount(){
         this.setState({loading:true});
        fetch("https://swapi.co/api/people/1/")
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            this.setState({
                loading: false,
                character: data
            });
        });
    }

    render(){
        const text = this.state.loading ? "Loading..." : this.state.character.name;

        return(
            <div>
                <h1> {text} </h1>   
            </div>
        );
    }
}
export default App;