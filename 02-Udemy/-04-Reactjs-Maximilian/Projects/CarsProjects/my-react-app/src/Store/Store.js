// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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
const initialCarsState = { Data: [], AmountCar: 0 };
const carsDataSlice = createSlice({
  name: "carsData",
  initialState: initialCarsState,
  reducers: {
    increament: (state, action) => {
      if (!state.Data[action.payload["id"]]) state.Data.push(action.payload);
      else {
        state.Data[action.payload["id"]] = {
          ...state.Data[action.payload],
          amount: state.AmountCar++,
        };
      }
    },
    decreament: (state, action) => {
      state.Data.push(action.payload);
    },
  },
  // decrement(state) {
  //   if (state.carAmount > 0) {
  //     state.carAmount--;
  //   }
  // },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, carsData: carsDataSlice.reducer },
});
export const counterActions = counterSlice.actions;
export const carsDataActions = carsDataSlice.actions;
export default store;
