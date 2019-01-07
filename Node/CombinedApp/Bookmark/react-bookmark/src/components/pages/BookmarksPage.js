import React,{Component} from "react";
import BookmarkForm from "./../forms/BookmarkForm";

class BookmarksPage extends Component{
    state= {bookmarks:[]}

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
export default BookmarksPage;