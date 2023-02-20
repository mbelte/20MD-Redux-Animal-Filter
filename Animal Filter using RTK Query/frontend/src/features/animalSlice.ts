import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

export type Animal = {
  name: string;
  image: string;
  specie: string;
};

type SliceType = {
  animals: Animal[];
  species: string[];
  modalState: boolean;
};

const animalsData = JSON.parse(localStorage.getItem("animals") || "[]");
const animalsSpecies = JSON.parse(localStorage.getItem("species") || "[]");

const initialState: SliceType = {
  animals: animalsData,
  species: animalsSpecies,
  modalState: false,
};

export const animalSlice = createSlice({
  name: "animals",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addAnimal: (state: SliceType, action: PayloadAction<Animal>) => {
      state.animals.push(action.payload);
    },

    updateAnimals: (state: SliceType, action: PayloadAction<Animal[]>) => {
      state.animals = action.payload;
    },

    updateSpecies: (state: SliceType, action: PayloadAction<string>) => {
      state.species.push(action.payload);
    },

    changeModalState: (state: SliceType) => {
      state.modalState = !state.modalState;
    },
  },
});

export const { addAnimal, updateAnimals, changeModalState, updateSpecies } =
  animalSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state;

export default animalSlice.reducer;
