import { configureStore } from "@reduxjs/toolkit";
import addAnimalReducer from "../features/animalSlice";

export const store = configureStore({
  reducer: {
    animals: addAnimalReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
