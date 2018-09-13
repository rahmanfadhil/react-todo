import React, { Component } from "react";
import axios from "axios";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = () => {
    console.log(this.state);
    axios
      .post("http://localhost:3000/users", {
        email: this.state.email,
        password: this.state.password
      })
      .then(data => {
        console.log(data);
      });
  };

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <input
          placeholder="email"
          name="email"
          value={this.state.email}
          onChange={this.onInputChange}
        />
        <br />
        <input
          placeholder="password"
          name="password"
          value={this.state.password}
          onChange={this.onInputChange}
        />
        <br />
        <button onClick={this.onSubmit}>REGISTER</button>
      </div>
    );
  }
}

export default LoginForm;
