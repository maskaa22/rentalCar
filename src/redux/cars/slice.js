import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchOneCar } from "./operations";

const initialState = {
  items: [],
  item: null,
  error: null,
  page: 1,
  totalPages: 1,
};

const slice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.error = null;

        if (action.payload.resetList) {
          state.items = action.payload.cars;
          state.page = 1;
        } else {
          state.items = [...state.items, ...action.payload.cars];
        }

        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })

      .addCase(fetchOneCar.fulfilled, (state, action) => {
        state.error = null;
        state.item = action.payload;
      })
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state, action) => {
          state.error = action.payload;
        }
      );
  },
});

export default slice.reducer;
