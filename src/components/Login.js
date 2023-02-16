import {login} from  "../redux/ActionCreater"
import { useDispatch} from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  let disble =email && password
  const sendvalues =()=>{
      alert("email : "+email+"password : "+password)
}
return (
  <div className="containerL login">
  <form>
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
    <button style={{ marginLeft:"60px",width:"70px" }} className="add" disabled={!disble} onClick={sendvalues}> Login</button>
    <p>dont have an accounte?<Link to={"/signup"} style={{ textDecoration:"none" }}>Sign up</Link></p>
</form>
</div>
  )
}



export default Login;