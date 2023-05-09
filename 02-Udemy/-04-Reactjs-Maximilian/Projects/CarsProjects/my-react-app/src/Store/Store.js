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
const initialCarsState = { Data: [], AmountCar: 0, notFound: 0 };
const carsDataSlice = createSlice({
  name: "carsData",
  initialState: initialCarsState,
  reducers: {
    increament: (state, action) => {
      state.Data.forEach((item) => {
        if (item.name === action.payload.name) {
          item.Amount++;
          state.notFound = 0;
          return state;
        }
        state.notFound++;
      });
      if (state.notFound === state.Data.length) {
        state.Data.push(action.payload);
        state.notFound = 0;
      }
    },
    decreament: (state, action) => {
      state.Data.forEach((item) => {
        if (item.id === action.payload) {
          if (item.Amount > 1) item.Amount--;
          else if (item.Amount === 1) {
            let filtered_arr = state.Data.filter(function(val) {
              //callback function
              if (val.id !== action.payload) {
                //filtering criteria
                return val;
              } else{
                return false;
              }
            });
            state.Data = filtered_arr;
          }
        }
      });
      // if (state.notFound === state.Data.length) {
      //   // state.Data.push(action.payload);
      //   state.notFound = 0;
      // }
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, carsData: carsDataSlice.reducer },
});
export const counterActions = counterSlice.actions;
export const carsDataActions = carsDataSlice.actions;
export default store;
