import { TodoState, TodoActionTypes, ADD_TODO, TOGGLE_TODO } from "./types";


const initialState: TodoState = {
  todos: [{
    index: 0,
    text: "Test №1",
    completed: false,
  }, {
    index: 1,
    text: "Test №2",
    completed: true,
  }, {
    index: 2,
    text: "Test №3",
    completed: false,
  }],
}

export function todosReducer(state = initialState, action: TodoActionTypes): TodoState {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_TODO:
      const todos = state.todos;
      const item = todos.find(i => i.index === action.index)
      if (item) {
        item.completed = !item.completed;
      }
      return {
        todos: [...todos],
      };
    default:
      return state;
  }
}
