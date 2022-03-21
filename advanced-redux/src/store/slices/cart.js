import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  old_items: {},
  items: [],
  numItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.numItems = action.payload.numItems;
      state.items = action.payload.items;
    },
    addItem(state, action) {
      if (!state.items[action.payload.title])
        state.items[action.payload.title] = [];

      state.items[action.payload.title].push(action.payload);

      state.numItems += 1;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });

        state.numItems += 1;
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.numItems -= 1;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
