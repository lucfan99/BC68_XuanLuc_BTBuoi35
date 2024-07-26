import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrChairBooking: [],
};

const bookingSlice = createSlice({
  name: "booked",
  initialState,
  reducers: {
    uploadChair: (state, actions) => {
      state.arrChairBooking.push(actions.payload);
    },
    deleteBooking: (state, action) => {
      // Filter out the item with the given id
      state.arrChairBooking = state.arrChairBooking.filter(
        (item) => item.soGhe !== action.payload
      );
    },
  },
});

export const { uploadChair, deleteBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
