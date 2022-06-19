import React from "react";
import {Col,Card, CardBody, CardHeader} from 'reactstrap';

const RoomCustomDesc = ({description}) => {
    

    return (
        <>
            <Col md={12} lg={12} sm={12} xs={12} >
                <Card className="card-profile shadow" >
                    <CardHeader>
                        Room Description
                    </CardHeader>
                    <CardBody dangerouslySetInnerHTML={{__html: description}}></CardBody>
                </Card>
            </Col>
        </>
    )

}

export default RoomCustomDesc;