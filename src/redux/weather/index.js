import { createSlice } from "@reduxjs/toolkit";

const weather = createSlice({
  name: "weather",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    getData(state) {
      state.isLoading = true;
    },
    getDataSuccess(state, { data }) {
      state.isLoading = false;
      state.data = data;
    },
    getDataFailure(state, { errorStatus }) {
      state.isLoading = false;
      state.error = errorStatus;
    },
  },
});

export default weather.reducer;
