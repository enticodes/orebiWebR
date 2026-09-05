import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import compareReducer from "../features/compare/compareSlice";
import themeReducer from "../features/theme/themeSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    compare: compareReducer,
    theme: themeReducer,
    user: userReducer,
  },
});

export default store;