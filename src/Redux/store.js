import { legacy_createStore as createStore, combineReducers } from "redux";
import { Thunk } from "thunk";
import {  useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { authReducer } from "./Auth/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
