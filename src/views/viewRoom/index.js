import React, {useEffect, useState} from "react";
import DemoNavbar from "components/Navbars/DemoNavbar";
import SimpleFooter from "components/Footers/SimpleFooter";
import ViewRoomHero from "./viewRoomHero";
import RoomDescription from "./RoomDescription";
import SlideShow from "./SlideShow";
import { Row,Col,Card, Button, CardBody } from "reactstrap";
import RoomCustomDesc from "./RoomCustomDesc";
import ReserveRoomForm from "./ReserveRoomForm";
import  RoomSchedule from './RoomSchedule';
import { useDispatch, useSelector } from "react-redux";
import { fetchRoom } from "store/viewRoom";

const ViewRoom = () =>{

    const dispatch = useDispatch();

    const [room_id,setRoomId] = useState(null);

    const loading = useSelector(state=>state.viewRoom.loading);
    const errMessage = useSelector(state=>state.viewRoom.errMessage);
    const roomData = useSelector(state=>state.viewRoom.room_data);

    console.log("room DAta = ",roomData);

    useEffect(()=>{
        //console.log("url = ",window.location.href);
        const queryString = window.location.search.toString();
        //console.log("Query string = ",queryString);
        const urlParams = new URLSearchParams(queryString);
        let roomID = urlParams.get('room_id');
        //setRoomId(roomID);
        console.log("room id = ",roomID);

        if(roomID===null){
            return;
        }
        setRoomId(roomID);
        dispatch(fetchRoom(roomID));
    },[]);
    

    return (
        <>
            <DemoNavbar />
            <main>
                <ViewRoomHero loading={loading} errMessage={errMessage} roomName={roomData?roomData["room_data"]["room_name"]:null}/>
                {
                    (!loading) && (!errMessage) && (roomData) &&
                    <div style={{padding:"40px"}}>
                        <Row>
                            <Col md={4} lg={4} sm={12} xs={12}>
                                <SlideShow images={roomData["room_media"]}  height={"400px"} width={"100%"}/>
                            </Col>
                            <Col md={8} lg={8} sm={12} xs={12} >
                                <RoomDescription room_data={roomData["room_data"]} room_down_time={roomData["room_down_time"]} room_features={roomData["room_features"]} />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col md={12} lg={12} sm={12} xs={12}>
                                <RoomCustomDesc description={roomData["room_data"]["room_desc"]}/>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col md={12} lg={12} sm={12} xs={12}>
                                <RoomSchedule room_id={room_id}/>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col md={12} lg={12} sm={12} xs={12}>
                                <ReserveRoomForm room_id={room_id}/>
                            </Col>
                        </Row>
                        <br />
                        
                    </div>
                }
            </main>
            <div height={"50px"} width={"100%"}></div>
            <SimpleFooter />
        </>
    )
    
}

export default ViewRoom;