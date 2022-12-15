import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { config } from "webpack";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

// const store = configureStore(
//     rootReducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// );

const store = configureStore(rootReducer);

export default store;