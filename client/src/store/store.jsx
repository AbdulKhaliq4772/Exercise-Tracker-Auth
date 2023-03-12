import { configureStore } from "@reduxjs/toolkit";
import exercisesReducer from "../store/exercisesSlice";
import userReducer from "../store/UserSlice";
import toggleReducer from "../store/ToggleSlice";

export const store = configureStore({
  reducer: {
    exercises: exercisesReducer,
    users: userReducer,
    toggle: toggleReducer,
  },
});
