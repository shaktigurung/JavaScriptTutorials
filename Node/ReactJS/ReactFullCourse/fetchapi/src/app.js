import React, {Component} from "react";

class App extends Component{
    constructor(){
        super();
        this.state= {
            loading: false,
            character:{},
            firstName: "",
            lastName: "",
            brief:"",   
            isFriendly: true,
            gender:"",
            favColor:""
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
        const {name, value, type, checked} = event.target
        type==="checkbox"? this.setState({[name]:checked}):this.setState({[name]: value});
          // [event.target.name]: event.target.value
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
                    <textarea 
                        value={this.state.brief}
                        name="brief" 
                        onChange={this.handleChange}>
                    </textarea>
                    <label>
                        <input 
                            type="checkbox" 
                            name="isFriendly"
                            checked={this.state.isFriendly}
                            onChange={this.handleChange}
                        />Is Friendly?
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        />Male
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        />Female
                    </label>
                    <br/>
                    <label>Favourite Color</label>
                    <select 
                        value={this.state.favColor}
                        name="favColor"
                        onChange ={this.handleChange}
                    >
                        <option value="blue">Blue</option>
                        <option value="red">Red</option>
                        <option value="white">White</option>
                    </select>

                    <p>{this.state.firstName} {this.state.lastName}</p>
                    <p>{this.state.brief}</p>
                    <p>You are a {this.state.gender}</p>
                    <p>Your favourite color is {this.state.favColor}</p>
                </form>  
            </div>
        );
    }
}
export default App;

//Formik is a good library to use for react forms