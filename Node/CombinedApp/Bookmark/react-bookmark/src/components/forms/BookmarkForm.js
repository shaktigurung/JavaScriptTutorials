import React, {Component} from "react";
//import axios from "axios";
import LocalApi from "./../../apis/local";

class BookmarkForm extends Component{
    state= {title: "", url: ""}

    onFormSubmit = async (event) => {
        event.preventDefault();
        //console.log(this.state);
        const {title, url} = this.state;

        try{
            const response = await LocalApi.post("/bookmarks", {title, url});
            console.log(response);
            this.props.onBookmarkFormSubmit(response.data);
            
        } catch(error){
            console.log(error);
        }
    
    }

    onInputChange = (name, event) => {
        this.setState({ [name]: event.target.value });
    }

    render(){
        const {title, url} = this.state;

        return(
            <form onSubmit={this.onFormSubmit}>
            <p>
                <label htmlFor="title">Title</label>
                <input type="title" value={title} onChange={(event) => this.onInputChange("title", event)} />
            </p>
            <p>
                <label htmlFor="url">url</label>
                <input type="text" value={url} onChange={(event) => this.onInputChange("url", event)} />
            </p>
            <p>
                <input type="submit" value="Create New Bookmark" />
            </p>
        </form>
        );
    }
}
export default BookmarkForm;