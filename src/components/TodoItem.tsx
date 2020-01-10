import React from "react";
import { ITodo } from "../models/ITodo";
import { connect, ConnectedProps } from "react-redux";
import { toggleTodo } from "../store/todos/actions";

const connector = connect(null, { toggleTodo });

interface ITodoItemProps extends ConnectedProps<typeof connector> {
  item: ITodo;
}

export class TodoItem extends React.Component<ITodoItemProps> {
  public constructor(props: ITodoItemProps) {
    super(props);

    console.log(this.props)

    this.toggleTodoItem = this.toggleTodoItem.bind(this);
  }
  public render() {
    return (
      <li>
        {this.props.item.text} <button onClick={this.toggleTodoItem}>{this.props.item.completed ? "completed" : "not completed"}</button>
      </li>
    );
  }

  private toggleTodoItem() {
    this.props.toggleTodo(this.props.item.index);
    this.setState({
      item: this.props.item
    });
  }
}

export default connector(TodoItem);
