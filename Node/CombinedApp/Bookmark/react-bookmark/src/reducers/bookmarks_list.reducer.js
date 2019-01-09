
const defaultState =[];
export default (state = defaultState, action)=>{
    switch(action.type){
        case "BOOKMARKS_LIST":
            return action.payload; //payload is any data passed to reducer

        default:
            return state;
    }
    
}