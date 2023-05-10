// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0 };
function LocalStorage(dataNeeded, target) {
  localStorage.setItem(target, JSON.stringify(dataNeeded));
}

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increament(state = 0) {
      state.counter++;
      LocalStorage(state.counter, "counter");
    },
    decrement(state) {
      if (state.counter > 0) {
        state.counter--;
        LocalStorage(state.counter, "counter");
      }
    },
    rsetart(state) {
      state.counter = 0;
      LocalStorage(state.counter, "counter");
    },
    decreaseByAmount(state, action) {
      state.counter -= action.payload;
      LocalStorage(state.counter, "counter");
    },
    initilize(state, action) {
      if (action.payload) state.counter = action.payload;
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
      LocalStorage(state.Data, "DataArray");
    },
    decreament: (state, action) => {
      state.Data.forEach((item) => {
        if (item.id === action.payload) {
          if (item.Amount > 1) item.Amount--;
          else if (item.Amount === 1) {
            let filtered_arr = state.Data.filter(function (val) {
              //callback function
              if (val.id !== action.payload) {
                //filtering criteria
                return val;
              } else {
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
      LocalStorage(state.Data, "DataArray");
    },
    deleteAll: (state) => {
      state.Data = [];
      LocalStorage(state.Data, "DataArray");
    },
    delete: (state, action) => {
      let filtered_arr = state.Data.filter(function (val) {
        //callback function
        if (val.name !== action.payload) {
          //filtering criteria
          return val;
        } else {
          return false;
        }
      });
      state.Data = filtered_arr;
      LocalStorage(state.Data, "DataArray");
    },
    initilize: (state, action) => {
      state.Data = action.payload;
    },
  },
});
const initialShownState = { case: false, shownNavigation: false };
const shownSlice = createSlice({
  name: "shownCard",
  initialState: initialShownState,
  reducers: {
    shown(state) {
      state.case = !state.case;
      LocalStorage(state.case, "CardShow");
    },
    shownNavigation(state, action) {
      // console.log(action);
      if (action.payload.type === "bar") {
        state.shownNavigation = !action.payload.payload;
      } else if (action.payload.type === "screen") {
        state.shownNavigation = action.payload.payload;
      }
      LocalStorage(state.shownNavigation, "NavShow");
    },
    initilize: (state, action) => {
      state.case = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    carsData: carsDataSlice.reducer,
    shownCard: shownSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const carsDataActions = carsDataSlice.actions;
export const shownAction = shownSlice.actions;
export default store;
