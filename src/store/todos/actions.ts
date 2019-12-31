import { ITodo } from "../../models/ITodo";
import { ADD_TODO, TOGGLE_TODO } from "./types";

export function addTodo(newMessage: ITodo) {
  return {
    type: ADD_TODO,
    payload: newMessage,
  };
}

export function toggleTodo(index: number) {
  return {
    type: TOGGLE_TODO,
    index,
  };
}
