import LocalApi from "./../apis/local";


export const setAuthToken = (token) => {
    sessionStorage.setItem("token", token);
    
    return{
        type: "AUTH_TOKEN",
        payload: token
    };
}

export const fetchBookmarks = () => {
    return async (dispatch, getState) =>{
        let response = await LocalApi.get("/bookmarks");

        dispatch({
            type: "BOOKMARKS_LIST",
            //payload: [{_id:"1234", title: "test", url: "http://google.com"}]
            payload: response.data
        });
    }
   
}

export const createBookmark = ({title, url}) =>{
    return async (dispatch , getState)=>{
        let response = await LocalApi.post("/bookmarks", {title, url});
        dispatch(
            {
                type: "BOOKMARKS_LIST",
                //payload: [{_id:"1234", title: "test", url: "http://google.com"}]
                payload: response.data
            }
        );
    }
}