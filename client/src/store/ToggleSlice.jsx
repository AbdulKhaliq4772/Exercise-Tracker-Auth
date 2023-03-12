import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: false,
  reducers: {
    changeToggle(state, action) {
      return (state = !state);
    },
  },
});
export const { changeToggle } = toggleSlice.actions;
export default toggleSlice.reducer;
