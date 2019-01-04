import React, {Component} from "react";
import Form from "./FormComponent";

class FormContainer extends Component{
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
                <Form />
            </div>
        );
    }
}
export default FormContainer;