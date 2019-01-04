import React,{Component} from "react";
import FormComponent from "./practiseFormComponent";

class FormContainer extends Component{
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
            <FormComponent 
                handleChange={this.handleChange}
                data={this.state}
            />
        )
    }
}

export default FormContainer;

//Business logics on this component