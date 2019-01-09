import React, {Component} from "react";
//import axios from "axios";
//import LocalApi from "./../../apis/local";
import {connect} from "react-redux";
import {createBookmark} from "./../../actions";
import {reduxForm, Field } from "redux-form";
import Input from "./fields/Input";


class BookmarkForm extends Component{
    state= {title: "", url: ""}

    // onFormSubmit = async (event) => {
    //     //event.preventDefault(); // Removed due to use of Redux form method handleSubmit
    //     //console.log(this.state);
    //     //const {title, url} = this.state;
    //     const {title, url} = fromValues;
    //     const {createBookmark} = this.props;

    //     // try{
    //     //     const response = await LocalApi.post("/bookmarks", {title, url});
    //     //     console.log(response);
    //     //     this.props.onBookmarkFormSubmit(response.data);
            
    //     // } catch(error){
    //     //     console.log(error);
    //     // }

    //     createBookmark({title, url});
    
    // }

    onFormSubmit = async (fromValues) =>{
        const {title, url} = fromValues;
        const {createBookmark, reset} = this.props;
        createBookmark({title, url});
        reset();
    }

    onInputChange = (name, event) => {
        this.setState({ [name]: event.target.value });
    }

    render(){
        //const {title, url} = this.state;
        const {handleSubmit} = this.props;

        return(
            <form onSubmit={handleSubmit(this.onFormSubmit)}>
            <p>
                {/* <label htmlFor="title">Title</label>
                <input type="title" value={title} onChange={(event) => this.onInputChange("title", event)} /> */}
                
                {/* //Redux form */}
                <label htmlFor="title">Title</label>
                <Field 
                    type="text"
                    name="title"
                    // component="input"
                    component={Input}
                />
            </p>
            <p>
                <label htmlFor="url">url</label>
                {/* <input type="text" value={url} onChange={(event) => this.onInputChange("url", event)} /> */}
                <Field 
                    type="text"
                    name="url"
                    component={Input}
                />
            </p>
            <p>
                <input type="submit" value="Create New Bookmark" />
            </p>
        </form>
        );
    }
}

const WrappedBookmarkForm = reduxForm({
    form: "bookmark",
    // validate: ({title, url}) destructuring
    validate: (fromValues)=>{
        //if this function returns empty object then its valid
        const errors = {};
        // if(!title) //using destructing
        if(!fromValues.title){
            errors.title = "Title is required";
        }
        if (!fromValues.url){
            errors.url = "Url is required"
        }
        return errors;
    }
})(BookmarkForm);

export default connect(null, {
    createBookmark
})(WrappedBookmarkForm);