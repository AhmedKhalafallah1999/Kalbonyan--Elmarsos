import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
const cartReducer = createSlice({
  name: "cart",
  initialState: { counter: 1, isToggled: true },
  reducers: {
    increament(state) {
      state.counter++;
    },
    decreament(state) {
      state.counter--;
    },
    isToggled(state) {
      state.isToggled = !state.isToggled;
    },
  },
});
const store = configureStore({ reducer: cartReducer.reducer });
export default store;
export const cartActions = cartReducer.actions;
