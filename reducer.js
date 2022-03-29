import * as ActionTypes from './actionTypes';

const initialState={
    user:{
        username:'',
        password:'',
    },     
  
};

export const reducer =(state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.ADD_USER:
            return{
                ...state,
                user:{...state.user,username:action.payload.username}

            };
            case ActionTypes.ADD_PASSWORD:
            return{
                ...state,
                user:{...state.user,password:action.payload.password}
            };
            default:
                return state;
    }
}
export default reducer;
