import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("orebi_user")) || null;

const initialState = {
  user: storedUser,
  isAuthenticated: !!storedUser,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("orebi_user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("orebi_user");
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
