import { createSlice } from "@reduxjs/toolkit";

const exerciseSlice = createSlice({
  name: "exercise",
  initialState: [],
  reducers: {
    addExercise(state, action) {
      return (state = action.payload);
    },
    deleteExercise(state, action) {
      return state.filter((exercise) => exercise._id !== action.payload);
    },
  },
});

export const { addExercise, deleteExercise } = exerciseSlice.actions;
export default exerciseSlice.reducer;
