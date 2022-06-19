import axios from "axios";
import buildUrl from "store/util/buildUrl";
import { fetchingRoomData, fetchingRoomDataFailure, fetchingRoomDataSuccess } from ".";

const fetchRoom = (room_id) => {

    return (dispatch,getState) =>{

        dispatch(fetchingRoomData());

        const url = buildUrl(`room/read/${room_id}`);

        return axios.post(url).then((res)=>{

            if(res.status===200){
                if(res.data["status"]==="success"){
                    dispatch(fetchingRoomDataSuccess(res.data["data"]));
                }
                else{
                    dispatch(fetchingRoomDataFailure(res.data["message"]));
                }
            }
            else{
                dispatch(fetchingRoomDataFailure("Failed to fetch room data "+res.statusText));
            }
        }).catch((err)=>{
            console.error(err);
            dispatch(fetchingRoomDataFailure(err.message));
        })
    }
}

export default fetchRoom;