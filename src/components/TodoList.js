import React, { Component } from "react";
import Axios from "axios";

class TodoList extends Component {
  deleteUser = id => {
    Axios.delete("http://localhost:3000/users/" + id).then(data => {
      console.log(data);
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List of: {this.props.name}</h1>
        <ul>
          {this.props.data.map(user => {
            return (
              <li>
                <p>
                  <button onClick={() => this.deleteUser(user.id)}>
                    DELETE
                  </button>{" "}
                  email: {user.email}
                </p>
              </li>
            );
          })}
        </ul>
        <button onClick={this.props.tambahTodo}>Add Todo</button>
      </div>
    );
  }
}

export default TodoList;
