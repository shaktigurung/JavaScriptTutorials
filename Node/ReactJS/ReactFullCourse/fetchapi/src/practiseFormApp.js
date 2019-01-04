import React,{Component} from "react";

class FormApp extends Component{
    constructor(){
        super();
        this.state={
            firstName:"",
            lastName:"",
            age:"",
            location:"",
            vegetarian:false,
            nonVegetarian: false,
            lactoseFree: false
            
        }
        this.handleChange= this.handleChange.bind(this);
    }
    handleChange(event){
        const {name, value, type, checked} = event.target;
        type==="checkbox" ? this.setState({[name]:checked}): this.setState({[name]:value});
    }
    render(){
        return(
            <main>
                <form>
                    <input name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange}/> <br/>
                    <input name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange}/> <br/>
                    <input name="age" value={this.state.age} placeholder="Age" onChange={this.handleChange}/> <br/>
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
                    <label> Location</label>
                    <select 
                        value={this.state.location}
                        name="location"
                        onChange ={this.handleChange}
                    >
                        <option value=""> ---Please select the location--</option>
                        <option value="London">London</option>
                        <option value="Paris">Paris</option>
                        <option value="New York">New York</option>

               
                    </select>
                    <br/>
                    <label>Dietary</label>
                        <input 
                            type="checkbox" 
                            name="vegetarian"
                            checked={this.state.vegetarian}  
                            onChange={this.handleChange}/>Vegetarian 
                        <input 
                            type="checkbox" 
                            name="nonVegetarian"
                            checked={this.state.nonVegetarian} 
                            onChange={this.handleChange}/>Non-Vegetarian 
                        <input 
                            type="checkbox" 
                            name="lactoseFree"
                            checked={this.state.lactoseFree} 
                            onChange={this.handleChange}/>Lactose Free 
                    <br/>
                    <button>Submit</button>
                </form>

                <br/>
                <hr/>
                <h1>Your Information </h1>
                <h2> Your name:{this.state.firstName} {this.state.lastName} </h2>
                <h2>Your age: {this.state.age}</h2>
                <h2> Your gender is: {this.state.gender}</h2>
                <h2>Location: {this.state.location}</h2>
                <h2>Dietary</h2>
                <p>Vegetarian:{this.state.vegetarian ? "Yes":"No"}</p>
                <p>Non-Vegetarian:{this.state.nonVegetarian ? "Yes":"No"}</p>
                <p>lactose Free:{this.state.lactoseFree ? "Yes":"No"}</p>

            </main>
        )
    }
}

export default FormApp;