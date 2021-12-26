import React from 'react';
import data from '../../../data/data.js';
  class GreyComponent extends React.Component {
    render() {
      const NumberCard = {
        position: "absolute", 
        right: "710px",
        top: "270px"
      };
      const Name = {
        position: "absolute",  
        left: "700px", 
        top: "255px"
      };
      const DateBirth = {
        position: "absolute", 
        left: "830px", 
        top: "400px"
      };
      const Location = {
        position: "absolute", 
        left: "700px", 
        top: "300px"
      };
      const msg= {
        textAlign: "center"
      }
      const permis = {
        position: 'absolute',
        left: '450px',
        top: '170px'
      }
      const CIN = {
        position: 'absolute',
        left: '700px',
        top: '350px'
      }
      const privateCar = {
        position: 'absolute',
        left: '800px', 
        top: '400px'
      }
      const nameCar = {
        position: 'absolute',
        left: '550px',  
        top: '435px'
      }
      const typeCar= {
        position: 'absolute',
        left: '550px',  
        top: '475px' 
      }
      const NumCar2= {
        position: 'absolute',
        left: '465px',  
        top: '220px' ,
        transform: "rotate(-90deg)"
      }
      const NumCar1= {
        position: 'absolute',
        left: '465px', 
        top: '420px' ,
        transform: "rotate(-90deg)"
      }
      return (
        <div>
        <h3 style={msg}>Your Gray Card</h3>
          <img src="https://i.pinimg.com/736x/0b/7b/9d/0b7b9dc2fc9faeb62def3b9e272127b6.jpg" width="500" height="350" style={permis}></img>
          <h3 style={Name}>  {data[1].fisrtname} {data[1].lastName} </h3>
          <h3 style={Location}> {data[1].address} </h3>
          <h3 style={CIN}> {data[1].cin} </h3>
          <h3 style={privateCar}>privée</h3>
          <h3 style={nameCar}>{data[1].carName}</h3>
          <h3 style={typeCar}> {data[1].carType}</h3>
          <h3 style={NumCar2}>  {data[1].carNum2} </h3>
          <h3 style={NumCar1}> {data[1].carNum1} </h3>
        </div>
      );
    }
  }
 

  export default GreyComponent;