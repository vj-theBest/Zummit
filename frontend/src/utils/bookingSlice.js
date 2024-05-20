import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
    name:"booking",
    initialState: {
        selected_councellor: null,
    },
    reducers: {
        add_councellor: (state, action) => {
            state.selected_councellor = action.payload
        },
        remove_councellor: (state, action) => {
            state.selected_councellor = null
        }
    }
})

export const { add_councellor, remove_councellor } = bookingSlice.actions;
export default bookingSlice.reducer;