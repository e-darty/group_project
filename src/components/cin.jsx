import React from 'react';
import data from '../data/data.js';
import image from './cin.jpg'

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
        top: "275px"
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
          <h3 style={msg}>Your CIN Card</h3>
          <img src={image} width="500" height="350" style={CIN}></img>
          <img src="https://pvtistes.net/forum/attachments/la-demande-de-pvt-canada-permis-vacances-travail-351/31941-photos-didentite-demande-de-permis-eic-pvt-jp-etc-img_9900.jpg" width="150" height="200" style={Portrait}></img>
          <h3 style={NumberCard}> {data[1].cin}</h3>
          <h3 style={FirstName}>  {data[1].fisrtname} </h3>
          <h3 style={LastName}> {data[1].lastName} </h3>
          <h3 style={DateBirth}> {data[1].birthDate} </h3>
          <h3 style={Location}>  {data[1].address} </h3>
        </div>
      );
    }
  }
 

  export default CINComponent;