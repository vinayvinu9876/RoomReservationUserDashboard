import React from "react";
import DemoNavbar from "components/Navbars/DemoNavbar";
import SimpleFooter from "components/Footers/SimpleFooter";
import ViewRoomHero from "./viewRoomHero";
import RoomDescription from "./RoomDescription";
import SlideShow from "./SlideShow";
import { Row,Col,Card, Button, CardBody } from "reactstrap";
import RoomCustomDesc from "./RoomCustomDesc";
import ReserveRoomForm from "./ReserveRoomForm";
import  RoomSchedule from './RoomSchedule';

const ViewRoom = () =>{

    const slideImages = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80", 
    ];

    return (
        <>
            <DemoNavbar />
            <main>
                <ViewRoomHero />
                <div style={{padding:"40px"}}>
                    <Row>
                        <Col md={4} lg={4} sm={12} xs={12}>
                            <SlideShow images={slideImages}  height={"400px"} width={"100%"}/>
                        </Col>
                        <Col md={8} lg={8} sm={12} xs={12} >
                            <RoomDescription />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={12} lg={12} sm={12} xs={12}>
                            <RoomCustomDesc />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={12} lg={12} sm={12} xs={12}>
                            <RoomSchedule />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={12} lg={12} sm={12} xs={12}>
                            <ReserveRoomForm />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Col>
                                <Card className="card-profile shadow">
                                    <CardBody> 
                                        <Button color="danger"> Cancel</Button>
                                        <Button color="primary"> Submit </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Col>
                    </Row>
                </div>
            </main>
            <div height={"50px"} width={"100%"}></div>
            <SimpleFooter />
        </>
    )
    
}

export default ViewRoom;