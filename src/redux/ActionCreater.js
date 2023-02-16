import  * as ActionTypes   from  "./ActionTypes"
import axios from "axios"
import { BaseUrl } from "./Url"
export const showCategories = (categories)=>({
    type:ActionTypes.SHOW_CATEGORIES,
    payload:categories
})
export const addtocart =(price)=>({
    type:ActionTypes.ADD_TO_CART,
    payload:price
})
export const deletefromcart =(price)=>({
    type:ActionTypes.DELETE_CART,
    payload:price
})
export const login = (values)=>({
    type:ActionTypes.LOGIN,
    payload:values
})
export const showfood = (item)=>({
    type:ActionTypes.SHOWFOOD,
    payload:item
})
export const showcars = (item)=>({
    type:ActionTypes.SHOWCARS,
    payload:item
})
export const showtech = (item)=>({
    type:ActionTypes.SHOWTECHNOLOGY,
    payload:item
})
export const showsport = (item)=>({
    type:ActionTypes.SHOWSPORT,
    payload:item
})
export const showclothes = (item)=>({
    type:ActionTypes.SHOWCLOTHES,
    payload:item
})
export const showmakeup = (item)=>({
    type:ActionTypes.SHOWMAKEUP,
    payload:item
})
export const showcomments = (comments)=>({
    type:ActionTypes.SHOW_COMMENTS,
    payload:comments
})
export const fetchCategories=(dispatch)=>{
    axios.get(BaseUrl+"Types")
    .then((response)=>{
        dispatch(showCategories(response.data));}
        )
    .then(console.error())

}
export const fetchFood =(dispatch)=>{
    axios.get(BaseUrl+"food")
    .then((response)=>{
        dispatch(showfood(response.data));}
        )
    .then(console.error())

}
export const fetchCars =(dispatch)=>{
    axios.get(BaseUrl+"cars")
        .then((response)=>{
        dispatch(showcars(response.data))})
            .then(console.error())

}
export const fetchSport =(dispatch)=>{
    axios.get(BaseUrl+"sport")
    .then((response)=>{
        dispatch(showsport(response.data))})
    .then(console.error())

}
export const fetchmakeup =(dispatch)=>{
    axios.get(BaseUrl+"makeup")
    .then((response)=>{
        dispatch(showmakeup(response.data))})
    .then(console.error())

}
export const fetchclothes =(dispatch)=>{
    axios.get(BaseUrl+"clothes")
    .then((response)=>{
        dispatch(showclothes(response.data))})
    .then(console.error())

}
export const fetchtech =(dispatch)=>{
    axios.get(BaseUrl+"technology")
    .then((response)=>{
        dispatch(showtech(response.data))})
    .then(console.error())

}
export const fetchComments =(dispatch)=>{
    axios.get(BaseUrl+"comments")
    .then((response)=>{
        dispatch(showcomments(response.data))})
    .then(console.error())

}
export const selectItem =(item)=>({
    type:ActionTypes.SELECT_ITEM,
    payload:item
})
export const search =(search)=>({
    type:ActionTypes.SEARCH,
    payload:search
})
export const postComment = (itemName, rating, author, comment) =>(dispatch) => {

    const newComment = {
        itemName: itemName,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();

    return  axios.post(BaseUrl + 'comments', newComment)
    .then(fetchComments(dispatch))
}
