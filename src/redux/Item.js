import * as ActionTypes from './ActionTypes'
const initialState={}
export const Item = (state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.SHOWFOOD:
         return {...state,FOOD:action.payload}
         case ActionTypes.SHOWCARS:
         return {...state,CARS:action.payload}
        case ActionTypes.SHOWSPORT:
         return {...state,SPORT:action.payload}
        case ActionTypes.SHOWTECHNOLOGY:
         return {...state,TECHNOLOGY:action.payload}
         case ActionTypes.SHOWMAKEUP:
         return {...state,MAKEUP:action.payload}
         case ActionTypes.SHOWCLOTHES:
         return {...state,CLOTHES:action.payload}
        }
    return state


}