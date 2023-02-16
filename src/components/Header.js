import { Link } from "react-router-dom";
import {Nav,NavItem,Navbar,NavbarBrand,NavLink} from "reactstrap"
import { useState } from "react";
import { useSelector } from "react-redux";
 const Header =()=> {
  const bill = useSelector(state=>state.bill.bill)
  const [search,setSearch] = useState("")
        return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light "style={{ position:"sticky",top:0,zIndex:300 }}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
   <NavbarBrand style={{ marginLeft:"10px" }}>E-Store</NavbarBrand>

  <div className="collapse navbar-collapse flex justify-content-center" >
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" to={"/Categories"}>Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/Contact"}>Contact Us</Link>
      </li>
    </ul>
    <form className="form my-2 my-lg-0 d-flex">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" onChange={(e)=>setSearch(e.target.value)}/>
      <button style={{ marginLeft:"5px" }} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <div className="Bill" style={{ width:"200px",textAlign:"center",paddingTop:"5px" }} >
    <p><span style={{ display:"inline-block",margin:"5px",marginRight:"5px" }}>Your Bill</span> {bill} SP</p>
    </div>
  </div>
 </nav>
        )
    }

 export default Header;