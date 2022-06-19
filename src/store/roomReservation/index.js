import { createSlice } from "@reduxjs/toolkit";
import addRoomReservation from "./addRoomReservation";

const initialState = {
    loading : false,
    errMessage : null,
    success : false
};

const roomReservationSlice = createSlice({
    name : "roomReservation",
    initialState : initialState,
    reducers : {
        addingRoomReservation(state,action){
            state.loading = true;
            state.errMessage = null;
            state.success = false;
        },

        addingRoomReservationSuccess(state,action){
            state.loading = false;
            state.errMessage = null;
            state.success = true;
        },

        addingRoomReservationFailure(state,action){
            state.loading = false;
            state.success = false;
            state.errMessage = action.payload;
        },
    }
});

export {addRoomReservation};

export const {addingRoomReservation,addingRoomReservationFailure,addingRoomReservationSuccess} = roomReservationSlice.actions;

export default roomReservationSlice.reducer;


