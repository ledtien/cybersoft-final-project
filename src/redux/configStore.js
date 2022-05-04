import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { LoadingReducer } from "./reducers/LoadingReducer";
import { TypeJobsReducer } from "./reducers/TypeJobsReducer";

const rootReducer = combineReducers({
  // LoadingReducer,
  TypeJobsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
