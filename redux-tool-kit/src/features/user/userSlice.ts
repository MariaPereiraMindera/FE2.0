import { createSlice } from "@reduxjs/toolkit";

export type State = {
  username: string;
};

export const initialState: State = {
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.username = action.payload;
    },
    logoutUser: (state) => {
      state.username = "";
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
