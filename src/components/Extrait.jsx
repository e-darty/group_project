import React from 'react';
import data from '../data/data.js';
import image from './Extrait.jpg'
import moment from "moment";

  class Extrait extends React.Component {
    render() {
      const NumberCard = {
        position: "absolute", 
        right: "710px",
        top: "270px"
      };
      const FirstName = {
        position: "absolute", 
        left: "700px",
        top: "435px"
      };
      const LastName = {
        position: "absolute", 
        left: "700px",
        top: "410px"
      };
      const Dateletter = {
        position: "absolute", 
        left: "700px",
        top: "520px"
      };
      const DateBirth = {
        position: "absolute", 
        left: "700px",
        top: "490px"
      };
      const BirthPlace = {
        position: "absolute", 
        left: "700px",
        top: "580px"
      };
      const Gender = {
        position: "absolute", 
        left: "700px",
        top: "635px"
      };
      const FatherName = {
        position: "absolute", 
        left: "700px",
        top: "685px"
      };
      const FatherProf = {
        position: "absolute", 
        left: "700px",
        top: "702px"
      };
      const FatherNationality = {
        position: "absolute", 
        left: "700px",
        top: "720px"
      };
      const MotherName = {
        position: "absolute", 
        left: "700px",
        top: "765px"
      };
      const MotherProf = {
        position: "absolute", 
        left: "700px",
        top: "783px"
      };
      const MotherNationality = {
        position: "absolute", 
        left: "700px",
        top: "800px"
      };
      const DeclarationDate = {
        position: "absolute", 
        left: "700px",
        top: "850px"
      };
      const DeclarantName = {
        position: "absolute", 
        left: "700px",
        top: "900px"
      };
      const DeclarantProf = {
        position: "absolute", 
        left: "700px",
        top: "920px"
      };
      const OfficerName = {
        position: "absolute", 
        left: "700px",
        top: "965px"
      };
      const OfficerQuality = {
        position: "absolute", 
        left: "700px",
        top: "985px"
      };
      const Observations = {
        position: "absolute", 
        left: "550px",
        top: "1050px"
      };
      const DateNow = {
        position: "absolute", 
        left: "1000px",
        top: "1220px"
      };
      const Gouvernorat= {
        position: "absolute",
        left: "610px",
        top: "230px"
      }
      const Delegation ={
        position: "absolute",
        left: "610px",
        top: "248px"
      }
      const Commune ={
        position: "absolute",
        left: "600px",
        top: "263px"
      }
      const ArrondiCommune ={
        position: "absolute",
        left: "620px",
        top: "280px"
      }
      const exnaissance = {
        position: 'absolute',
        left: '450px',
        top: '172px'
      }
      return (
        <div>
          <img src={image} width="850" height="1200" style={exnaissance}></img>
          <h4 style={Gouvernorat}> {data[1].gouvernorat}</h4>
          <h4 style={Delegation}>{data[1].delegation} </h4>
          <h4 style={Commune}>{data[1].commune} </h4>
          <h4 style={ArrondiCommune}>{data[1].commune} </h4>
          <h3 style={LastName}>  {data[1].lastName} </h3>
          <h3 style={FirstName}>  {data[1].firstName} </h3>
          <h3 style={DateBirth}> {data[1].birthDate} </h3>
          <h3 style={Dateletter}>  {data[1].birthDateLetters} </h3>
          <h3 style={BirthPlace}>  {data[1].birthPlace} </h3>
          <h3 style={Gender}>  {data[1].gender} </h3>
          <h4 style={FatherName}>  {data[1].fatherName} </h4>
          <h4 style={FatherProf}>  {data[1].fatherProf} </h4>
          <h4 style={FatherNationality}>  {data[1].fatherNationality} </h4>
          <h4 style={MotherName}>  {data[1].motherName} </h4>
          <h4 style={MotherProf}>  {data[1].motherProf} </h4>
          <h4 style={MotherNationality}>  {data[1].motherNationality} </h4>
          <h4 style={DeclarationDate}>  {data[1].birthDate} </h4>
          <h4 style={DeclarantName}>  {data[1].declarantName} </h4>
          <h4 style={DeclarantProf}>  {data[1].declarantProf} </h4>
          <h4 style={OfficerName}> {data[1].officerName} </h4>
          <h4 style={OfficerQuality}> {data[1].officerQuality} </h4>
          <h4 style={Observations}>  {data[1].observations} </h4>
          <h4 style={DateNow}>  {moment().format("DD-MM-YYYY hh:mm:ss")} </h4>
        </div>
      );
    }
  }
 

  export default Extrait;