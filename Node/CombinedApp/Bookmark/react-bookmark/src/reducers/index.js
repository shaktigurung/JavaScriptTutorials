import { combineReducers } from "redux";
import authReducers from "./auth_reducer"; //when exported default we can name anything

export default combineReducers({
    auth: authReducers
});

