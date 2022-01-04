import React from "react";
import axios from "axios";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      cin: 0,
      view: "signup",

    };
    console.log(this.props);
    this.handleChange = this.handleChange.bind(this);

    this.changeView = this.changeView.bind(this);
    this.signin = this.signin.bind(this);
    this.signup = this.signup.bind(this);
  }

  changeView(view) {
    this.setState({ view });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
    console.log(this.state);
  }

  signup(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/user/signup", this.state)

      .then(({ data }) => {
        console.log(data);
        this.props.updateUser(data);
      });
  }

  signin(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/user/signin", this.state)

      .then(({ data }) => {
        console.log(data);
        this.props.updateUser(data);
      });
  }



  render() {
    return (
      <div>
        <h1>Authentication page</h1>
        {this.state.view === "signup" ? (
          <div className="create">
            <div className="create-editor">
              <h2>Signup</h2>
              <form>
                <input
                  id="username"
                  className="create-input"
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <input
                  id="password"
                  className="create-input"
                  type="text"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <input
                  id="cin"
                  className="create-input"
                  type="text"
                  placeholder="Cin"
                  value={this.state.cin}
                  onChange={this.handleChange}
                />
                <button
                  className="create-submit-button"
                  type="submit"
                  onClick={this.signup}
                >
                  signup
                </button>
                <span
                  style={{ marginLeft: "20px" }}
                  onClick={() => {
                    this.changeView("signin");
                  }}
                >
                  click here to signin
                </span>
              </form>
            </div>
          </div>
        ) : (
          <div className="create">
            <div className="create-editor">
              <h2>Signin</h2>
              <form>
                <input
                  id="username"
                  className="create-input"
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <input
                  id="password"
                  className="create-input"
                  type="text"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <button
                  className="create-submit-button"
                  type="submit"
                  onClick={this.signin}
                >
                  signin
                </button>
                <span
                  style={{ marginLeft: "20px" }}
                  onClick={() => {
                    this.changeView("signup");
                  }}
                >
                  click here to signup
                </span>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
