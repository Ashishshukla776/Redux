import * as ActionTypes from './actionTypes';

const initialState={
    user:{
        username:'',
        Password:''
    },
};

export const reducer =(state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.ADD_USER:
            return{
                ...state,
                user:{...state.user,username:action.payload.username},

            };
            case ActionTypes.ADD_PASSWORD:
            return{
                ...state,
                user:{...state.user,Password:action.payload.Password},
            };
            default:
                return state;
    }
}
