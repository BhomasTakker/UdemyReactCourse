import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart";
import uiReducer from "./slices/ui";

const cart = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
  },
});

export default cart;
