import { combineReducers } from "redux";
import authReducers from "./auth_reducer"; //when exported default we can name anything
import bookmarksListReducer from "./bookmarks_list.reducer";

export default combineReducers({
    auth: authReducers,
    bookmarks: bookmarksListReducer
});

