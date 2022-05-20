import { createSlice } from "@reduxjs/toolkit";
import fetchRooms from "./fetchRooms";

const initialState = {
    loading : false,
    errMessage : null,
    rooms_data : []
};

export const roomSlice = createSlice({
    name : "rooms",
    initialState : initialState,
    reducers : {
        fetchingRoomsData(state,action){
            state.loading = true;
            state.errMessage = null;
        },

        fetchingRoomsDataSuccess(state,action){
            state.loading = false;
            state.errMessage = null;
            state.rooms_data = action.payload;
        },

        fetchingRoomsDataFailure(state,action){
            state.loading = false;
            state.rooms_data = [];
            state.errMessage = action.payload;
        }
    }
});


export {fetchRooms};

export const {fetchingRoomsData,fetchingRoomsDataFailure,fetchingRoomsDataSuccess} = roomSlice.actions;

export default roomSlice.reducer;