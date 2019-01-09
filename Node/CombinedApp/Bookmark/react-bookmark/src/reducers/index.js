import { combineReducers } from "redux";
import authReducers from "./auth_reducer"; //when exported default we can name anything
import bookmarksListReducer from "./bookmarks_list.reducer";
import {reducer as formReducer} from "redux-form";

export default combineReducers({
    auth: authReducers,
    bookmarks: bookmarksListReducer,
    form: formReducer
});

