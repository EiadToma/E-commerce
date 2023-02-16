import * as ActionTypes from './ActionTypes'

export const category=(state={},action)=>{
    switch(action.type){
    case ActionTypes.SHOW_CATEGORIES:
        return {...state,categories:action.payload}
        default:
            return state
    }

}
