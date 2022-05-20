import React from 'react';
import { Col,Row,Card } from 'reactstrap';

const RoomDescription = ( ) => {

    return (
        <>
        <Col md={12} lg={12} sm={12} xs={12} >
            <Card className="card-profile shadow" style={{padding:"20px"}}>
                <h6><span style={{fontWeight:"bold"}}>A35</span> Room</h6>
                <h6 style={{fontSize:"14px"}}>Available for all <span style={{fontWeight:"bold"}}>low and medium</span> priority meetings</h6>
          
                <p style={{paddingTop:"5px"}}>
                    <i className="fa fa-users" style={{paddingRight:"5px",fontSize:"20px"}}></i> 
                    <span style={{fontWeight:"bold"}}>12</span>  
                    <span style={{fontSize:"12px",fontWeight:"bold"}}> Room Capacity</span>
                </p>

                <h6 style={{fontWeight:"bold",fontSize:"14px"}}>Features</h6>
                <Row>
                    <Col lg={2} xs={12} md={6} sm={12} >
                        <p>
                            <i className="fa fa-hand-o-right" style={{paddingRight:"10px"}}></i> 
                            <span style={{fontWeight:"bold",paddingRight:"3px"}}>1</span>  
                            <span style={{fontSize:"12px"}}> Android TV</span>
                        </p>
                    </Col>
                    <Col lg={2} xs={12} md={6} sm={12}>
                        <p>
                            <i className="fa fa-hand-o-right" style={{paddingRight:"10px"}}></i> 
                            <span style={{fontWeight:"bold",paddingRight:"3px"}}>1</span>  
                            <span style={{fontSize:"12px"}}> Projector</span>
                        </p>
                    </Col>
                        
                    <Col lg={2} xs={12} md={6} sm={12}>
                        <p>
                            <i className="fa fa-hand-o-right" style={{paddingRight:"10px"}}></i> 
                            <span style={{fontWeight:"bold",paddingRight:"3px"}}>2</span>  
                            <span style={{fontSize:"12px"}}>Plugin Points</span>
                        </p>
                    </Col>

                    <Col lg={2} xs={12} md={6} sm={12}>
                        <p>
                            <i className="fa fa-hand-o-right" style={{paddingRight:"10px"}}></i> 
                            <span style={{fontWeight:"bold",paddingRight:"3px"}}>4</span>  
                            <span style={{fontSize:"12px"}}> Ethernet Ports</span>
                        </p>
                    </Col>
                        
                    <Col lg={2} xs={12} md={6} sm={12}>
                        <p>
                            <i className="fa fa-hand-o-right" style={{paddingRight:"10px"}}></i> 
                            <span style={{fontWeight:"bold",paddingRight:"3px"}}>4</span>  
                            <span style={{fontSize:"12px"}}> Ethernet Ports</span>
                        </p>
                    </Col>

                    <Col lg={2} xs={12} md={6} sm={12}>
                        <p>
                            <i className="fa fa-hand-o-right" style={{paddingRight:"10px"}}></i> 
                            <span style={{fontWeight:"bold",paddingRight:"3px"}}>4</span>  
                            <span style={{fontSize:"12px"}}> Ethernet Ports</span>
                        </p>
                    </Col>
                        
                </Row>

                <h6 style={{fontWeight:"bold",fontSize:"14px"}}>Room Down Time</h6>
                <Col>
                    <span style={{marginTop:"5px",marginBottom:"5px"}}>
                        <i className="fa fa-clock-o"></i> 
                        <span style={{fontSize:"12px",marginLeft:"5px",fontWeight:"bold"}}>Mon</span> 
                        <span style={{fontSize:"12px",marginLeft:"5px",fontWeight:"bold"}}>9:00 AM to</span> 
                        <span style={{fontSize:"12px",marginLeft:"5px",fontWeight:"bold"}}>10:00 AM</span> 
                        <span style={{fontSize:"12px",fontWeight:"bold"}}> - Cleaning</span>
                    </span>
                    <br />
                    <span style={{marginTop:"5px",marginBottom:"5px"}}>
                        <i className="fa fa-clock-o"></i> 
                        <span style={{fontSize:"12px",marginLeft:"5px",fontWeight:"bold"}}>Tue</span> 
                        <span style={{fontSize:"12px",marginLeft:"5px",fontWeight:"bold"}}>1:00 PM to</span> 
                        <span style={{fontSize:"12px",marginLeft:"5px",fontWeight:"bold"}}>2:00 PM</span> 
                        <span style={{fontSize:"12px",fontWeight:"bold"}}> - Routine Checkup</span>
                    </span>
                    <br />
                    <span style={{marginTop:"5px",marginBottom:"5px"}}>
                        <i className="fa fa-clock-o"></i> 
                        <span style={{fontSize:"12px",marginLeft:"5px",fontWeight:"bold"}}>Wed</span> 
                        <span style={{fontSize:"12px",marginLeft:"5px",fontWeight:"bold"}}>1:00 PM to</span> 
                        <span style={{fontSize:"12px",marginLeft:"5px",fontWeight:"bold"}}>2:00 PM</span> 
                        <span style={{fontSize:"12px",fontWeight:"bold"}}> - Routine Checkup</span>
                    </span>
                        
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
                        <span style={{fontSize:"12px",fontWeight:"bold"}}>Please don't switch off the AC</span>
                    </span>
                    <br />    
                </Col>
            </Card>
        </Col>
     </>
    )

}

export default RoomDescription;