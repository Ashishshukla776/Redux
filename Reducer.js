import { SET_USER_NAME,SET_USER_PASSWORD } from "./Action";

const initialState={
    name:'',
    password:'',

}
function reducer(state=initialState,action){
    switch(action.type){
        case SET_USER_NAME:
            return{...state,name:action.payload};
        case SET_USER_PASSWORD:
            return{...state,password:action.payload};
        default:
            return state;
    }
}
export default reducer;