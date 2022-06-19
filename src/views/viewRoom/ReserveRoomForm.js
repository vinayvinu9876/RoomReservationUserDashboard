import React, { useState } from 'react';
import {
    Col,
    Card,
    CardBody,
    CardHeader,
    FormGroup,
    Input,
    Row,
    Button
} from 'reactstrap';
import { useDispatch,useSelector } from 'react-redux';
import addRoomReservation from "store/roomReservation";
import { AtomSpinner } from "react-epic-spinners";
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import PrioirtySelector from './PrioritySelector';

const ReserveRoomForm = ({room_id}) => {

    const [selectedPriority,setPriority] = useState(null);
    const [description,setDescription]   = useState('');
    const [date,setDate]                 = useState(new Date());
    const [startTime,setStartTime]       = useState('');
    const [endTime,setEndTime]           = useState('');
    const [attendeesEmail,setAttendeesEmail] = useState("");
    const [noOfAttendees,setNoOfAttendees] = useState(0);
    const [reservedByEmail,setReservedByEmail] = useState('');

    const dispatch = useDispatch();

    const loading = useSelector(state=>state.roomReservation.loading);
    const errMessage = useSelector(state=>state.roomReservation.errMessage);
    const success = useSelector(state=>state.roomReservation.success);

    return (
        <>
            <Col md={12} lg={12} sm={12} xs={12} >
                <Card className="card-profile shadow" >
                    <CardHeader>
                        Reservation Details
                    </CardHeader>
                    <CardBody>
                        {
                            loading &&
                            <center><AtomSpinner color={"blue"}  /></center>
                        }
                        {
                            (!loading) && (errMessage) &&
                            <p style={{color:"red",fontWeight:"bold"}}>{errMessage}</p>
                        }
                        {
                            (!loading) && (success) &&
                            <p style={{color:"green",fontWeight:"bold"}}>Reservation added succesfully</p>
                        }
                        {
                        (!loading) && (!errMessage) &&
                        <>
                        <Row>
                            <Col lg={12} sm={12} md={12} xs={12}>
                                <label>Why you want the room ? Please mention any additional requirements for the meeting</label>
                                <ReactQuill value={description} onChange={(val)=>{setDescription(val)}}/>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col lg="3" sm="6">
                                <FormGroup>
                                    <label>Date</label>
                                    <Input placeholder="Date" type="date" value={date} onChange={(evt)=>{setDate(evt.target.value)}}/>
                                </FormGroup>
                            </Col>
                            <Col lg="3" sm="6">
                                <FormGroup>
                                    <label>Start Time</label>
                                    <Input placeholder="Start Time" type="time" value={startTime} onChange={(evt)=>{setStartTime(evt.target.value)}} />
                                </FormGroup>
                            </Col>
                            <Col lg="3" sm="6">
                                <FormGroup>
                                    <label>End Time</label>
                                    <Input placeholder="End Time" type="time" value={endTime} onChange={(evt)=>{setEndTime(evt.target.value)}} />
                                </FormGroup>
                            </Col>
                            <Col lg="3" sm="6">
                                <FormGroup>
                                    <label>Priority</label><br />
                                    <PrioirtySelector selected={selectedPriority} onChange={setPriority} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            
                            <Col lg="8" sm="12">
                                <FormGroup>
                                    <label>Attendees Email (comma seperated)</label>
                                    <Input type="textarea" cols={15} rows={5} value={attendeesEmail} onChange={(evt)=>{setAttendeesEmail(evt.target.value)}}/>
                                </FormGroup>
                            </Col>
                            <Col lg="4" sm="12">
                                <FormGroup>
                                    <label>No of Attendees</label>
                                    <Input placeholder="No. of Attendees" type="number" value={noOfAttendees} onChange={(evt)=>{setNoOfAttendees(evt.target.value)}}/>
                                </FormGroup>
                                <FormGroup>
                                    <label>Reserved By Email</label>
                                    <Input placeholder="Email" type="email" value={reservedByEmail} onChange={(evt)=>{setReservedByEmail(evt.target.value)}}/>
                                </FormGroup>
                            </Col>
                        </Row>
                    </>
                    }
                    </CardBody>
                </Card>
            </Col>
            <br />
            <Row>
                <Col>
                    <Col>
                       <Card className="card-profile shadow">
                            <CardBody> 
                                <Button color="danger"> Cancel</Button>
                                <Button onClick={()=>{
                                    dispatch(
                                        addRoomReservation({
                                            room_id,
                                            description,
                                            date,
                                            startTime,
                                            endTime,
                                            priority : selectedPriority,
                                            attendeesEmail,
                                            noOfAttendees,
                                            reservedByEmail
                                        }
                                     )
                                    );
                                }} color="primary"> Submit </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Col>
            </Row>
        </>
    );

}

export default ReserveRoomForm;