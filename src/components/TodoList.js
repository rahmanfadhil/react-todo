import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>Todo List of: {this.props.name}</h1>
        <ul>
          {this.props.data.map(user => {
            return <li>email: {user.email}</li>;
          })}
        </ul>
        <button onClick={this.props.tambahTodo}>Add Todo</button>
      </div>
    );
  }
}

export default TodoList;
