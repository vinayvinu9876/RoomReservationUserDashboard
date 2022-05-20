import React from "react";
import {Row,Col,Card, FormGroup,Input,CardHeader, CardBody } from "reactstrap";
import { Chart } from "react-google-charts";

const RoomSchedule = () => {

    const data = [
        [
          { type: "string", id: "Room" },
          { type: "string", id: "Name" },
          { type: "date", id: "Start" },
          { type: "date", id: "End" },
        ],
        [
          "Magnolia Room",
          "Beginning JavaScript",
          new Date(0, 0, 0, 12, 0, 0),
          new Date(0, 0, 0, 13, 30, 0),
        ],
        [
          "Magnolia Room",
          "Intermediate JavaScript",
          new Date(0, 0, 0, 14, 0, 0),
          new Date(0, 0, 0, 15, 30, 0),
        ],
        [
          "Magnolia Room",
          "Advanced JavaScript",
          new Date(0, 0, 0, 16, 0, 0),
          new Date(0, 0, 0, 17, 30, 0),
        ],
    ];

    return (
        <>
            <Col md={12} lg={12} sm={12} xs={12} >
                <Card className="card-profile shadow" >
                    <CardHeader>
                        Room Schedule
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col lg={2} md={3} sm="12">
                                <FormGroup>
                                    <label>Date</label>
                                    <Input placeholder="Date" type="date" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <br />
                        <Chart
                            chartType="Timeline" width="100%" height="100px" data={data}
                        />
                    </CardBody>
                </Card>
            </Col>
        </>
    )

}

export default RoomSchedule;