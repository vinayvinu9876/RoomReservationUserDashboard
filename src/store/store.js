import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from './rooms/index';

export default configureStore({
    reducer:{
        "rooms" : roomsReducer
    }
});