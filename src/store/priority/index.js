import { createSlice } from "@reduxjs/toolkit";
import fetchPriority from "./fetchPriority";

const initState = {
    loading : false,
    errMessage : null,
    priorityData : [],
}

const prioritySlice = createSlice({

    name : "priority",
    initialState : initState,

    reducers : {

        fetchingPriority(state,action){
            state.loading = false;
            state.errMessage = null;
            state.priorityData = [];
        },

        fetchingPrioritySuccess(state,action){
            state.loading = false;
            state.errMessage = null;
            state.priorityData = action.payload;
        },

        fetchingPriorityFailure(state,action){
            state.loading = false;
            state.errMessage = action.payload;
            state.priorityData = [];
        }

    }

});

export {fetchPriority};

export const {fetchingPriority,fetchingPrioritySuccess,fetchingPriorityFailure} = prioritySlice.actions;

export default prioritySlice.reducer;