import React from "react";
import axios from "axios";
import "../index.css";
export default class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cin: 0,
      name: "",
      lastName: "",
      dateOfBirth: "",
      placeOfBirth: "",
      drivingLicence: "",
      licence: "",
      adress: "",
      carType: "",
      carName: "",
      carNum1: "",
      carNum2: "",
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
      .post("http://localhost:3001/api/citizen", this.state)

      .then(({ data }) => {
        console.log(data);
        this.props.updateUsers(data);
      });
  }

  render() {
    return (
      <div>
        <h2>ADD NEW USER</h2>
        <form id="submit-form" action="">
          <ul>
            <li id="input">
              <input
                id="cin"
                class="form-input"
                type="text"
                placeholder="Add Cin"
                value={this.state.cin}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <input
                id="name"
                class="form-input"
                type="text"
                placeholder="Add name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <input
                id="lastName"
                class="form-input"
                type="text"
                placeholder="Add lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <input
                id="dateOfBirth"
                class="form-input"
                type="text"
                placeholder="Add Date of birth"
                value={this.state.dateOfBirth}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <input
                id="placeOfBirth"
                class="form-input"
                type="text"
                placeholder="Add placeOfBirth"
                value={this.state.placeOfBirth}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <input
                id="drivingLicence"
                class="form-input"
                type="text"
                placeholder="Add driving licence"
                value={this.state.drivingLicence}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <input
                id="licence"
                class="form-input"
                type="text"
                placeholder="add licence Plate number"
                value={this.state.licence}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <input
                id="adress"
                class="form-input"
                type="text"
                placeholder="add adress"
                value={this.state.adress}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <input
                id="carName"
                class="form-input"
                type="text"
                placeholder="add model"
                value={this.state.carName}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <input
                id="carType"
                class="form-input"
                type="text"
                placeholder="add Type"
                value={this.state.carType}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <input
                id="carNum1"
                class="form-input"
                type="text"
                placeholder="add number"
                value={this.state.carNum1}
                onChange={this.handleChange}
              />
            </li>
            <li>
              <input
                id="carNum2"
                class="form-input"
                type="text"
                placeholder="add number"
                value={this.state.carNum2}
                onChange={this.handleChange}
              />
            </li>
          </ul>
          <p class="full-width">
            <input
              type="submit"
              class="submit-btn"
              value="  Save Citizen"
              onClick={this.handleSubmit}
            />
          </p>
        </form>
      </div>
    );
  }
}
