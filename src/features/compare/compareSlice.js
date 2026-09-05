import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("orebi_compare")) || [],
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addToCompare: (state, action) => {
      const product = action.payload;
      if (!state.items.some((item) => item.id === product.id)) {
        if (state.items.length >= 4) {
          // Limit to max 4 items for clean comparison layout
          state.items.shift();
        }
        state.items.push(product);
        localStorage.setItem("orebi_compare", JSON.stringify(state.items));
      }
    },
    removeFromCompare: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      localStorage.setItem("orebi_compare", JSON.stringify(state.items));
    },
    clearCompare: (state) => {
      state.items = [];
      localStorage.removeItem("orebi_compare");
    },
  },
});

export const { addToCompare, removeFromCompare, clearCompare } = compareSlice.actions;
export default compareSlice.reducer;
