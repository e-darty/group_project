import React from "react";
import "../index.css";
import axios from "axios";
import Footer from "./Footer.jsx"
export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: "",
      email: "",
      phoneNumber: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/messages", this.state)
      .then(({ data }) => {
        console.log(data);
        this.props.updateMessages(data);
      });
  }
  render() {
    return (
      <div class="contain">
        <div class="wrapper">
          <div class="form">
            <h4>GET IN TOUCH</h4>
            <h2 class="form-headline">Send us a message</h2>
            <form id="submit-form" action="">
              <p>
                <input
                  id="sender"
                  class="form-input"
                  type="text"
                  placeholder="Your Name*"
                  value={this.state.sender}
                  onChange={this.handleChange}
                />
                <small class="name-error"></small>
              </p>
              <p>
                <input
                  id="email"
                  class="form-input"
                  type="email"
                  placeholder="Your Email*"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <small class="name-error"></small>
              </p>
              <p class="full-width">
                <input
                  id="phoneNumber"
                  class="form-input"
                  type="text"
                  placeholder="Phone Number*"
                  required
                  value={this.state.phoneNumber}
                  onChange={this.handleChange}
                />
                <small></small>
              </p>
              <p class="full-width">
                <textarea
                  minlength="20"
                  id="message"
                  cols="30"
                  rows="7"
                  placeholder="Your Message*"
                  required
                  value={this.state.message}
                  onChange={this.handleChange}
                ></textarea>
                <small></small>
              </p>

              <p class="full-width">
                <input
                  type="submit"
                  class="submit-btn"
                  value="Submit"
                  onClick={this.handleSubmit}
                />
              </p>
            </form>
          </div>

          <div class="contacts contact-wrapper">
            <ul>
              <li>
                Get in touch with us and let us know how we can help you?
              </li>
              <span class="hightlight-contact-info">
                <li class="email-info">
                  <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
                  info@edarty.com
                </li>
                <li>
                  <i class="fa fa-phone" aria-hidden="true"></i>{" "}
                  <span class="highlight-text">+216 29 864 500</span>
                </li>
              </span>
            </ul>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
