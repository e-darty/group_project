import React from 'react';
import data from '../../../data/data.js';
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
          <img src="https://i.pinimg.com/736x/0b/7b/9d/0b7b9dc2fc9faeb62def3b9e272127b6.jpg" width="500" height="350" style={permis}></img>
          <img src="https://previews.123rf.com/images/tissenvadim/tissenvadim1803/tissenvadim180300005/96653781-portrait-de-jeune-fille-en-r%C3%A9tro-%C3%A9clairage-style-cartoon-noir-et-blanc-.jpg" width="150" height="200" style={Portrait}></img>
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