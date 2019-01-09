import React,{Component} from "react";
import BookmarkForm from "./../forms/BookmarkForm";
import {connect} from "react-redux";
import {fetchBookmarks} from "./../../actions";

class BookmarksPage extends Component{
    state= {bookmarks:[]}

    componentDidMount(){
        //using destructuring
        const {fetchBookmarks} = this.props;
        fetchBookmarks();
        //or
        //this.props.fetchBookmarks();
    }

    onBookmarkFormSubmit = ({bookmarks}) =>{
        this.setState({bookmarks});
    }
    render(){
        return(
            <div>
                <h4> New Bookmark </h4>
                <BookmarkForm  onBookmarkFormSubmit= {this.onBookmarkFormSubmit}/>
            </div>
        );
    }
}
export default connect(null, {
    fetchBookmarks
})(BookmarksPage);