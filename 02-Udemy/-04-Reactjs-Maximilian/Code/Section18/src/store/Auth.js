import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "isAuthinacted",
  initialState: { isAuthinacated: false },
  reducers: {
    logIn(state) {
      state.isAuthinacated = true;
    },
    logOut(state) {
      state.isAuthinacated = false;
    },
  },
});
export default authSlice.reducer;
export const authActions = authSlice.actions;
