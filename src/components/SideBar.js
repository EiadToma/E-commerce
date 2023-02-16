import React from 'react'
import { Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <nav
    id="sidebarMenu"
    className="collapse d-lg-block sidebar collapse bg-dark"
    style={{ height:"100%" }}>
 <div className="position-sticky " style={{ marginTop:"50%" }}>
   <div className="list-group mx-3 mt-4 ">
     <Link 
        className=" SButton"
        >
        Trending
     </Link>
     <Link
        className="SButton"
        >
        Heighest Rating
     </Link>
     <Link
        className="SButton"
        >
      Most Purchased
        </Link>
     <Link
        className="SButton"
        >
        MY Favorites
       </Link>
     <Link
        className="SButton"
        >
       My account
     </Link>
     <Link
        className="SButton"
        >
      Sales
        </Link>
        </div>
 </div>
</nav>
  )
}

export default SideBar
