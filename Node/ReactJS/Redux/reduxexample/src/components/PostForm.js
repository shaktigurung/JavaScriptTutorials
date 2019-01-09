import React, { Component } from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createPost} from "./../actions/postActions";


class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'',
            body:''
         }
    }
    onChange = (event)=> {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    onSubmit = (event)=>{
        event.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        // fetch("https://jsonplaceholder.typicode.com/posts", {
        //     method: 'POST',
        //     headers: {
        //         'content-type':'application/json' 
        //     },
        //     body: JSON.stringify(post)
        // })
        // .then(res => res.json())
        // .then(data => console.log(data));

        //Call Action
        this.props.createPost(post);
    }
    render() { 
        return (
            <div>
                <h1> Add forms </h1>
                <form onSubmit = {this.onSubmit}>
                    <div>
                        <label>Title</label>
                        <br/>
                        <input type="text" name="title" onChange = {this.onChange} value={this.state.title} />
                    </div>
                    <br/>
                    <div>
                        <label>Body</label>
                        <br/>
                        <textarea name="body" onChange = {this.onChange} value={this.state.body}></textarea>
                    </div>
                    <br/>
                    <button type="submit">Submit </button>
                </form>
            </div>
          );
    }
}
PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
    //posts: PropTypes.array.isRequired
};
 
export default connect(null,{createPost}) (PostForm);