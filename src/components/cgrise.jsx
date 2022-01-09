import React from "react";
import axios from "axios";
import image from "./cgrise.jpg";
import Footer from "./Footer.jsx"
class GreyComponent extends React.Component {
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
    const Name = {
      position: "absolute",
      left: "700px",
      top: "255px",
    };
    const DateBirth = {
      position: "absolute",
      left: "830px",
      top: "400px",
    };
    const Location = {
      position: "absolute",
      left: "700px",
      top: "300px",
    };
    const msg = {
      textAlign: "center",
    };
    const permis = {
      position: "absolute",
      left: "450px",
      top: "170px",
    };
    const CIN = {
      position: "absolute",
      left: "700px",
      top: "350px",
    };
    const privateCar = {
      position: "absolute",
      left: "800px",
      top: "400px",
    };
    const nameCar = {
      position: "absolute",
      left: "550px",
      top: "435px",
    };
    const typeCar = {
      position: "absolute",
      left: "550px",
      top: "475px",
    };
    const NumCar2 = {
      position: "absolute",
      left: "465px",
      top: "220px",
      transform: "rotate(-90deg)",
    };
    const NumCar1 = {
      position: "absolute",
      left: "465px",
      top: "420px",
      transform: "rotate(-90deg)",
    };
    return (
      <div>
        <h3 style={msg}>Your Gray Card</h3>
        <img src={image} width="500" height="350" style={permis}></img>
        <h3 style={Name}>
          {" "}
          {this.state.cinUsername.name} {this.state.cinUsername.lastName}{" "}
        </h3>
        <h3 style={Location}> {this.state.cinUsername.adress} </h3>
        <h3 style={CIN}> {this.state.cinUsername.cin} </h3>
        <h3 style={privateCar}>privée</h3>
        <h3 style={nameCar}>{this.state.cinUsername.carName}</h3>
        <h3 style={typeCar}> {this.state.cinUsername.carType}</h3>
        <h3 style={NumCar2}> {this.state.cinUsername.carNum2} </h3>
        <h3 style={NumCar1}> {this.state.cinUsername.carNum1} </h3>
        <Footer/>
      </div>
    );
  }
}

export default GreyComponent;
