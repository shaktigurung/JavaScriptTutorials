
const defaultState ={
    token: null
};

// Action
//{
//     type: "AUTH_TOKEN"
//      payload: {token}
// }
export default (state = defaultState, action) => {
    switch(action.type){
        case "AUTH_TOKEN":
            // const newState = {...state};
            // newState.token = action.payload; 
            
            //****** OR use single line expression like below
            return {...state, token: action.payload}
        default: 
            return state;
    }
}