import React, { useEffect, useState } from "react";
import {Row,Col,Card, FormGroup,Input,CardHeader, CardBody } from "reactstrap";
import { Chart } from "react-google-charts";
import {useDispatch,useSelector} from 'react-redux';
import { fetchRoomSchedule } from "store/roomSchedule";

function capitalizeFirstLetter(string) {
    if(!string){
        return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getDateString(date){
    let month = date.getMonth()+1;
    const dateString = date.getFullYear() + "-" + ((month)<10?("0"+(month)) : month ) + "-" + (date.getDate());
    return dateString;
}

const RoomSchedule = ({room_id}) => {

    const dispatch = useDispatch();

    const reservedData = useSelector(state=>state.roomSchedule.roomReservationData);
    const downTimeData = useSelector(state=>state.roomSchedule.roomDownTimeData);

    useEffect(()=>{
        const today = getDateString(new Date());
        console.log("Room id = ",room_id," Today = ",today);
        dispatch(fetchRoomSchedule(room_id,today));
    },[]);
    
    let data = [
        [
          { type: "string", id: "Day" },
          { type: "string", id: "Description" },
          { type: "date", id: "Start" },
          { type: "date", id: "End" },
        ],
        /*
        Example
        [
          "Monday",
          "Beginning JavaScript",
          new Date(0, 0, 0, 12, 0, 0),
          new Date(0, 0, 0, 13, 30, 0),
        ],
        */
    ];


    for(let i=0;i<downTimeData.length;i++){
        let {desc,start,end,day} = downTimeData[i];

        let insertable = [
            capitalizeFirstLetter(day),
            capitalizeFirstLetter(desc),
            new Date(0,0,0,start.split(":")[0],start.split(":")[1],start.split(":")[2]),
            new Date(0,0,0,end.split(":")[0],end.split(":")[1],end.split(":")[2])
        ];

        data.push(insertable);
    }

    for(let i=0;i<reservedData.length;i++){
        let {reservation_description,start_timestamp,end_timestamp} = reservedData[i];

        start_timestamp = new Date(start_timestamp);
        end_timestamp = new Date(end_timestamp);

        let dayName = start_timestamp.toLocaleDateString("us", { weekday: 'short' });

        let insertable = [
            dayName,
            reservation_description,
            new Date(0,0,0,start_timestamp.getHours(),start_timestamp.getMinutes(),start_timestamp.getSeconds()),
            new Date(0,0,0,end_timestamp.getHours(),end_timestamp.getMinutes(),end_timestamp.getSeconds()),
        ];
        
        data.push(insertable);
    }


    console.log("Chart data = ",data);
    

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
                                    <Input placeholder="Date" 
                                            type="date" 
                                            onChange={(evt)=>{

                                                const todayString = getDateString(new Date(evt.target.value));

                                                console.log("DAte string = ",todayString);

                                                dispatch(fetchRoomSchedule(room_id, todayString ) );
                                            }} 
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <br />
                        <Chart
                            chartType="Timeline" 
                            width="100%" 
                            height="100px" 
                            data={data}
                        />
                    </CardBody>
                </Card>
            </Col>
        </>
    )

}

export default RoomSchedule;