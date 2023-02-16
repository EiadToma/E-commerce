import * as ActionTypes from "./ActionTypes"
const initialstate={
    bill:0
}
export const bill =(state=initialstate,action)=>{
switch(action.type){
    case ActionTypes.ADD_TO_CART:
        return {...state,bill:initialstate.bill += Number(action.payload)} 
        break;
    default:
        return state
}
return state
}