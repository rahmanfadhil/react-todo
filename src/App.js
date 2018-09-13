import React, { Component } from "react";
import TodoList from "./components/TodoList";
import LoginForm from "./components/LoginForm";
import axios from "axios";

class App extends Component {
  state = {
    data: []
  };

  addTodo = () => {
    let newData = this.state.data.slice();
    newData.push("Learn React Native");
    this.setState({ data: newData });
  };

  componentDidMount = () => {
    axios.get("http://localhost:3000/users").then(data => {
      this.setState({ data: data.data });
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Helo world</h1>
        <hr />
        <LoginForm />
        <hr />
        <TodoList
          name="Fadhil"
          data={this.state.data}
          tambahTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
