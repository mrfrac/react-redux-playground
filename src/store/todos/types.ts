import { ITodo } from "../../models/ITodo";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export interface TodoState {
  todos: ITodo[];
}

interface AddTodoAction {
  type: typeof ADD_TODO,
  payload: ITodo;
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO,
  index: number;
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction;
