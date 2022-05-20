import React from "react";
import {Col,Card, CardBody, CardHeader} from 'reactstrap';

const RoomCustomDesc = () => {

    return (
        <>
            <Col md={12} lg={12} sm={12} xs={12} >
                <Card className="card-profile shadow" >
                    <CardHeader>
                        Room Description
                    </CardHeader>
                    <CardBody>
                        <h1>Hello world!!! a</h1>
                        <p>hi, how are you ?</p>
                        <p>okay. it works.</p>
                    </CardBody>
                </Card>
            </Col>
        </>
    )

}

export default RoomCustomDesc;