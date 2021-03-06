import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvarient from "redux-immutable-state-invariant";
import rootReducer from "./reducers";

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvarient()))
  );
}
