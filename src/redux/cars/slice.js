import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const initialState = {
    items: [],
    loading: false,
    error: null
}

const slice = createSlice({
    name: 'cars',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchCars.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchCars.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCars.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default slice.reducer;