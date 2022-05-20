import axios from 'axios';
import buildUrl from 'store/util/buildUrl';
import { fetchingRoomsData, fetchingRoomsDataSuccess, fetchingRoomsDataFailure  } from '.';

const fetchRooms = () => {

    return (dispatch,getState) => {

        dispatch(fetchingRoomsData());

        const url = buildUrl("room/read");

        return axios.post(url).then((res)=>{
            if(res.status===200){
                console.log("Result = ",res.data);
                if(res.data["status"]==="success"){
                    dispatch(fetchingRoomsDataSuccess(res.data["data"]));
                    console.log("Room data = ",res.data["data"]);
                }
                else{
                    dispatch(fetchingRoomsDataFailure(res.data["message"]));
                }
            }
            else{
                dispatch(fetchingRoomsDataFailure("Failed to fetch rooms"+res.statusText));
            }
        }).catch((err)=>{
            console.error(err);
            dispatch(fetchingRoomsDataFailure(err.message));
        })

    }

}

export default fetchRooms;