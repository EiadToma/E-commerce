import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart,postComment } from '../redux/ActionCreater'
const ItemInfo = () => {
  const [newcomment,setnewcomment]=useState('')
  const [commentForm,setcommentForm]=useState(false)
  const dispatch=useDispatch()
  const {id,name,image,cost,desc,rate,likes}= useSelector(state=>state.selectedItem.SelectedItem)
  const comments = useSelector(state=>state.comments.comments)
  const renderComment =comments.filter((comment)=>comment.itemName===name)
 useEffect(()=>{
  
 },[])
  return (
    <div className='itemContainer'>
      <div className='image-desc' >
    <div >
    <img src={image} style={{ width:"100%", height:"100%",borderRadius:"5px" }} />
    </div>
    <div className='desc'>
    <span className='item-info-span'>name :{name}</span>
    <span className='item-info-span'> cost :{cost} syrian pound</span>
    <span className='item-info-span'>description:{desc}</span>
    <span className='item-info-span'>Rate :{rate}/5</span>
    <span className='item-info-span'> Likes :{likes}</span>
    </div>
      </div>
   <div className='comment-submit'>
    <div className='comment'  >
      <p>comments : <br/>{renderComment.map((comment)=>{
        return(
          <p key={comment.id}><span>{comment.author} : </span> {comment.comment}</p>
        )
      })}</p>
      <button className='add absolute'
       style={!commentForm?{ marginTop:"100%" ,marginRight:"100%" }:{visibility:"none",display:"none"}}
       onClick={()=>setcommentForm(true)}
       >Add comment</button>
       <div className='newcomment' style={commentForm?{display:"block",position:"absolute",bottom:0}:{display:"none",visibility:"none"}}>
       <input type={'text'}  onChange={(e)=>setnewcomment(e.target.value)}/>
       <button className='add' onClick={()=>dispatch(postComment(name,5,"unknown",newcomment))}>Submit</button>
       </div>
        </div>
    <div style={{ textAlign:"end" }}>
      <button type='button' className='add' onClick={()=>dispatch(addtocart(cost))}> Add to cart</button>
    </div>
    </div>   


    </div>
      )
}

export default ItemInfo
