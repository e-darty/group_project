import React from "react";
import axios from "axios";
import image from "./cin.jpg";
import Footer from "./Footer.jsx"
class CINComponent extends React.Component {
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
      right: "600px",
      top: "315px",
    };
    const LastName = {
      position: "absolute",
      right: "600px",
      top: "350px",
    };
    const DateBirth = {
      position: "absolute",
      right: "620px",
      top: "420px",
    };
    const Location = {
      position: "absolute",
      right: "580px",
      top: "455px",
    };
    const Portrait = {
      position: "absolute",
      right: "850px",
      top: "275px",
    };
    const CIN = {
      position: "absolute",
      right: "520px",
      top: "170px",
    };
    const msg = {
      textAlign: "center",
    };
    return (
      <div>
        <h3 style={msg}>Your CIN Card</h3>
        <img src={image} width="500" height="350" style={CIN}></img>
        <img
          src="https://pvtistes.net/forum/attachments/la-demande-de-pvt-canada-permis-vacances-travail-351/31941-photos-didentite-demande-de-permis-eic-pvt-jp-etc-img_9900.jpg"
          width="150"
          height="200"
          style={Portrait}
        ></img>
        <h3 style={NumberCard}> {this.state.cinUsername.cin}</h3>
        <h3 style={FirstName}> {this.state.cinUsername.name} </h3>
        <h3 style={LastName}> {this.state.cinUsername.lastName} </h3>
        <h3 style={DateBirth}> {this.state.cinUsername.dateOfBirth} </h3>
        <h3 style={Location}> {this.state.cinUsername.adress} </h3>
        <Footer/>
      </div>
    );
  }
}

export default CINComponent;
