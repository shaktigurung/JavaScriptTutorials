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
        const {bookmarks} = this.props;

        return(
            <div>
                <h4> New Bookmark </h4>
                {/* <BookmarkForm  onBookmarkFormSubmit= {this.onBookmarkFormSubmit}/> */}
                <BookmarkForm />
                <h2>My Bookmarks </h2>
                <ul>
                    {bookmarks.map(bookmark=>{
                        return(
                            <li key={bookmark._id}>
                                <a href={bookmark.url} > {bookmark.title} </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        bookmarks: state.bookmarks
    }
}
export default connect(mapStateToProps, {
    fetchBookmarks
})(BookmarksPage);