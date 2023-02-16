import { Link, useParams } from "react-router-dom";
import {selectItem} from "../redux/ActionCreater"
import {MDBRow,MDBCol,MDBCard,MDBCardBody,MDBCardImage,MDBRipple,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./SideBar";

const RFC =({category})=>{

    const dispatch = useDispatch()
    const items=category.map(item=>{
        return(
            <MDBCol md="12" lg="4" className="mb-4" key={item.id}>
            <MDBCard key={item.id} style={{ maxWidth:"400px",maxHeight:"375px" }}  >
            <Link to={`${item.name}`} onClick={()=>dispatch(selectItem(item))} >
              <MDBRipple 
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom ripple-test"
              >
                <MDBCardImage
                  src={item.image}
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
                  <h5 className="card-title mb-3">{item.name}</h5>
                  <h6 className="mb-3">{item.cost}</h6>
                  <p>{item.desc}</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        )
    })
    return(
            <MDBRow>          
                {items}
            </MDBRow>

                )

}

const Items = () => { 
  const allItems = useSelector((state)=>state.Item)
  const dishes = allItems.FOOD
  const cars = allItems.CARS
  const sport = allItems.SPORT
  const tech = allItems.TECHNOLOGY
  const clothes = allItems.CLOTHES
  const Makeup = allItems.MAKEUP
  const param = useParams()
  console.log(param)
  let category
  switch(param.Items){
    case "FOOD":
      category =dishes
      break
    case "CARS":
      category =cars
      break
    case "SPORT":
      category =sport
      break
    case "TECHNOLOGY":
      category =tech
      break
      case "CLOTHES":
      category =clothes
      break
      case "MAKEUP":
      category =Makeup
      break
  }

  return (
    <div>
    <div className="sbdiv"><SideBar/></div>
    <div className="carddiv"><RFC category={category} /></div>
    </div>
    )

}

export default Items
