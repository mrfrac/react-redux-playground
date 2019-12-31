import React, { SyntheticEvent } from "react";
import { ITodo } from "../models/ITodo";
import { addTodo, toggleTodo } from "../store/todos/actions";
import { connect, ConnectedProps } from "react-redux";

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
    this.toggleTodoItem = this.toggleTodoItem.bind(this);
  }

  public render() {
    return (
      <React.Fragment>
        <h1>List</h1>
        <ul>
          {this.props.todos1.todos.map(item => (
            <li key={item.index}>
              {item.text} <small>{item.completed ? "completed" : "not completed"}</small> <button onClick={() => this.toggleTodoItem(item.index)}>toggle</button>
            </li>))}
        </ul>
        <input type="text" id="newTodoItem" /><button onClick={this.handleAddButtonClick}>Add</button>
      </React.Fragment>
    );
  }

  private handleAddButtonClick(event: SyntheticEvent) {
    const element = document.getElementById("newTodoItem") as HTMLInputElement;
    if (element.value) {
      this.props.addTodo({
        text: element.value,
        completed: false,
        index: this.props.todos1.todos.length + 1,
      });
    }
  }

  private toggleTodoItem(index: number) {
    this.props.toggleTodo(index);
  }
}

export default connector(TodoList)