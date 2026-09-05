import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("orebi_cart")) || [],
  value: 0, // for backward compatibility with total item count
  totalAmount: 0,
};

// Calculate initial totals
const calculateTotals = (items) => {
  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return { totalCount, totalAmount };
};

const initialTotals = calculateTotals(initialState.items);
initialState.value = initialTotals.totalCount;
initialState.totalAmount = initialTotals.totalAmount;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          id: product.id,
          title: product.title || product.productT,
          price: product.price || 25,
          thumbnail: product.thumbnail || product.productImg || "",
          category: product.category || "General",
          quantity: 1,
        });
      }

      const { totalCount, totalAmount } = calculateTotals(state.items);
      state.value = totalCount;
      state.totalAmount = totalAmount;
      localStorage.setItem("orebi_cart", JSON.stringify(state.items));
    },

    increment: (state) => {
      // Legacy simple increment support
      state.value += 1;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      
      const { totalCount, totalAmount } = calculateTotals(state.items);
      state.value = totalCount;
      state.totalAmount = totalAmount;
      localStorage.setItem("orebi_cart", JSON.stringify(state.items));
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== id);
        } else {
          item.quantity = quantity;
        }
      }

      const { totalCount, totalAmount } = calculateTotals(state.items);
      state.value = totalCount;
      state.totalAmount = totalAmount;
      localStorage.setItem("orebi_cart", JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = [];
      state.value = 0;
      state.totalAmount = 0;
      localStorage.removeItem("orebi_cart");
    },
  },
});

export const { addToCart, increment, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;