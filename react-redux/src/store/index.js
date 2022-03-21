// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authenticationReducer from "./authentication";

// const initialCounterState = { counter: 0, toggle: true };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter += action.payload.val;
//     },
//     toggle(state) {
//       state.toggle = !state.toggle;
//     },
//   },
// });

// const initialAuthState = {
//   isAuthenticated: false,
// };

// const authenticationSlice = createSlice({
//   name: "authentication",
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });
// const reducer = (state = initialState, action) => {
//   if (action.type === "toggle") {
//     return {
//       ...state,
//       toggle: !state.toggle,
//     };
//   }
//   if (action.type === "increment") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       ...state,
//       counter: (state.counter += action.val),
//     };
//   }

//   return state;
// };
// const store = createStore(reducer);

const store = configureStore({
  reducer: {
    counter: counterReducer,
    authentication: authenticationReducer,
  },
});
// export const counterActions = counterSlice.actions;
// export const authActions = authenticationSlice.actions;

export default store;
