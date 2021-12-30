import React from "react";
import axios from "axios";
import "../index.css";
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      cin: "",
      password: "",
      view: "signup",
      isAuthenticated: false,

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      .post("http://localhost:3001/api/user/signup", {
        cin: this.state.cin,
        password: this.state.password,
      })
      .then(({ data }) => {
        this.props.updateUser(data);
      });
  }

  signin(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/user/signin", {
        cin: this.state.cin,
        password: this.state.password,
      })
      .then(({ data }) => {
        this.props.updateUser(data);
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/user", this.state)
      .then(({ data }) => {
        this.props.updateBlogs(data);
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
                  id="cin"
                  class="form-input"
                  type="text"
                  placeholder="cin"
                  value={this.state.cin}
                  onChange={this.handleChange}
                />
                <input
                  id="password"
                  class="form-input"
                  type="text"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />

                <p class="full-width">
                  <input
                    type="submit"
                    class="submit-btn"
                    value="SIGNUP"
                    onclick="checkValidations()"
                  />
                </p>
                <p class="full-width">
                  <input
                    type="submit"
                    class="submit-btn"
                    value="SIGNIN"
                    onClick={() => {
                      this.changeView("signin");
                    }}
                  />
                </p>
              </form>
            </div>
          </div>
        ) : (
          <div className="create">
            <div className="create-editor">
              <h2>Signin</h2>
              <form id="submit-form" action="">
                <input
                  id="username"
                  class="form-input"
                  type="text"
                  placeholder="cin"
                  value={this.state.cin}
                  onChange={this.handleChange}
                />
                <input
                  id="password"
                  class="form-input"
                  type="text"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <p class="full-width">
                  <input
                    type="submit"
                    class="submit-btn"
                    value="SIGNIN"
                    onClick={this.signin}
                  />
                </p>
                <p class="full-width">
                  <input
                    type="submit"
                    class="submit-btn"
                    value="SIGNUP"
                    onClick={() => {
                      this.changeView("signup");
                    }}
                  />
                </p>

              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
