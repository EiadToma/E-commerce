import {useState} from 'react'
import { useDispatch } from 'react-redux'
const Signup = () => {
    const dispatch=useDispatch()
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const sendvalues =()=>{
    alert("name : " + name +"email : "+email+"password : "+password)
    }
    let disble = name && email && password
    return (
    <div className="containerL login">
      <form>
        <div className="form-group">
        <label className="form-label">Username</label>
        <input type='text'  
        className="form-input"
        onChange={(e)=>setname(e.target.value)}/>
        </div>
        <div className="form-group"> 
         <label className="form-label">Email</label>
        <input type='email'
        className="form-input"
        onChange={(e)=>setemail(e.target.value)}/>
        </div>
        <div className="form-group">
        <label className="form-label">Password</label>
        <input type='password'
        className="form-input"
        onChange={(e)=>setpassword(e.target.value)}/>
        </div>
        <button style={{ marginLeft:"60px",width:"70px" }} className="add" disabled={!disble} onClick={sendvalues}> Sign up</button>
        
    </form>
    </div>
    )    
}

export default Signup
