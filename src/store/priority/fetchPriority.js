import axios from 'axios';
import buildUrl from 'store/util/buildUrl';
import { fetchingPriority, fetchingPrioritySuccess, fetchingPriorityFailure } from '.';

const fetchPriority = () =>{

    return (dispatch,getState) => {
        dispatch(fetchingPriority());

        const url = buildUrl("priority/read");

        axios(url).then((res)=>{
            if(res.status===200){

                console.log("Result = ",res.data);

                if(res.data["status"]==="success"){
                    dispatch(fetchingPrioritySuccess(res.data["data"]));
                }
                else{
                    dispatch(fetchingPriorityFailure("Failed to fetch Priority"));
                }
                
            }
            else{
                dispatch(fetchingPriorityFailure("Failed to fetch priority "+res.statusText));
            }
        }).catch((err)=>{
            console.error(err);
            dispatch(fetchingPriorityFailure(err.message));
        })

    }

}

export default fetchPriority;