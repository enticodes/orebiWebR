import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("orebi_wishlist")) || [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;
      if (!state.items.some((item) => item.id === product.id)) {
        state.items.push({
          id: product.id,
          title: product.title || product.productT,
          price: product.price || 25,
          thumbnail: product.thumbnail || product.productImg || "",
          category: product.category || "General",
          rating: product.rating || 4.5,
        });
        localStorage.setItem("orebi_wishlist", JSON.stringify(state.items));
      }
    },
    removeFromWishlist: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      localStorage.setItem("orebi_wishlist", JSON.stringify(state.items));
    },
    toggleWishlist: (state, action) => {
      const product = action.payload;
      const index = state.items.findIndex((item) => item.id === product.id);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push({
          id: product.id,
          title: product.title || product.productT,
          price: product.price || 25,
          thumbnail: product.thumbnail || product.productImg || "",
          category: product.category || "General",
          rating: product.rating || 4.5,
        });
      }
      localStorage.setItem("orebi_wishlist", JSON.stringify(state.items));
    },
  },
});

export const { addToWishlist, removeFromWishlist, toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
