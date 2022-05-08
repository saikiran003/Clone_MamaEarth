import { legacy_createStore as createStore, combineReducers } from "redux";
import reducer from "./reducer";

const rootReducer = combineReducers({ cart: reducer });

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);