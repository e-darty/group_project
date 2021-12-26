import React from 'react';
import data from './../../../data/data.js';
  class CINComponent extends React.Component {
    render() {
      const NumberCard = {
        position: "absolute", 
        right: "710px",
        top: "270px"
      };
      const FirstName = {
        position: "absolute", 
        right: "600px",
        top: "315px"
      };
      const LastName = {
        position: "absolute", 
        right: "600px",
        top: "350px"
      };
      const DateBirth = {
        position: "absolute", 
        right: "620px",
        top: "420px"
      };
      const Location = {
        position: "absolute", 
        right: "580px",
        top: "455px"
      };
      const Portrait = {
        position: "absolute",
        right: "850px",
        top: "300px"
      };
      const CIN = {
        position: "absolute",
        right: "520px",
        top: "170px"
      };
      const msg= {
        textAlign: "center"
      }
      return (
        <div>
          <h2 style={msg}>Here's your CIN Card</h2>
          <img src="https://i.pinimg.com/736x/0b/7b/9d/0b7b9dc2fc9faeb62def3b9e272127b6.jpg" width="500" height="350" style={CIN}></img>
          <img src="https://previews.123rf.com/images/tissenvadim/tissenvadim1803/tissenvadim180300005/96653781-portrait-de-jeune-fille-en-r%C3%A9tro-%C3%A9clairage-style-cartoon-noir-et-blanc-.jpg" width="150" height="200" style={Portrait}></img>
          <h2 style={NumberCard}> {data[0].cin}</h2>
          <h2 style={FirstName}>  {data[0].fisrtname} </h2>
          <h2 style={LastName}> {data[0].lastname} </h2>
          <h2 style={DateBirth}> {data[0].birthDate} </h2>
          <h2 style={Location}>  {data[0].address} </h2>
        </div>
      );
    }
  }
 

  export default CINComponent;