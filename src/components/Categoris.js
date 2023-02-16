import {MDBRow,MDBCol,MDBCard,MDBCardBody,MDBCardImage,MDBRipple} from "mdb-react-ui-kit"; 
import {Link} from 'react-router-dom'
import {  useSelector } from "react-redux";
import SideBar from "./SideBar";


const Cards =()=>{  
  const items =useSelector((state)=>state.category.categories)
  var CardGroup=items.map((card) =>{
        return(
        <MDBCol key={card.id} md="12" lg="4" className="mb-4" >
          <MDBCard key={card.id} style={{ maxWidth:"400px",maxHeight:"400px" }} >
          <Link to={card.name}>
            <MDBRipple 
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom ripple-test"
            >
              <MDBCardImage
                src={card.image}
                fluid
                className="w-100"
              /> 
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      {/* <span className="badge bg-primary ms-2">New</span> */}
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
            </MDBRipple>
            </Link>
            <MDBCardBody>
                <h5 className="card-title mb-3">{card.name}</h5>
                <p>category</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
            )
        })
        return(
            <MDBRow>
        {CardGroup}
        </MDBRow>

        )
    }
const Categoris = () => {
return(
    <div>
      <div className="sbdiv"><SideBar/></div>
        <div className="carddiv">{Cards()}</div>
        
    </div>


)    

}

export default Categoris;