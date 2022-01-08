import React from "react";
import axios from "axios";
import "../index.css";
export default class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cin: props.actual.cin,
      name: props.actual.name,
      lastName: props.actual.lastName,
      dateOfBirth: props.actual.dateOfBirth,
      placeOfBirth: props.actual.placeOfBirth,
      drivingLicence: props.actual.drivingLicence,
      licence: props.actual.licence,
      adress: props.actual.adress,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.delete= this.delete.bind(this);

  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
    console.log(event.target.value);
  }

  handleSubmit() {
    axios
      .put(
        `http://localhost:3001/api/citizen/${this.props.actual._id}`,
        this.state
      )
      .then((response) => {
        console.log(response);
      });
  }

delete() {

 fetch(`http://localhost:3001/api/citizen/${this.props.actual._id}`, {
   method: "DELETE",
 }).then(() => this.setState({ status: "Delete successful" }));
  }

  render() {
    return (
      <div>
        <h2>Edit USER</h2>
        <form id="submit-form" action="">
          <table>
            <thead>
              <tr>
                <th>CIN</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>DATE OF BIRTH</th>
                <th>PLACE OF BIRTH</th>
                <th>DRIVING LICENCE</th>
                <th>LICENCE PLATE NUMBER</th>
                <th>ADRESS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {this.props.actual.cin}
                  <input
                    id="cin"
                    type="text"
                    placeholder="Add Cin"
                    value={this.state.cin}
                    onChange={this.handleChange}
                  />
                </td>

                <td>
                  {this.props.actual.name}
                  <input
                    id="name"
                    type="text"
                    placeholder="Add name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  {this.props.actual.lastName}
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Add lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  {this.props.actual.dateOfBirth}
                  <input
                    id="dateOfBirth"
                    type="text"
                    placeholder="Add Date of birth"
                    value={this.state.dateOfBirth}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  {this.props.actual.placeOfBirth}
                  <input
                    id="placeOfBirth"
                    type="text"
                    placeholder="Add placeOfBirth"
                    value={this.state.placeOfBirth}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  {this.props.actual.drivingLicence}
                  <input
                    id="drivingLicence"
                    type="text"
                    placeholder="Add driving licence"
                    value={this.state.drivingLicence}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  {this.props.actual.licence}
                  <input
                    id="licence"
                    type="text"
                    placeholder="add licence Plate number"
                    value={this.state.licence}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  {this.props.actual.adress}
                  <input
                    id="adress"
                    type="text"
                    placeholder="add Adress"
                    value={this.state.adress}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <p class="full-width">
            <input
              type="submit"
              class="submit-btn"
              value="  Save Citizen"
              onClick={this.handleSubmit}
            />
          </p>
          <p class="full-width">
            <input
              type="submit"
              class="submit-btn"
              value="  Delete Citizen"
              onClick={() => {
                this.props.changeView("admin");
              },this.delete}
            />
          </p>
        </form>
      </div>
    );
  }
}
