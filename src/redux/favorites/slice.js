import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const carToAdd = action.payload;
      if (!state.items.some((car) => car.id === carToAdd.id)) {
        state.items.push(carToAdd);
      }
    },
    removeFavorite: (state, action) => {
      const carIdToRemove = action.payload;
      state.items = state.items.filter((car) => car.id !== carIdToRemove);
    },
  },
});

export const { addFavorite, removeFavorite } = slice.actions;

export default slice.reducer;
