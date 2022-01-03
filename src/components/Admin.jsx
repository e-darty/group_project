import React from "react";
import axios from "axios";
import "../index.css";
export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cin: 0,
      name: "",
      lastName: "",
      dateOfBirth: "",
      placeOfBirth: "",
      drivingLicence: "",
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
      .post("http://localhost:3001/api/user", this.state)
     
      .then(({ data }) => {
         console.log(data);
        this.props.updateUsers(data);
      });
  }

  render() {
    return (
      <div>
        <div className="users">
          <table>
            <thead>
              <tr>
                <th>CIN</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>DATE OF BIRTH</th>
                <th>PLACE OF BIRTH</th>
                <th>DRIVING LICENCE</th>
              </tr>
            </thead>
            <tbody>
              {this.props.user.map((u, index) => (
                <tr className="user-list-item" key={index}>
                  <td> {u.cin} </td>
                  <td> {u.name} </td>
                  <td> {u.lastName} </td>
                  <td> {u.dateOfBirth} </td>
                  <td> {u.placeOfBirth} </td>
                  <td> {u.drivingLicence} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          className="create-submit-button"
          type="submit"
          onClick={() => {
            this.props.changeView("add");
          }}
        >
          ADD USER
        </button>
        <button
          className="create-submit-button"
          type="submit"
          onClick={() => {
            this.props.changeView("messages");
          }}
        >
Check messages
        </button>
      </div>
    );
  }
}


