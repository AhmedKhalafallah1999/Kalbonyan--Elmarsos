// import { createStore } from "redux";
// const redux = require("redux");
import {configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Counter";
import authSlice from "./Auth";
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { counter: 0, showCounter: true },
//   reducers: {
//     increament(state) {
//       state.counter++;
//     },
//     decreament(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggle(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });
// const authSlice = createSlice({
//   name: "isAuthinacted",
//   initialState: { isAuthinacated: false },
//   reducers: {
//     logIn(state) {
//       state.isAuthinacated = true;
//     },
//     logOut(state) {
//       state.isAuthinacated = false;
//     },
//   },
// });
// const storeReducer = (state = { counter: 0, showCounter: true }, action) => {
//   if (action.type === "increament") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decreament") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "IncreaseByFive") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return {
//     counter: state.counter - state.counter,
//   };
// };
// const store = redux.createStore(storeReducer);
// const store = createStore(counterSlice.reducer);
const Newstore = configureStore({
  reducer: { counter: counterSlice.reducer, isAuth: authSlice },
});
// const store = createStore(storeReducer);
// store.dispatch("increament");
// store.dispatch("decreament");
// export default store;
export default Newstore;
// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;
