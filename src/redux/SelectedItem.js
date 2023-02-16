import * as ActionTypes from "./ActionTypes"

export const selectedItem =(state={},action)=>{
    switch(action.type){
            case ActionTypes.SELECT_ITEM:
                return {...state,SelectedItem :action.payload}
            break;
            default:
                return state
}

}