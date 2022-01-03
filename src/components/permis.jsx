import React from 'react';
import data from '../data/data.js';
import image from './Permis.jpg'

  class DriveComponent extends React.Component {
    render() {
      const NumberCard = {
        position: "absolute", 
        right: "710px",
        top: "270px"
      };
      const FirstName = {
        position: "absolute", 
        left: "600px",
        top: "320px"
      };
      const LastName = {
        position: "absolute", 
        left: "600px",
        top: "270px"
      };
      const DateBirth = {
        position: "absolute", 
        left: "830px", 
        top: "400px"
      };
      const Location = {
        position: "absolute", 
        left: "600px", 
        top: "345px"
      };
      const Portrait = {
        position: "absolute", 
        left: "460px",
        top: "240px"
      };
      const CIN = {
        position: "absolute",
        left: "840px", 
        top: "376px"
      };
      const msg= {
        textAlign: "center"
      }
      const text1= {
        position: "absolute",
        left: "610px",
        top: "230px"
      }
      const text2 ={
        position: "absolute",
        left: "750px",
        top: "230px"
      }
      const permis = {
        position: 'absolute',
        left: '450px',
        top: '170px'
      }
      return (
        <div>
          <h3 style={msg}>Your Driving Licence</h3>
          <img src={image} width="500" height="350" style={permis}></img>
          <img src="https://pvtistes.net/forum/attachments/la-demande-de-pvt-canada-permis-vacances-travail-351/31941-photos-didentite-demande-de-permis-eic-pvt-jp-etc-img_9900.jpg" width="115" height="170" style={Portrait}></img>
          <h3 style={text1}> 23/145879 </h3>
          <h3 style={text2}>27/06/2014 </h3>
          <h3 style={LastName}> {data[1].lastName}</h3>
          <h3 style={FirstName}>  {data[1].fisrtname} </h3>
          <h3 style={Location}> {data[1].address} </h3>
          <h3 style={CIN}> {data[1].cin} </h3>
          <h3 style={DateBirth}> {data[1].birthDate} </h3>
          <h3 style={Location}>  {data[1].address} </h3>
        </div>
      );
    }
  }
 

  export default DriveComponent;