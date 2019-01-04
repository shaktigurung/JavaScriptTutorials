import React, {Component} from "react";

class App extends Component{
    constructor(){
        super();
        this.state= {
            loading: false,
            character:{},
            firstName: "",
            lastName: ""
        }
        this.handleChange= this.handleChange.bind(this);
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
    handleChange(event){
        const {name, value} = event.target
        this.setState({
            // [event.target.name]: event.target.value
            [name]: value
        })
    }

    render(){
        const text = this.state.loading ? "Loading..." : this.state.character.name;

        return(
            <div>
                <h1> {text} </h1> 
                <form>
                    <input 
                        type="text" 
                        value={this.state.firstName} 
                        name="firstName" 
                        placeholder="First Name" 
                        onChange={this.handleChange} 
                    />
                    <input 
                        type="text" 
                        value={this.state.lastName} 
                        name="lastName" 
                        placeholder="Last Name" 
                        onChange={this.handleChange} 
                    />
                    <p>{this.state.firstName} {this.state.lastName}</p>
                </form>  
            </div>
        );
    }
}
export default App;