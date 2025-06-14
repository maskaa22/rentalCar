import {
  createSlice,
  isPending,
  isRejected,
  isFulfilled,
} from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: 
  {
    loading: false,
  }
  ,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(isPending, (state) => {
        // console.log('isPending');

        state.loading = true;
      })
      .addMatcher(isFulfilled, (state) => {
        // console.log('isFulfilled');
        state.loading = false;
      })
      .addMatcher(isRejected, (state) => {
        // console.log('isRejected');
        state.loading = false;
      });

      // .addMatcher(
      //   (action) => {
      //     return action.type.endsWith("pending");
      //   },
      //   () => {
      //     return true;
      //   }
      // )
      // .addMatcher(
      //   (action) => {
      //     return action.type.endsWith("fulfilled") ||
      //      action.type.endsWith("rejected")
      //   },
      //   () => {
      //     return false;
      //   }
      // )
  },
});

export default loaderSlice.reducer;
