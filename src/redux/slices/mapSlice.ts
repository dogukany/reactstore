import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: {
    latitude: 0,
    longitude: 0,
  },
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = mapSlice.actions;

export default mapSlice.reducer;
