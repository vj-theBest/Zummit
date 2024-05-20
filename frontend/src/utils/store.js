import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import bookingSlice from "./bookingSlice";

const rootReducer = combineReducers({user: userSlice, booking: bookingSlice})

const appStore = configureStore({
    reducer: rootReducer
})

export default appStore;