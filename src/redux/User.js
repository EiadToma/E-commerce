import Users from "./Users.json"
import * as ActionTypes from "./ActionTypes"

 export const User = (state ={Users},action)=>{
    switch(action.type){
        case ActionTypes.LOGIN :
            return {...state,Users:action.payload}

        default:
        }
            return state
}
