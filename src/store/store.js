import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from './rooms/index';
import roomReservationReducer from './roomReservation';
import priorityReducer from './priority';
import viewRoomReducer from './viewRoom';
import roomScheduleReducer from './roomSchedule';

export default configureStore({
    reducer:{
        "rooms" : roomsReducer,
        "roomReservation" : roomReservationReducer,
        "priority" : priorityReducer,
        "viewRoom" : viewRoomReducer,
        "roomSchedule" : roomScheduleReducer
    }
});