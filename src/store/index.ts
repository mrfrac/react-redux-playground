import { systemReducer } from "./system/reducers";
import { todosReducer } from "./todos/reducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  system: systemReducer,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;