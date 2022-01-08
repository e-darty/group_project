import React from "react";
import axios from "axios";
import image from "./Permis.jpg";

class DriverComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cinUsername: {},
    };
  }
  fetch() {
    axios.get("http://localhost:3001/api/citizen").then(({ data }) => {
      let arr = data;

      var newArr = arr.filter((item) => item.cin === this.props.actualUser.cin);
      console.log(newArr[0]);
      this.setState({ cinUsername: newArr[0] });
    });
  }
  componentDidMount() {
    this.fetch();
  }
  render() {
    const NumberCard = {
      position: "absolute",
      right: "710px",
      top: "270px",
    };
    const FirstName = {
      position: "absolute",
      left: "600px",
      top: "320px",
    };
    const LastName = {
      position: "absolute",
      left: "600px",
      top: "270px",
    };
    const DateBirth = {
      position: "absolute",
      left: "830px",
      top: "400px",
    };
    const Location = {
      position: "absolute",
      left: "600px",
      top: "345px",
    };
    const Portrait = {
      position: "absolute",
      left: "460px",
      top: "240px",
    };
    const CIN = {
      position: "absolute",
      left: "840px",
      top: "376px",
    };
    const msg = {
      textAlign: "center",
    };
    const text1 = {
      position: "absolute",
      left: "610px",
      top: "230px",
    };
    const text2 = {
      position: "absolute",
      left: "750px",
      top: "230px",
    };
    const permis = {
      position: "absolute",
      left: "450px",
      top: "170px",
    };
    return (
      <div>
        <h3 style={msg}>Your Driving Licence</h3>
        <img src={image} width="500" height="350" style={permis}></img>
        <img
          src="https://pvtistes.net/forum/attachments/la-demande-de-pvt-canada-permis-vacances-travail-351/31941-photos-didentite-demande-de-permis-eic-pvt-jp-etc-img_9900.jpg"
          width="115"
          height="170"
          style={Portrait}
        ></img>
        <h3 style={text1}> {this.state.cinUsername.licence} </h3>
        <h3 style={text2}>27/06/2014 </h3>
        <h3 style={LastName}> {this.state.cinUsername.lastName}</h3>
        <h3 style={FirstName}> {this.state.cinUsername.fisrtname} </h3>
        <h3 style={Location}> {this.state.cinUsername.address} </h3>
        <h3 style={CIN}> {this.state.cinUsername.cin} </h3>
        <h3 style={DateBirth}> {this.state.cinUsername.dateOfBirth} </h3>
        <h3 style={Location}> {this.state.cinUsername.address} </h3>
      </div>
    );
  }
}

export default DriverComponent;
