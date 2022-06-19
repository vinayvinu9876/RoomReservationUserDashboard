import { createSlice } from "@reduxjs/toolkit";
import fetchRoom from "./fetchRoom";

const initState = {
    loading : false,
    errMessage : null,
    room_data : null,
};

const viewRoomSlice = createSlice({

    name : "viewRoom",
    initialState : initState,
    reducers : {
        fetchingRoomData(state,action){
            state.loading = true;
            state.errMessage = null;
            state.room_data = null;
        },

        fetchingRoomDataSuccess(state,action){
            state.loading  = false;
            state.errMessage = null;
            state.room_data = action.payload;
        },

        fetchingRoomDataFailure(state,action){
            state.loading  = false;
            state.errMessage = action.payload;
            state.room_data = null;
        }
    }
});

export {fetchRoom};

export const {fetchingRoomData,fetchingRoomDataFailure,fetchingRoomDataSuccess} = viewRoomSlice.actions;

export default viewRoomSlice.reducer;