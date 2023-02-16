import * as ActionTypes from "./ActionTypes";
export const comments=(state={},action)=>{
switch(action.type){
    case ActionTypes.SHOW_COMMENTS:
        return {...state,comments:action.payload}
    break;
    // case ActionTypes.ADDCOMMENT:
    default:
        return state;
}
return state;
} 