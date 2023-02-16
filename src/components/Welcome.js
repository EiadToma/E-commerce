import React,{ useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {fetchComments, fetchCars,fetchFood,fetchtech,fetchSport,fetchCategories,fetchclothes,fetchmakeup } from '../redux/ActionCreater'
const Welcome = () => {
  const dispatch =useDispatch()
  useEffect(()=>{
    fetchCategories(dispatch);
    fetchComments(dispatch)
    fetchFood(dispatch);
    fetchCars(dispatch);
    fetchtech(dispatch);
    fetchSport(dispatch);
    fetchclothes(dispatch);
    fetchmakeup(dispatch);
  },[])
  return (
    
    <div className='welcome'>
            <img src='../assets/images/logo.png' style={{ width:"60px" ,height:"60px",borderRadius:"5px" }}/>
      <div className='container welcontainer'>
      <h1 className='welitem'>ET Store</h1>
      <h3 className='welitem'>every thing you need</h3>
          <Link to={'login'} className="link welitem"> sign in</Link>
           <Link to={'Categories'} className="link welitem"> View categories <i>As guest</i> </Link>
           </div>
    </div>
  )
}

export default Welcome
