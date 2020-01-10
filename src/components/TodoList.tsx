import React from "react";
import { ITodo } from "../models/ITodo";
import { addTodo, toggleTodo } from "../store/todos/actions";
import { connect, ConnectedProps } from "react-redux";
import TodoItem from "./TodoItem";

const mapState = (state: { todos: { todos: ITodo[] } }) => ({
  todos1: state.todos,
});

const mapDispatch = {
  addTodo,
  toggleTodo
};
const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface ITodoListProps {
  color: string;
}

class TodoList extends React.Component<ITodoListProps & PropsFromRedux> {
  public constructor(props: ITodoListProps & PropsFromRedux) {
    super(props);

    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
  }

  public render() {
    return (
      <React.Fragment>
        <h1>List</h1>
        <ul>
          {this.props.todos1.todos.map(item => (
            <TodoItem key={item.index} item={item} />
          ))}
        </ul>
        <input type="text" id="newTodoItem" /><button onClick={this.handleAddButtonClick}>Add</button>
      </React.Fragment>
    );
  }

  private handleAddButtonClick() {
    const element = document.getElementById("newTodoItem") as HTMLInputElement;
    if (element.value && !this.props.todos1.todos.map(i => i.text).includes(element.value)) {
      this.props.addTodo({
        text: element.value,
        completed: false,
        index: this.props.todos1.todos.length + 1,
      });
      element.value = "";
    }
  }
}

export default connector(TodoList)