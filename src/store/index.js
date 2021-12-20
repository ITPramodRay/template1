import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise";
import rootReducer from "../reducers";
import { Decrypt } from "../modules";
const persistantStorage = process.env.REACT_APP_PERSIST_STORE_DATA;

let middleware = "";
// if (process.env.NODE_ENV === 'PRODUCTION' || process.env.NODE_ENV === 'test') {
if (process.env.NODE_ENV === "PRODUCTION") {
  middleware = applyMiddleware(promiseMiddleware, thunk);
} else {
  // middleware = applyMiddleware(promiseMiddleware, thunk);
  middleware = applyMiddleware(promiseMiddleware, thunk, createLogger());
}
let persistantStore = {};
if (persistantStorage == "ENABLED") {
  persistantStore = sessionStorage._store
    ? Decrypt(sessionStorage._store, "local")
    : {};
}
export default createStore(rootReducer, persistantStore, middleware);
