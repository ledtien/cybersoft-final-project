import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CommentsReducer } from "./reducers/CommentsReducer";
import { JobsReducer } from "./reducers/JobsReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";
import { SubTypeJobsReducer } from "./reducers/SubTypeJobsReducer";
import { TypeJobsReducer } from "./reducers/TypeJobsReducer";
import { UserReducer } from "./reducers/UserReducer";

const rootReducer = combineReducers({
  // LoadingReducer,
  TypeJobsReducer,
  SubTypeJobsReducer,
  JobsReducer,
  CommentsReducer,
  UserReducer,
  LoadingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
