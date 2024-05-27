import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
    name:"booking",
    initialState: {
        selected_councellor: null,
        selected_group: null,
        selected_support_group: null
    },
    reducers: {
        add_councellor: (state, action) => {
            state.selected_councellor = action.payload
        },
        add_group: (state, action) => {
            state.selected_group = action.payload
        },
        add_support_group: (state, action) => {
            state.selected_group = action.payload
        },
    }
})

export const { add_councellor, add_group, add_support_group } = bookingSlice.actions;
export default bookingSlice.reducer;