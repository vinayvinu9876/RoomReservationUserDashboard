import React from 'react';
import {
    Col,
    Card,
    CardBody,
    CardHeader,
    FormGroup,
    Input,
    Row,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle
} from 'reactstrap';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

const ReserveRoomForm = () => {
    return (
        <>
            <Col md={12} lg={12} sm={12} xs={12} >
                <Card className="card-profile shadow" >
                    <CardHeader>
                        Reservation Details
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col lg={12} sm={12} md={12} xs={12}>
                                <label>Why you want the room ? Please mention any additional requirements for the meeting</label>
                                <ReactQuill />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col lg="4" sm="6">
                                <FormGroup>
                                    <label>Start Time</label>
                                    <Input placeholder="Start Time" type="datetime-local" />
                                </FormGroup>
                            </Col>
                            <Col lg="4" sm="6">
                                <FormGroup>
                                    <label>End Time</label>
                                    <Input placeholder="End Time" type="datetime-local" />
                                </FormGroup>
                            </Col>
                            
                            <Col lg="4" sm="6">
                                <FormGroup>
                                    <label>Priority</label><br />
                                    <UncontrolledDropdown group>
                                        <DropdownToggle caret color="primary">
                                            Primary
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                Action
                                            </DropdownItem>
                                            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                Another action
                                            </DropdownItem>
                                            <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                Something else here
                                            </DropdownItem>
                                            <DropdownItem divider />
                                                <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                Separated link
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </FormGroup>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            
                            <Col lg="8" sm="12">
                                <FormGroup>
                                    <label>Attendees Email (comma seperated)</label>
                                    <Input type="textarea" cols={15} rows={5}/>
                                </FormGroup>
                            </Col>
                            <Col lg="4" sm="12">
                                <FormGroup>
                                    <label>No of Attendees</label>
                                    <Input placeholder="No. of Attendees" type="number" />
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </>
    );

}

export default ReserveRoomForm;