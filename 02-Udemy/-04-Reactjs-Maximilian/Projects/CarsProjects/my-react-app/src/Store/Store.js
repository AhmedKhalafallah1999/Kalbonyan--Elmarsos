// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
const initialState = { counter: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament(state) {
      state.counter++;
    },
    decrement(state) {
      if (state.counter > 0) {
        state.counter--;
      }
    },
  },
});
const store = configureStore({
  reducer: counterSlice.reducer,
});
export const counterActions = counterSlice.actions;
export default store;
