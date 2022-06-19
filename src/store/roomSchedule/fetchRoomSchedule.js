import axios from "axios";
import buildUrl from "store/util/buildUrl";
import { fetchingRoomScheduleFailure ,fetchingRoomSchedule,fetchingRoomScheduleSuccess } from ".";

const fetchRoomSchedule = (room_id,date) =>{

    return (dispatch,getState)=>{

        dispatch(fetchingRoomSchedule());

        const url = buildUrl(`room/roomschedule/${room_id}/${date}`);

        axios.post(url).then((res)=>{   

            if(res.status===200){
                if(res.data["status"]==="success"){
                    dispatch(fetchingRoomScheduleSuccess(res.data["data"]));
                    console.log("Schedule data = ",res.data["data"]);
                }
                else{
                    dispatch(fetchingRoomScheduleFailure(res.data["message"]));
                }
            }
            else{
                dispatch(fetchingRoomScheduleFailure("Failed to fetch room schedule"));
            }

        }).catch((err)=>{
            console.error(err);
            dispatch(fetchingRoomScheduleFailure(err.message));
        })

    }

}

export default fetchRoomSchedule;