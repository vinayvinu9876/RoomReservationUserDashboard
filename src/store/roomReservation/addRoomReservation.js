import axios from "axios";
import buildUrl from "store/util/buildUrl";
import { addingRoomReservation, addingRoomReservationFailure, addingRoomReservationSuccess } from ".";

const addRoomReservation = ({room_id,description,date,startTime,endTime,priority,attendeesEmail,noOfAttendees,reservedByEmail} = {}) =>{

    return (dispatch,getState) => {

        console.log("add reservation. room id = ",room_id);

        if(!room_id){
            dispatch(addingRoomReservationFailure("Please add room id"));
            return;
        }

        if(!description){
            dispatch(addingRoomReservationFailure("Please add description"));
            return;
        }

        if(!date){
            dispatch(addingRoomReservationFailure("Please add date"));
            return;
        }

        if(!startTime){
            dispatch(addingRoomReservationFailure("Please add start time"));
            return;
        }

        if(!endTime){
            dispatch(addingRoomReservationFailure("Please add end time"));
            return;
        }

        if(!priority){
            dispatch(addingRoomReservationFailure("Please add priority"));
            return;
        }

        if(!attendeesEmail){
            dispatch(addingRoomReservationFailure("Please add attendees email"));
            return;
        }

        if(!noOfAttendees){
            dispatch(addingRoomReservationFailure("Please add no. of attendees"));
            return;
        }

        if(!reservedByEmail){
            dispatch(addingRoomReservationFailure("Please add reserved by email"));
            return;
        }

        let meetingDate = new Date(date);

        meetingDate.setHours(startTime.split(":")[0],startTime.split(":")[1]);
        startTime = (meetingDate.getTime()/1000);

        meetingDate.setHours(endTime.split(":")[0],endTime.split(":")[1]);
        endTime = (meetingDate.getTime()/1000);
        
        const payload = {
            room_id,
            reservation_description : description,
            start_timestamp         : startTime,
            end_timestamp           : endTime,
            priority_id             : priority,
            attendees_email         : attendeesEmail,
            no_of_attendees         : noOfAttendees,
            reserved_by_email       : reservedByEmail
        };

        console.log('payload = ',payload);

        dispatch(addingRoomReservation());

        const url = buildUrl("rooms/reserve");

        return axios.post(url,payload).then((res)=>{
            if(res.status===200){
                if(res.data["status"]==="success"){
                    dispatch(addingRoomReservationSuccess());
                }
                else{
                    dispatch(addingRoomReservationFailure(res.data["message"]));
                }
            }
            else{
                dispatch(addingRoomReservationFailure("Failed to reserve room"));
            }
            
        }).catch((err)=>{
            console.error(err);
            dispatch(addingRoomReservationFailure(err.message));
        })
    

    }

}

export default addRoomReservation;