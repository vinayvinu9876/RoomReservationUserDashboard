import React from 'react';
import { Col,Row,Card } from 'reactstrap';

const RoomDescription = ( { room_data, room_features , room_down_time } ) => {

    return (
        <>
        <Col md={12} lg={12} sm={12} xs={12} >
            <Card className="card-profile shadow" style={{padding:"20px"}}>
                <h6><span style={{fontWeight:"bold"}}>{room_data["room_name"]}</span> Room</h6>
                <h6 style={{fontSize:"14px"}}>Please select appropraite priority while reserving the room</h6>
          
                <p style={{paddingTop:"5px"}}>
                    <i className="fa fa-users" style={{paddingRight:"5px",fontSize:"20px"}}></i> 
                    <span style={{fontWeight:"bold"}}>{room_data["room_capacity"]}</span>  
                    <span style={{fontSize:"12px",fontWeight:"bold"}}> Room Capacity</span>
                </p>

                <h6 style={{fontWeight:"bold",fontSize:"14px"}}>Features</h6>
                <Row>
                    {
                        room_features.map((feature,index)=>{
                            return(
                                <Col key={"feature"+index} lg={2} xs={12} md={6} sm={12} >
                                    <p>
                                        <i className="fa fa-hand-o-right" style={{paddingRight:"10px"}}></i> 
                                        <span style={{fontWeight:"bold",paddingRight:"3px"}}>{feature["no_of_items"]}</span>  
                                        <span style={{fontSize:"12px"}}> {feature["feature_name"]}</span>
                                    </p>
                                </Col>
                            );
                        })
                    }
                        
                </Row>

                <h6 style={{fontWeight:"bold",fontSize:"14px"}}>Room Down Time</h6>
                <Col>
                    {
                        room_down_time.map((downTime,index)=>{
                            return (
                                <div key={"downtime"+index}>
                                    <span style={{marginTop:"5px",marginBottom:"5px"}} >
                                        <i className="fa fa-clock-o"></i> 
                                        <span style={{fontSize:"12px",marginLeft:"5px",fontWeight:"bold",textTransform:"capitalize"}}>{downTime["day"]}</span> 
                                        <span style={{fontSize:"12px",marginLeft:"5px",fontWeight:"bold"}}>{downTime["start"]}</span> 
                                        <span style={{fontSize:"12px",marginLeft:"5px",fontWeight:"bold"}}>{downTime["end"]}</span> 
                                        <span style={{fontSize:"12px",fontWeight:"bold"}}> - {downTime["desc"]}</span>
                                    </span>
                                    <br />
                                </div>
                            )
                        })
                    }
                   
                   
                        
                </Col>
                <br />
                <h6 style={{fontWeight:"bold",fontSize:"14px"}}>Notes</h6>
                
                <Col>
                    <span style={{marginTop:"5px",marginBottom:"5px"}}>
                        <i className="fa fa-hand-o-right" style={{marginRight:"10px"}}></i>  
                        <span style={{fontSize:"12px",fontWeight:"bold"}}>Eateries are not allowed</span>
                    </span>
                    <br />
                    <span style={{marginTop:"5px",marginBottom:"5px"}}>
                        <i className="fa fa-hand-o-right" style={{marginRight:"10px"}}></i>  
                        <span style={{fontSize:"12px",fontWeight:"bold"}}>Please inform any issues as early as possible</span>
                    </span>
                    <br />    
                </Col>
            </Card>
        </Col>
     </>
    )

}

export default RoomDescription;