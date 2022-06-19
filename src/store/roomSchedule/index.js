import { createSlice } from "@reduxjs/toolkit";
import fetchRoomSchedule from "./fetchRoomSchedule";

const initState = {
    loading : false,
    errMessage : null,

    roomReservationData : [],
    roomDownTimeData : [],
}

const roomSchedule = createSlice({

    name : "roomSchedule",
    initialState : initState,

    reducers : {
        fetchingRoomSchedule(state,action){
            state.loading = false;
            state.errMessage = null;
            state.roomReservationData = [];
            state.roomDownTimeData = [];
        },

        fetchingRoomScheduleSuccess(state,action){
            state.loading = false;
            state.errMessage = null;
            state.roomReservationData = action.payload["reserved"];
            state.roomDownTimeData = action.payload["downtime"];
        },

        fetchingRoomScheduleFailure(state,action){
            state.loading = false;
            state.errMessage = action.payload;
            state.roomReservationData = [];
            state.roomDownTimeData = [];
        }
    }

});


export {fetchRoomSchedule};

export const {fetchingRoomSchedule,fetchingRoomScheduleFailure,fetchingRoomScheduleSuccess} = roomSchedule.actions;

export default roomSchedule.reducer;