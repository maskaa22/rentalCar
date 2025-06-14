import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchOneCar } from "./operations";

const initialState = {
  items: [],
  item: null,
  loading: false,
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
        state.loading = false;
        state.error = null;

        if (action.payload.resetList) {
          state.items = action.payload.cars;
        } else {
          state.items = [...state.items, ...action.payload.cars];
        }

        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      // .addCase(fetchCars.pending, (state) => {
      //   state.loading = true;
      // })


      // .addCase(fetchCars.rejected, (state, action) => {
      //   // state.loading = false;
      //   state.error = action.payload;
      // })

      .addCase(fetchOneCar.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.item = action.payload;

      })
      // .addCase(fetchOneCar.pending, (state) => {
      //   state.loading = true;
      // })
      .addCase(fetchOneCar.rejected, (state, action) => {
        // state.loading = false;
        state.error = action.payload;
      })



      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );

      // .addMatcher(
      //   (action) => {
      //     return action.type.endsWith("pending");
      //   },
      //   (state) => {
      //     return state.loading = false;
      //   }
      // )
      // .addMatcher(
      //   (action) => {
      //     return action.type.endsWith("fulfilled") ||
      //      action.type.endsWith("rejected")
      //   },
      //   (state) => {
      //     return state.loading = false;
      //   }
      // )
  },
});

export default slice.reducer;
