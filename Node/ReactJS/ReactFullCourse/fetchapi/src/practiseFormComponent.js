import React from "react";

function FormComponent(props){
    return(
        <main>
        <form>
            <input name="firstName" value={props.data.firstName} placeholder="First Name" onChange={props.handleChange}/> <br/>
            <input name="lastName" value={props.data.lastName} placeholder="Last Name" onChange={props.handleChange}/> <br/>
            <input name="age" value={props.data.age} placeholder="Age" onChange={props.handleChange}/> <br/>
            <br />
            <label>
                <input 
                    type="radio" 
                    name="gender"
                    value="male"
                    checked={props.data.gender === "male"}
                    onChange={props.handleChange}
                />Male
            </label>
            <label>
                <input 
                    type="radio" 
                    name="gender"
                    value="female"
                    checked={props.data.gender === "female"}
                    onChange={props.handleChange}
                />Female
            </label>
            <br/>
            <label> Location</label>
            <select 
                value={props.data.location}
                name="location"
                onChange ={props.handleChange}
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
                    checked={props.data.vegetarian}  
                    onChange={props.handleChange}/>Vegetarian 
                <input 
                    type="checkbox" 
                    name="nonVegetarian"
                    checked={props.data.nonVegetarian} 
                    onChange={props.handleChange}/>Non-Vegetarian 
                <input 
                    type="checkbox" 
                    name="lactoseFree"
                    checked={props.data.lactoseFree} 
                    onChange={props.handleChange}/>Lactose Free 
            <br/>
            <button>Submit</button>
        </form>

        <br/>
        <hr/>
        <h1>Your Information </h1>
        <h2> Your name:{props.data.firstName} {props.data.lastName} </h2>
        <h2>Your age: {props.data.age}</h2>
        <h2> Your gender is: {props.data.gender}</h2>
        <h2>Location: {props.data.location}</h2>
        <h2>Dietary</h2>
        <p>Vegetarian:{props.data.vegetarian ? "Yes":"No"}</p>
        <p>Non-Vegetarian:{props.data.nonVegetarian ? "Yes":"No"}</p>
        <p>lactose Free:{props.data.lactoseFree ? "Yes":"No"}</p>

    </main>
);
}

export default FormComponent;

//UI expects of the website on this component