import React,{useEffect} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {Container,Row,Col,Button,Card} from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { fetchRooms } from "store/rooms";
import { AtomSpinner } from "react-epic-spinners";
import SlideShow from "views/viewRoom/SlideShow";

const Rooms = () =>{

    const dispatch = useDispatch();
    const roomsData = useSelector(state=>state.rooms.rooms_data);
    const loading = useSelector(state=>state.rooms.loading);
    const errMessage = useSelector(state=>state.rooms.errMessage);

    console.log("Length of rooms data = ",roomsData.length);

    useEffect(()=>{
        dispatch(fetchRooms());
    },[]);

    return (
    <>
        <section
          className="section section-components pb-0"
          id="rooms"
        >
            
          <Container>
            {
                (loading) &&
                <div height={"400px"} width={"100%"}>
                    <center><AtomSpinner color={"blue"}/></center>
                </div>
            }
            {
                (!loading)  && (errMessage!==null) &&
                <div height={"400px"} width={"100%"}>
                    <center><p style={{color:"red"}}>{errMessage}</p></center>
                </div>
            }
            {
            (!loading) &&
            <Row className="justify-content-center">
              <Col lg="12">
                {/* Basic elements */}
                <h2 className="mb-5">
                  <span>Available Rooms</span>
                </h2>
                {/* Buttons */}
               
                {
                    roomsData.map((val,index)=>{
                        console.log("Room name = ",val["room_data"]["room_name"]);
                        return (
                            <Room 
                                key={"room"+index} 
                                features={val["room_features"]}
                                room_capacity={val["room_data"]["room_capacity"]} 
                                room_name={val["room_data"]["room_name"]} 
                                room_media = {val["room_media"]}
                            />
                        )
                    })
                }
                
               
              </Col>
            </Row>          
            }
          </Container>
        </section>
      </>
    );

}

const Room = ({
    room_name,
    room_capacity,
    features,
    room_media
}) => {

    let images = [];

    let profileImage = "https://images.squarespace-cdn.com/content/v1/540f5515e4b06c4e8629c108/1600932097980-NHBGP5WD2F7YIK8ZFHRA/conference-room-boardroom-business-setup.jpg?format=2500w";

    if(room_media.length>0){

        room_media.forEach((image)=>{
            images.push(image["image"]);
        });
    }
    else{
        images.push(profileImage);
    }

    return (
        <Card style={{marginTop:"15px",marginBottom:"15px"}} className="card-profile shadow">
                    <div className="px-4 pt-4 pb-4">
                        <Row>
                            <Col  md={4} lg={4} sm={12} xs={12}>
                                <div>
                                    <SlideShow images={images}  height={250} width={300} />
                                </div>
                            </Col>
                            <Col md={8} lg={8} sm={12} xs={12}>
                                <h6 style={{paddingTop:"10px"}}><span style={{fontWeight:"bold",}}>{room_name}</span> Room</h6>
                                <h6>Available for all <span style={{fontWeight:"bold"}}>low and medium</span> priority meetings</h6>
                                <p>
                                    <i className="fa fa-users" style={{paddingRight:"5px"}}></i> 
                                    <span style={{fontWeight:"bold"}}>{room_capacity}</span>  
                                    <span style={{fontSize:"12px",fontWeight:"bold"}}> Capacity</span>
                                </p>
                                <p style={{fontWeight:"bold"}}>Features</p>
                                <Row>
                                    {
                                       features.map((val,index)=>{
                                           console.log("Feature "+index+" =  ",val);
                                            return (
                                                <Col lg={3} xs={12} md={6} sm={12} key={"feature"+index}>
                                                    <p>
                                                        <i className="fa fa-hand-o-right" style={{paddingRight:"10px"}}></i> 
                                                        <span style={{fontWeight:"bold",paddingRight:"3px"}}>{val["no_of_items"]}</span>  
                                                        <span style={{fontSize:"12px"}}> {val["feature_name"]} </span>
                                                    </p>
                                                </Col>
                                            );
                                        })
                                    }
                                </Row>
                                <Col>
                                    <Row>
                                        <Link style={{paddingRight:"10px"}} to="/view-room">
                                            <Button color="primary" type="button">
                                                Book Now
                                            </Button>
                                        </Link>
                                    </Row>
                                </Col>
                            </Col>

                            
                        </Row>
                        
                        
                
                </div>
              </Card>
    )
}

export default Rooms;