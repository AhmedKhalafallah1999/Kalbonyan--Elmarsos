import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
const initialDataState = { PrimaryData: [] };
const PrimaryDataSlice = createSlice({
  name: "PrimaryData",
  initialState: initialDataState,
  reducers: {
    addPrimayData: (state, action) => {
      state.PrimaryData.push(action.payload);
    },
  },
});
// const SecondryDataState = { SecondryData: [] };
// const SecondryDataSlice = createSlice({
//   name: "SecondryData",
//   initialState: SecondryDataState,
//   reducers: {
//     addSecondryData: (state, action) => {
//       state.SecondryData.push(action.payload);
//     },
//   },
// });

const store = configureStore({
  reducer: {
    PrimaryData: PrimaryDataSlice.reducer,
    // SecondryData: SecondryDataSlice.reducer,
  },
});

export const PrimaryActions = PrimaryDataSlice.actions;
// export const SecondryActions = SecondryDataSlice.actions;
export default store;
