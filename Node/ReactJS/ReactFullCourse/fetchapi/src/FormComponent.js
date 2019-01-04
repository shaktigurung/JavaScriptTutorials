import React,{Component} from "react";

function Form(){
    return(
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
    );
 
}

export default Form;